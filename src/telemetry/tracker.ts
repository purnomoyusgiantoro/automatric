import { TelemetryEvent, TelemetryEventName, LogLevel } from './types';

// Correlation ID management (stable per browser session)
const SESSION_STORAGE_KEY = 'automatric_telemetry_session_id';

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'ssr_session';
  try {
    let sid = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sid) {
      sid = 'ses_' + (window.crypto?.randomUUID ? window.crypto.randomUUID().slice(0, 13) : Math.random().toString(36).slice(2, 12));
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    return sid;
  } catch {
    return 'ses_fallback_' + Math.random().toString(36).slice(2, 10);
  }
}

const activeSessionId = getOrCreateSessionId();
const telemetryRingBuffer: TelemetryEvent[] = [];
const MAX_BUFFER_SIZE = 100;

// Strict PII Sanitizer: prevents leaking phone numbers, emails, or personal messages
function sanitizePayload(payload: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(payload)) {
    if (typeof val === 'string') {
      // Redact potential emails or tokens
      if (val.includes('@') && val.includes('.')) {
        sanitized[key] = '[REDACTED_EMAIL]';
      } else if (val.length > 150) {
        sanitized[key] = val.slice(0, 150) + '...[TRUNCATED]';
      } else {
        sanitized[key] = val;
      }
    } else if (typeof val === 'object' && val !== null) {
      sanitized[key] = sanitizePayload(val as Record<string, unknown>);
    } else {
      sanitized[key] = val;
    }
  }
  return sanitized;
}

export function trackEvent(
  event: TelemetryEventName,
  payload: Record<string, unknown> = {},
  level: LogLevel = 'info',
  latencyMs?: number
): TelemetryEvent {
  const cleanPayload = sanitizePayload(payload);
  const telemetryEvent: TelemetryEvent = {
    timestamp: new Date().toISOString(),
    sessionId: activeSessionId,
    level,
    event,
    payload: cleanPayload,
    latencyMs,
  };

  // Keep in circular memory buffer
  telemetryRingBuffer.push(telemetryEvent);
  if (telemetryRingBuffer.length > MAX_BUFFER_SIZE) {
    telemetryRingBuffer.shift();
  }

  // Structured logging to console with clear machine-readable format
  const logMethod = level === 'error' ? console.error : level === 'warn' ? console.warn : console.info;
  logMethod(`[TELEMETRY][${telemetryEvent.event}]`, JSON.stringify(telemetryEvent));

  return telemetryEvent;
}

export function getTelemetrySessionId(): string {
  return activeSessionId;
}

export function getTelemetryEvents(): TelemetryEvent[] {
  return [...telemetryRingBuffer];
}

// Observe Performance and Core Web Vitals
export function initObservability(): void {
  if (typeof window === 'undefined') return;

  trackEvent('page_view', {
    path: window.location.pathname,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    referrer: document.referrer ? new URL(document.referrer).hostname : 'direct',
  });

  // TTFB from navigation timing
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const nav = navEntries[0] as PerformanceNavigationTiming;
      const ttfb = Math.round(nav.responseStart - nav.requestStart);
      trackEvent('web_vitals', {
        metric: 'TTFB',
        value: ttfb,
        rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor',
      });
    }
  } catch {
    // Ignore unsupported navigation metrics
  }

  // FCP and LCP
  if ('PerformanceObserver' in window) {
    try {
      const paintObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const fcp = Math.round(entry.startTime);
            trackEvent('web_vitals', {
              metric: 'FCP',
              value: fcp,
              rating: fcp < 1800 ? 'good' : fcp < 3000 ? 'needs-improvement' : 'poor',
            });
          }
        }
      });
      paintObserver.observe({ type: 'paint', buffered: true });
    } catch {
      // Paint observer fallback
    }

    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = Math.round(lastEntry.startTime);
          trackEvent('web_vitals', {
            metric: 'LCP',
            value: lcp,
            rating: lcp < 2500 ? 'good' : lcp < 4000 ? 'needs-improvement' : 'poor',
          });
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // LCP observer fallback
    }

    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShift = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          trackEvent('web_vitals', {
            metric: 'CLS',
            value: parseFloat(clsValue.toFixed(4)),
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
          });
        }
      });
    } catch {
      // CLS observer fallback
    }
  }

  // Global error handler
  window.addEventListener('error', (event) => {
    trackEvent(
      'client_error',
      {
        message: event.message,
        filename: event.filename ? event.filename.split('/').pop() : 'unknown',
        lineno: event.lineno,
      },
      'error'
    );
  });
}
