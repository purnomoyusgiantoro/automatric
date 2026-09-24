export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  duration: string;
  popular?: boolean;
  features: string[];
  whatsappMessage: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  metrics: string;
  highlights: string[];
}

export interface WorkflowStep {
  step: string;
  day: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Automatric",
  tagline: "Next-Gen AI Growth Agency",
  description:
    "Membantu bisnis & UMKM melipatgandakan omset dan efisiensi melalui otomasi cerdas WhatsApp AI 24/7, produksi materi promosi dan desain kilat dalam hitungan jam, serta strategi iklan berbasis kecerdasan buatan.",
  // Ganti nomor WhatsApp tujuan di bawah ini (gunakan format kode negara tanpa '+', misal '628...')
  whatsappNumber: "6281234567890",
  githubRepo: "https://github.com/purnomoyusgiantoro/automatric",

  navLinks: [
    { name: "Layanan", href: "#layanan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Paket Harga", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],

  heroMetrics: [
    { value: "+350%", label: "Kecepatan Respon CS" },
    { value: "5x", label: "Produksi Konten Promosi" },
    { value: "<24 Jam", label: "Turnaround Desain" },
    { value: "3-7 Hari", label: "Setup Beres Siap Pakai" },
  ],

  pillars: [
    {
      id: "whatsapp-ai",
      title: "Otomasi CS & Chatbot WhatsApp AI",
      subtitle: "CS Pintar Siaga 24 Jam Nonstop",
      badge: "Otomasi Cerdas 24/7",
      description:
        "Tingkatkan konversi penjualan tanpa admin kewalahan. Chatbot AI memahami bahasa santai pembeli, menjawab katalog & info produk secara instan, mencatat pesanan ke Google Sheets, dan melakukan follow-up otomatis.",
      metrics: "Hemat biaya admin hingga 70%",
      highlights: [
        "Menjawab pertanyaan pelanggan secara natural dalam hitungan detik",
        "Katalog produk dan pengecekan stok terintegrasi otomatis",
        "Rekapitulasi data pembeli langsung ke spreadsheet bisnis Anda",
        "Sistem follow-up ramah untuk prospek yang belum transfer",
      ],
    },
    {
      id: "creative-speed",
      title: "Desain Promosi & Materi Kreatif Kilat",
      subtitle: "Aset Visual Berkualitas Siap dalam Jam",
      badge: "Turnaround < 24 Jam",
      description:
        "Jangan biarkan momen tren promosi terlewat. Tim Automatric memproduksi banner iklan konversi tinggi, feed & story Instagram/Facebook, katalog visual, hingga video animasi promosi pendek secara ekspres.",
      metrics: "10x lebih cepat dibanding agensi konvensional",
      highlights: [
        "Banner iklan Meta & TikTok Ads dengan visual memikat mata",
        "Materi konten harian feed, carousel edukasi, & story interaktif",
        "Video promosi pendek berformat reels/shorts dengan audio jernih",
        "Desain disesuaikan dengan identitas brand bisnis Anda",
      ],
    },
    {
      id: "ai-ads",
      title: "Iklan Berbasis AI & Growth Marketing",
      subtitle: "Targeting Presisi untuk Penjualan Maksimal",
      badge: "Skalabilitas ROI",
      description:
        "Hentikan bakar uang di iklan yang tidak menghasilkan. Kami menggunakan kecerdasan buatan untuk meriset audiens yang siap beli, menyusun copywriting persuasi psikologis terbukti, dan mengoptimalkan anggaran iklan Anda.",
      metrics: "Optimasi ROAS terukur hingga 4.2x",
      highlights: [
        "Riset kata kunci dan target minat audiens dengan AI analysis",
        "Copywriting dengan formula terbukti (AIDA & PAS) untuk konversi",
        "Setup dan monitoring kampanye iklan di Meta Ads & TikTok Ads",
        "Laporan analitik performa transparan dan mudah dipahami",
      ],
    },
  ] as ServicePillar[],

  workflow: [
    {
      step: "01",
      day: "Hari ke-1",
      title: "Discovery & Briefing Kilat",
      description:
        "Sesi konsultasi singkat untuk memetakan produk unggulan, karakter pembeli, nomor WhatsApp yang akan digunakan, dan target promosi Anda.",
    },
    {
      step: "02",
      day: "Hari ke 2 - 4",
      title: "AI Training & Creative Sprint",
      description:
        "Kami melatih bot WhatsApp dengan data bisnis Anda, membangun otomasi rekap pesanan, dan mendesain paket materi promosi kilat siap tayang.",
    },
    {
      step: "03",
      day: "Hari ke-5",
      title: "Testing & Polishing",
      description:
        "Uji coba alur percakapan bot, simulasi order, pengecekan ketepatan copywriting iklan, dan finalisasi seluruh aset desain bersama Anda.",
    },
    {
      step: "04",
      day: "Hari ke 6 - 7",
      title: "Go-Live & Handover",
      description:
        "Peluncuran resmi sistem AI Anda. Penyerahan aset, panduan ringkas cara penggunaan, dan dimulainya masa pendampingan serta garansi.",
    },
  ] as WorkflowStep[],

  pricing: [
    {
      id: "starter-sprint",
      name: "Starter AI Sprint",
      tagline: "Langkah awal cepat untuk UMKM yang ingin respon CS instan dan promosi rapi.",
      price: 2900000,
      formattedPrice: "Rp 2.900.000",
      duration: "Sprint 3-5 Hari • Sekali Bayar",
      popular: false,
      features: [
        "Setup 1 Nomor WhatsApp Business AI Cerdas",
        "Auto-reply FAQ, alamat toko, & jam operasional",
        "10 Desain Promosi Kilat (Feed & Story)",
        "5 Template Copywriting Promosi Berbasis AI",
        "Waktu Pengerjaan 3-5 Hari Kerja",
        "Garansi Revisi & Pendampingan 7 Hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya tertarik mengambil paket *Starter AI Sprint* (Rp 2.9jt) untuk bisnis saya. Mohon informasi langkah awalnya.",
    },
    {
      id: "growth-sprint",
      name: "Growth Sprint Suite",
      tagline: "Paket lengkap terpopuler untuk melipatgandakan orderan tanpa menambah tim admin.",
      price: 5900000,
      formattedPrice: "Rp 5.900.000",
      duration: "Sprint 5-7 Hari • Sekali Bayar",
      popular: true,
      features: [
        "Smart CS WhatsApp AI (paham bahasa santai & cek stok)",
        "Rekapitulasi pesanan otomatis ke Google Sheets",
        "Sistem Follow-up ramah untuk prospek belum transfer",
        "25 Desain Promosi Kilat Multi-Format",
        "3 Video Motion Promosi Pendek (Reels / TikTok)",
        "Setup Kampanye Iklan Berbasis AI (Meta / TikTok Ads)",
        "Waktu Pengerjaan 5-7 Hari Kerja",
        "Garansi Pendampingan & Monitoring 14 Hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya ingin memesan paket *Growth Sprint Suite* (Rp 5.9jt) untuk percepatan bisnis saya. Bagaimana proses mulainya?",
    },
    {
      id: "domination-sprint",
      name: "Domination Scale Sprint",
      tagline: "Otomasi skala penuh untuk brand & retail yang ingin dominasi pasar secara agresif.",
      price: 9900000,
      formattedPrice: "Rp 9.900.000",
      duration: "Sprint 10-14 Hari • Sekali Bayar",
      popular: false,
      features: [
        "Multi-Agent AI Workflow (Agen CS + Closing + Rekap)",
        "Fitur eskalasi instan ke nomor WhatsApp admin manusia",
        "Unlimited Desain Promosi Kilat selama sprint 14 hari",
        "10 Video Promosi AI (Voiceover AI + Sinematik B-Roll)",
        "Full Setup Iklan AI Multi-Platform + Analitik Audiens",
        "Sesi Training Khusus untuk tim internal bisnis Anda",
        "Waktu Pengerjaan 10-14 Hari Kerja",
        "Garansi Pendampingan & Optimasi Prioritas 30 Hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya tertarik dengan paket *Domination Scale Sprint* (Rp 9.9jt) untuk transformasi bisnis saya. Mari jadwalkan diskusi lebih lanjut.",
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "Apakah sistem WhatsApp AI ini aman dan tidak membuat nomor terblokir?",
      answer:
        "Sangat aman. Kami menggunakan alur integrasi resmi WhatsApp Business API atau sistem emulasi jeda respon alami manusia (*human-like typing delay*), sehingga nomor bisnis Anda tetap aman dari risiko pemblokiran.",
    },
    {
      question: "Apakah saya harus punya keahlian teknis untuk menggunakannya?",
      answer:
        "Sama sekali tidak. Tim Automatric menyiapkan seluruh sistem dari nol hingga siap pakai. Anda dan tim hanya perlu membaca notifikasi orderan atau membuka spreadsheet rekap pesanan yang sudah terisi otomatis.",
    },
    {
      question: "Berapa lama proses pengerjaan sprint sampai sistem aktif?",
      answer:
        "Tergantung paket yang Anda pilih: Paket Starter selesai dalam 3–5 hari kerja, Paket Growth dalam 5–7 hari kerja, dan Paket Domination dalam 10–14 hari kerja.",
    },
    {
      question: "Apakah ada biaya bulanan tersembunyi setelah sprint selesai?",
      answer:
        "Tidak ada. Sistem penetapan harga kami adalah Project Sprint Sekali Bayar untuk setup dan pembuatan seluruh aset. Anda tidak terikat kontrak langganan wajib dengan kami.",
    },
    {
      question: "Bagaimana jika ada materi desain atau alur bot yang perlu direvisi?",
      answer:
        "Setiap paket sudah dilengkapi masa garansi dan pendampingan (7 hingga 30 hari). Selama periode tersebut, Anda bisa meminta revisi dan penyesuaian hingga alur berjalan sempurna.",
    },
  ] as FaqItem[],
};
