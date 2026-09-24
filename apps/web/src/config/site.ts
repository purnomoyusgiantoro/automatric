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
  tagline: "Otomasi WhatsApp & Desain Promosi Kilat",
  description:
    "Kami membantu toko online dan UMKM melayani pembeli otomatis di WhatsApp selama 24 jam nonstop, memproduksi materi promosi visual siap tayang dalam waktu kurang dari 24 jam, dan menyiapkan kampanye iklan digital terarah.",
  // Ganti nomor WhatsApp tujuan di bawah ini (gunakan format kode negara tanpa '+', misal '628...')
  whatsappNumber: "6281234567890",
  githubRepo: "https://github.com/purnomoyusgiantoro/automatric",

  navLinks: [
    { name: "Layanan", href: "#layanan" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Paket Biaya", href: "#pricing" },
    { name: "Kontak", href: "#kontak" },
    { name: "FAQ", href: "#faq" },
  ],

  contact: {
    phone: "+62 812-3456-7890",
    whatsapp: "+62 812-3456-7890",
    email: "halo@automatric.com",
    address: "Jakarta, Indonesia",
    hours: "24 Jam Nonstop (Respon < 1 Detik)",
  },

  heroMetrics: [
    { value: "< 1 Detik", label: "Waktu Respon Balasan Bot" },
    { value: "< 24 Jam", label: "Waktu Pembuatan Desain" },
    { value: "3 - 7 Hari", label: "Waktu Pengerjaan Sprint" },
    { value: "Sekali Bayar", label: "Tanpa Biaya Langganan" },
  ],

  pillars: [
    {
      id: "whatsapp-ai",
      title: "Otomasi Percakapan WhatsApp",
      subtitle: "Melayani Pertanyaan Pembeli 24 Jam Nonstop",
      badge: "Siaga 24 Jam",
      description:
        "Layani pesan pelanggan kapan saja tanpa membuat staf admin kewalahan. Sistem bot membalas pertanyaan umum, menampilkan katalog produk, mencatat data pesanan ke Google Sheets, dan mengirimkan pesan pengingat kepada pembeli yang belum menyelesaikan pembayaran.",
      metrics: "Siaga melayani pelanggan 24 jam nonstop",
      highlights: [
        "Membalas pesan pembeli secara otomatis dalam hitungan detik",
        "Katalog produk dan pengecekan stok otomatis",
        "Pencatatan rincian pesanan langsung ke Google Sheets",
        "Pesan pengingat ramah untuk pembeli yang belum transfer",
      ],
    },
    {
      id: "creative-speed",
      title: "Pembuatan Desain Promosi Kilat",
      subtitle: "Materi Visual Siap Tayang dalam Waktu Kurang dari 24 Jam",
      badge: "Pengerjaan < 24 Jam",
      description:
        "Dapatkan materi promosi visual tanpa perlu menunggu antrean berminggu-minggu. Kami memproduksi materi banner iklan, konten feed, story Instagram, dan video promosi pendek siap pasang yang disesuaikan dengan identitas brand Anda.",
      metrics: "Turnaround materi promosi di bawah 24 jam",
      highlights: [
        "Banner materi iklan siap pasang untuk Meta Ads dan TikTok Ads",
        "Format materi visual feed 1:1, story 9:16, dan banner landscape",
        "Video promosi pendek untuk format Reels dan TikTok",
        "Penyelarasan warna, logo, dan gaya visual toko Anda",
      ],
    },
    {
      id: "ai-ads",
      title: "Setup Iklan Digital Terarah",
      subtitle: "Riset Target Audiens dan Pengaturan Anggaran",
      badge: "Meta Ads & TikTok Ads",
      description:
        "Kami membantu merancang dan mengatur kampanye iklan toko Anda di Meta Ads dan TikTok Ads: mulai dari riset segmen audiens yang relevan, penulisan kalimat promosi yang jelas, hingga pengaturan batas anggaran harian agar pengeluaran tetap terkontrol.",
      metrics: "Laporan performa berkala yang mudah dipahami",
      highlights: [
        "Riset minat audiens dan kata kunci pencarian yang relevan",
        "Penulisan teks iklan yang langsung menjelaskan nilai produk",
        "Pengaturan teknis kampanye iklan di Meta Ads dan TikTok Ads",
        "Laporan ringkas mengenai biaya dan hasil perolehan pesanan",
      ],
    },
  ] as ServicePillar[],

  workflow: [
    {
      step: "01",
      day: "Hari ke-1",
      title: "Konsultasi Alur dan Produk",
      description:
        "Kami mendiskusikan daftar produk utama Anda, jam buka toko, daftar pertanyaan yang sering diajukan pembeli, dan nomor WhatsApp yang akan digunakan.",
    },
    {
      step: "02",
      day: "Hari ke 2 - 4",
      title: "Pemasangan Bot dan Produksi Desain",
      description:
        "Kami memasukkan data produk ke dalam sistem bot, menghubungkan integrasi lembar kerja Google Sheets, dan membuat paket desain promosi yang dibutuhkan.",
    },
    {
      step: "03",
      day: "Hari ke-5",
      title: "Uji Coba Alur dan Pemeriksaan Bersama",
      description:
        "Kami menguji alur percakapan dan simulasi pemesanan di WhatsApp bersama Anda untuk memastikan ketepatan harga, ketersediaan stok, dan bahasa jawaban bot.",
    },
    {
      step: "04",
      day: "Hari ke 6 - 7",
      title: "Peluncuran dan Serah Terima Sistem",
      description:
        "Sistem bot diaktifkan secara resmi. Kami menyerahkan seluruh akses file materi promosi, panduan ringkas penggunaan, dan memulai masa pendampingan operasional.",
    },
  ] as WorkflowStep[],

  pricing: [
    {
      id: "starter-sprint",
      name: "Starter Sprint",
      tagline: "Pilihan tepat untuk toko yang membutuhkan bot penjawab otomatis dan materi promosi dasar.",
      price: 2900000,
      formattedPrice: "Rp 2.900.000",
      duration: "Sprint 3-5 Hari Kerja • Sekali Bayar",
      popular: false,
      features: [
        "Setup 1 nomor WhatsApp Business dengan bot penjawab otomatis",
        "Menjawab otomatis jam operasional, alamat toko, dan info produk",
        "10 materi desain promosi (format feed dan story)",
        "5 variasi teks promosi siap pakai",
        "Waktu pengerjaan 3-5 hari kerja",
        "Masa pendampingan dan penyesuaian selama 7 hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya ingin memesan paket Starter Sprint (Rp 2.900.000) untuk bisnis saya. Mohon informasi langkah awalnya.",
    },
    {
      id: "growth-sprint",
      name: "Growth Sprint",
      tagline: "Paket lengkap untuk toko aktif yang ingin pesanan tercatat rapi tanpa menambah staf admin.",
      price: 5900000,
      formattedPrice: "Rp 5.900.000",
      duration: "Sprint 5-7 Hari Kerja • Sekali Bayar",
      popular: true,
      features: [
        "Bot WhatsApp interaktif (cek stok, katalog, dan info varian produk)",
        "Pencatatan pesanan otomatis langsung ke Google Sheets",
        "Fitur pesan pengingat ramah untuk pembeli yang belum transfer",
        "25 materi desain promosi multi-format",
        "3 video promosi pendek untuk Reels atau TikTok",
        "Setup kampanye iklan terarah di Meta Ads atau TikTok Ads",
        "Waktu pengerjaan 5-7 hari kerja",
        "Masa pendampingan dan penyesuaian selama 14 hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya ingin memesan paket Growth Sprint (Rp 5.900.000) untuk bisnis saya. Bagaimana proses mulainya?",
    },
    {
      id: "domination-sprint",
      name: "Scale Sprint",
      tagline: "Setup menyeluruh untuk bisnis dengan volume chat tinggi dan kebutuhan materi promosi berkala.",
      price: 9900000,
      formattedPrice: "Rp 9.900.000",
      duration: "Sprint 10-14 Hari Kerja • Sekali Bayar",
      popular: false,
      features: [
        "Bot WhatsApp terintegrasi dengan opsi alih obrolan ke admin manusia",
        "Integrasi katalog lengkap dan rekap pesanan pembeli",
        "Produksi materi desain promosi berkala selama sprint 14 hari",
        "10 video promosi pendek dengan visual dan audio siap pakai",
        "Setup kampanye iklan Meta dan TikTok lengkap dengan pelacakan analitik",
        "Sesi penjelasan cara kerja sistem untuk tim operasional toko Anda",
        "Waktu pengerjaan 10-14 hari kerja",
        "Masa pendampingan dan pemantauan prioritas selama 30 hari",
      ],
      whatsappMessage:
        "Halo Automatric! Saya ingin memesan paket Scale Sprint (Rp 9.900.000) untuk bisnis saya. Mari jadwalkan diskusi alur kerjanya.",
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "Apakah sistem bot WhatsApp ini aman dari pemblokiran?",
      answer:
        "Aman. Kami mengatur jeda pengiriman pesan yang wajar menyerupai kebiasaan manusia dan hanya merespons pesan yang masuk dari pelanggan, bukan melakukan pengiriman pesan massal tanpa persetujuan ke nomor asing.",
    },
    {
      question: "Apakah saya atau staf saya harus mengerti pemrograman untuk menggunakannya?",
      answer:
        "Tidak perlu. Seluruh persiapan teknis, penulisan jawaban bot, dan pembuatan materi desain kami siapkan sampai selesai. Anda dan tim cukup membuka lembar kerja spreadsheet untuk melihat rekap pesanan atau membalas chat secara manual jika pembeli meminta bantuan staf.",
    },
    {
      question: "Berapa lama proses pembuatan hingga sistem siap digunakan?",
      answer:
        "Waktu pengerjaan bergantung pada paket yang Anda pilih: Starter Sprint selesai dalam 3 sampai 5 hari kerja, Growth Sprint dalam 5 sampai 7 hari kerja, dan Scale Sprint dalam 10 sampai 14 hari kerja.",
    },
    {
      question: "Apakah ada biaya langganan bulanan setelah pengerjaan selesai?",
      answer:
        "Tidak ada biaya langganan bulanan dari kami. Model kerja kami adalah pengerjaan sprint satu kali bayar untuk setup dan pembuatan seluruh aset. Anda tidak terikat kontrak langganan wajib dengan kami.",
    },
    {
      question: "Bagaimana jika ada bagian jawaban bot atau desain yang perlu disesuaikan?",
      answer:
        "Setiap paket sudah dilengkapi masa pendampingan (antara 7 hingga 30 hari tergantung paket). Selama masa tersebut, kami akan membantu memperbaiki jawaban bot maupun materi promosi hingga alur pemesanan berjalan lancar.",
    },
  ] as FaqItem[],
};
