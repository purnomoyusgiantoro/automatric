export type LogLevel = 'info' | 'warn' | 'error';

export type TelemetryEventName =
  | 'page_view'
  | 'section_viewed'
  | 'pricing_plan_clicked'
  | 'whatsapp_redirect'
  | 'web_vitals'
  | 'client_error';

export interface TelemetryEvent {
  timestamp: string;
  sessionId: string;
  level: LogLevel;
  event: TelemetryEventName;
  payload: Record<string, unknown>;
  latencyMs?: number;
}

export interface WebVitalsPayload {
  metric: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'INP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface PricingPlanClickedPayload {
  planId: string;
  planName: string;
  price: number;
}

export interface WhatsAppRedirectPayload {
  source: 'navbar' | 'hero' | 'pricing_card' | 'pricing_bar' | 'floating';
  planId?: string;
  destination: string;
}
