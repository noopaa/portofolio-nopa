import { Project, ProcessStep, Service } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Nova Sugesti',
  profession: 'WEB & UI DESIGNER',
  year: '2026',
  tagline: 'Desain yang Menghubungkan. Menginspirasi.',
  bio: 'Saya seorang desainer kreatif yang berfokus pada pengalaman digital modern dengan desain yang estetis, fungsional, dan berkesan.',
  extendedBio: 'Berpengalaman dalam merancang website modern, antarmuka aplikasi intuitif, dan identitas visual yang memperkuat nilai bisnis. Setiap karya dirancang dengan perhatian mendalam pada estetika editorial, kesederhanaan, dan kemudahan bagi pengguna akhir.',
  location: 'Serang, Banten, Indonesia',
  phoneDisplay: '085882163063',
  phoneRaw: '6285882163063',
  email: 'hello@novasugesti.id',
  website: 'www.novasugesti.id',
  whatsappBaseUrl: 'https://wa.me/6285882163063',
  defaultWhatsAppMessage: 'Halo Nova, saya tertarik dengan layanan desain Anda.',
  socials: {
    instagram: 'https://instagram.com/novasugesti',
    linkedin: 'https://linkedin.com/in/novasugesti',
    pinterest: 'https://pinterest.com/novasugesti',
    dribbble: 'https://dribbble.com/novasugesti'
  }
};

export function createWhatsAppLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || PERSONAL_INFO.defaultWhatsAppMessage);
  return `${PERSONAL_INFO.whatsappBaseUrl}?text=${text}`;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'aurora-interiors',
    number: '01',
    title: 'AURORA INTERIORS',
    category: 'Desain Web',
    subtitle: 'Website studio interior mewah',
    description: 'Website studio interior mewah dengan estetika editorial hangat dan pengalaman navigasi yang imersif.',
    fullDescription: 'Proyek website resmi untuk studio interior premium Aurora Interiors. Fokus desain adalah menghadirkan visualisasi ruang arsitektural yang megah melalui tata letak bernuansa majalah, transisi halaman yang anggun, dan tipografi berkelas tinggi yang mencerminkan karya kerajinan tingkat dewa.',
    image: '/assets/portfolio/project_aurora.png',
    client: 'Aurora Design Studio',
    year: '2026',
    deliverables: ['Responsive Web Design', 'Interactive Prototype', 'Design System', 'Art Direction'],
    tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    tags: ['Interior Design', 'Luxury Editorial', 'Responsive Web'],
    highlights: [
      'Peningkatan waktu kunjungan pengguna rata-rata hingga 65%',
      'Sistem layout modular yang memudahkan kurasi portofolio interior baru',
      'Warna bernuansa earthy bronze dan warm lighting yang selaras dengan foto ruang'
    ]
  },
  {
    id: 'velvet-app',
    number: '02',
    title: 'VELVET APP',
    category: 'Desain UI/UX',
    subtitle: 'Aplikasi e-commerce kecantikan',
    description: 'Aplikasi e-commerce kecantikan dengan alur belanja mulus dan micro-interaction yang memikat.',
    fullDescription: 'Aplikasi belanja mobile generasi terbaru untuk produk perawatan kulit dan kecantikan high-end. Menggabungkan kemudahan navigasi satu jempol, fitur shade-matcher interaktif, dan checkout ekspres dengan palet warna rose-beige yang feminin nan anggun.',
    image: '/assets/portfolio/project_velvet.png',
    client: 'Velvet Beauty Group',
    year: '2026',
    deliverables: ['Mobile UI/UX Design', 'User Journey Mapping', 'Design Tokens', 'Interactive Prototype'],
    tools: ['Figma', 'Protopie', 'UserTesting'],
    tags: ['E-Commerce Mobile', 'Beauty & Skincare', 'Micro-interactions'],
    highlights: [
      'Konversi checkout meningkat 38% pada tahap pengujian usability',
      'Desain navigasi thumb-friendly dengan aksesibilitas ramah pengguna',
      'Komponen antarmuka yang terstandarisasi untuk iOS & Android'
    ]
  },
  {
    id: 'noir-living',
    number: '03',
    title: 'NOIR LIVING',
    category: 'Desain Web',
    subtitle: 'Blog & majalah gaya hidup',
    description: 'Blog dan majalah gaya hidup minimalis dengan pembacaan terfokus dan visual sinematik gelap.',
    fullDescription: 'Publikasi digital dan jurnal gaya hidup kontemporer dengan tema monokromatik gelap yang dramatis. Memberikan pengalaman membaca artikel editorial layaknya membuka buku seni eksklusif dengan tipografi serif tajam dan tata ruang terstruktur.',
    image: '/assets/portfolio/project_noir.png',
    client: 'Noir Editorial Publishing',
    year: '2025 - 2026',
    deliverables: ['Editorial Web Layout', 'Content Hierarchy', 'Typography System', 'Dark Mode UI'],
    tools: ['Figma', 'Tailwind CSS', 'Next.js'],
    tags: ['Editorial Publication', 'Dark Minimalist', 'Content Strategy'],
    highlights: [
      'Rasio keterbacaan artikel panjang meningkat secara konsisten',
      'Tipografi yang dioptimalkan untuk kenyamanan mata pembaca di berbagai ukuran layar',
      'Estetika minimalis monokrom yang kuat dan berani'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '1',
    name: 'DISCOVER',
    shortDesc: 'Memahami tujuan, audiens, dan tantangan.',
    fullDesc: 'Mendengarkan visi Anda, membedah karakteristik target audiens, dan meneliti lanskap kompetitif agar pondasi proyek berdiri kokoh.',
    details: [
      'Briefing mendalam & wawancara kebutuhan',
      'Riset tren visual dan benchmark kompetitor',
      'Penetapan tujuan bisnis dan indikator sukses'
    ],
    icon: 'search'
  },
  {
    step: '2',
    name: 'STRATEGIZE',
    shortDesc: 'Merancang strategi dan solusi desain.',
    fullDesc: 'Menyusun wireframe, peta alur pengguna (user journey), dan arsitektur informasi yang efektif sebelum masuk ke visual detail.',
    details: [
      'Pemetaan alur navigasi & informasi',
      'Sketsa wireframe low-fidelity',
      'Moodboard arah visual & palet warna'
    ],
    icon: 'lightbulb'
  },
  {
    step: '3',
    name: 'DESIGN',
    shortDesc: 'Membuat desain yang kreatif dan berpusat pada pengguna.',
    fullDesc: 'Mengeksekusi desain visual berdefinisi tinggi, sistem tipografi, komponen interaktif, dan animasi yang halus serta konsisten.',
    details: [
      'High-fidelity UI mockups & layouts',
      'Design system & komponen reusable',
      'Prototipe interaktif untuk pengujian'
    ],
    icon: 'pencil'
  },
  {
    step: '4',
    name: 'DELIVER',
    shortDesc: 'Menyempurnakan dan meluncurkan hasil terbaik.',
    fullDesc: 'Melakukan penyesuaian akhir berdasar umpan balik, menyiapkan aset siap koding (developer handoff), dan memastikan peluncuran berjalan mulus.',
    details: [
      'Developer handoff & dokumentasi spesifikasi',
      'Quality assurance visual & responsivitas',
      'Dukungan paska peluncuran dan evaluasi'
    ],
    icon: 'rocket'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'DESAIN WEB',
    shortDesc: 'Website profesional yang menarik dan responsif.',
    description: 'Pembuatan desain website kustom dengan tampilan editorial berkelas, responsif di semua perangkat, dan berorientasi pada konversi.',
    deliverables: ['Landing page berkelas', 'Website perusahaan & portofolio', 'Tata letak responsif mobile-desktop', 'Desain aset web siap koding'],
    icon: 'laptop',
    whatsappMessage: 'Halo Nova, saya ingin berkonsultasi mengenai layanan Desain Web untuk proyek saya.'
  },
  {
    id: 'ui-ux',
    title: 'DESAIN UI/UX',
    shortDesc: 'Antarmuka yang intuitif dan mudah digunakan.',
    description: 'Perancangan antarmuka pengguna aplikasi mobile maupun web yang mengutamakan kenyamanan, kemudahan pakai, dan alur interaksi natural.',
    deliverables: ['Mobile app user interface (iOS/Android)', 'User flow & wireframing', 'Prototipe interaktif clickable', 'Usability evaluation'],
    icon: 'smartphone',
    whatsappMessage: 'Halo Nova, saya ingin berkonsultasi mengenai layanan Desain UI/UX aplikasi saya.'
  },
  {
    id: 'branding',
    title: 'BRANDING',
    shortDesc: 'Membangun identitas merek yang kuat.',
    description: 'Penciptaan identitas visual yang khas, mencakup panduan warna, tipografi, logo, dan moodboard visual yang membedakan Anda di pasar.',
    deliverables: ['Brand guidelines book', 'Palet warna & sistem tipografi', 'Arah visual & tone of voice', 'Aset grafis pendukung'],
    icon: 'feather',
    whatsappMessage: 'Halo Nova, saya tertarik untuk membangun identitas Branding bersama Anda.'
  },
  {
    id: 'design-system',
    title: 'SISTEM DESAIN',
    shortDesc: 'Komponen desain untuk konsistensi visual.',
    description: 'Penyusunan pustaka komponen antarmuka yang terstandarisasi untuk mempercepat proses pengembangan produk digital tim Anda.',
    deliverables: ['Figma component library with auto-layout', 'Design tokens (warna, font, spacing)', 'Dokumentasi pola interaksi UI', 'Sistem varian & states'],
    icon: 'layers',
    whatsappMessage: 'Halo Nova, saya ingin berdiskusi mengenai pembuatan Sistem Desain (Design System).'
  },
  {
    id: 'graphic-design',
    title: 'DESAIN GRAFIS',
    shortDesc: 'Visual berkualitas untuk kebutuhan komunikasi.',
    description: 'Materi grafis pendukung pemasaran, editorial kit, presentasi pitch deck profesional, dan materi media sosial berestetika tinggi.',
    deliverables: ['Presentation pitch deck', 'Media kit & banner promosi', 'Layout majalah/editorial', 'Aset grafis marketing'],
    icon: 'image',
    whatsappMessage: 'Halo Nova, saya membutuhkan layanan Desain Grafis untuk materi promosi/presentasi.'
  },
  {
    id: 'consultation',
    title: 'KONSULTASI',
    shortDesc: 'Panduan desain dan strategi digital.',
    description: 'Sesi konsultasi 1-on-1 untuk meninjau desain produk yang sudah berjalan, audit pengalaman pengguna, dan arahan strategi visual produk.',
    deliverables: ['Design & UX audit report', 'Rekomendasi perbaikan visual & konversi', 'Sesi tanya jawab strategi desain', 'Action plan implementasi'],
    icon: 'compass',
    whatsappMessage: 'Halo Nova, saya ingin menjadwalkan sesi Konsultasi Desain & Strategi Digital.'
  }
];
