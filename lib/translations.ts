export type Language = "en" | "id"

export const translations = {
  en: {
    // Navbar
    nav: {
      sectionTitle: "Navigation",
      linksTitle: "Links",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      locate: "Located",
      locateIn: "in Bandung",
      locateRegion: "West Java, Indonesia",
      marquee1: "PUTRA MICHAEL SITOHANG",
      marquee2: "PUTRA MICHAEL SITOHANG",
    },
    // About
    about: {
      title: "About me",
      paragraph1: "6th-semester Informatics Engineering student specializing in Data Software Engineering. Focused on designing robust backend architectures, API integrations, and developing scalable modern web interfaces.",
      paragraph2: "I am a Full-Stack Developer with deep specialization in the Laravel ecosystem. I am highly passionate about building high-performance web applications, leveraging Laravel for robust backend logic and integrating it seamlessly with modern frontends like Vue.js and React.js.",
      paragraph3: "My experience includes designing MySQL and PostgreSQL relational database architectures, implementing Role-Based Access Control, to integrating third-party services such as payment gateways.",
      paragraph4: "I am currently seeking an opportunity to contribute fully as a Full-Stack Laravel Developer within a dynamic and innovative engineering team.",
      programmingLanguages: "Frontend",
      databasesArchitecture: "Backend & Mobile",
      databaseTools: "Database & Tools",
      downloadCV: "Download Resume",
    },
    // Projects
    projects: {
      title: "Recent Projects",
      seeOther: "See other projects",
      loadMore: "Load More",
      desc1: "An AI-based automated video processing application with asynchronous computing architecture. Integrates FFmpeg with Python's asynchronous subprocesses (asyncio) on the backend, and client-side caching mechanisms using IndexedDB for memory management.",
      desc2: "An online course marketplace platform with 3 user roles. Developed the Laravel REST API, instructor system, course management, and approval workflows.",
      desc3: "A centralized Support Ticketing System (Helpdesk) with an SPA architecture. The frontend uses Vue.js 3 and Pinia, while the backend implements Laravel 11 with Laravel Sanctum for token-based authentication. Features include tiered ticket tracking, role management (Admin/User), and real-time notifications.",
      desc4: "A full-stack e-commerce prototype focusing on architectural fundamentals. Built a Role-Based Access Control (RBAC) system and Custom JWT Authentication, and designed a RESTful API using raw MySQL queries.",
      desc5: "A collaborative information portal and blog focusing on PC hardware. Built in a team utilizing classic web fundamentals (HTML5, Vanilla CSS3, Vanilla JS) and integrated with Swiper.js for dynamic and interactive product catalog sliders.",
      desc6: "A unique e-commerce web application simulation for a firearms store featuring multi-role authentication. Developed natively utilizing PHP and MySQL for backend logic, and styled responsively using Bootstrap 5.",
      desc7: "A full-stack RESTful API and frontend application for digital bookshelf management, featuring complete CRUD operations and real-time filtering. The backend is built with Node.js and Hapi.js using in-memory data, while the modern UI is styled with TailwindCSS.",
      desc8: "An enterprise-scale Desktop software system built collaboratively for digitizing daily cinema operations. Developed using Java, Java Swing (GUI), and MySQL, featuring a Back-Office module for schedule management with clash detection, and a Front-Office Point of Sale (POS) system for dynamic seat selection.",
      desc9: "A modern 2D endless runner desktop game developed collaboratively. Built entirely with Object-Oriented Java and JavaFX for rendering complex animations and parallax environments, featuring dynamic difficulty, cinematic day-night transitions, and a persistent High-Score system via Binary File I/O.",
    },
    // Experience
    experience: {
      title: "Experience",
      education: "Education",
      present: "Present",
      role1: "Full-Stack Software Engineer",
      desc1: "Developed an e-learning platform based on Laravel 12 and Vue.js 3 with course management features, user authentication, online payments via Midtrans, and secure video distribution using AWS S3. Implemented RBAC, Google OAuth, and learning progress tracking to improve user experience.",
      role2: "Software Engineer",
      desc2: "Developed an AI-based video editing platform supporting automated video analysis, highlight extraction, editing, and streaming using React 19, TypeScript, Python, FastAPI, and FFmpeg. Implemented authentication, RBAC, a transaction-based credit system, and performance optimization via local storage using IndexedDB.",
      role3: "Web Backend Developer",
      desc3: "Implemented a reservation management system using the Laravel 12 framework with MVC architecture. Focused on managing real-time room availability state and designing MySQL database relationships to ensure data integrity and prevent double-booking anomalies. Conducted functional testing on the transaction module to ensure application stability according to software engineering standards.",
      eduConcentration: "Concentration:",
      eduGPA: "Current GPA:",
      educationIntro: "Informatics Engineering undergraduate student at Jenderal Achmad Yani University, Cimahi. Started studying in 2023, currently active and continuously learning new things.",
      edu1Role: "B.Sc. in Informatics Engineering",
      edu1Company: "Jenderal Achmad Yani University, Cimahi",
      edu1Desc: "Began delving into the software development world, from programming fundamentals to fullstack web and mobile development.",
    },
    // Contact
    contact: {
      github: "Github",
      links: "Links",
    },
  },
  id: {
    // Navbar
    nav: {
      sectionTitle: "Navigasi",
      linksTitle: "Tautan",
      home: "Beranda",
      about: "Tentang Saya",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
    },
    // Hero
    hero: {
      locate: "Berlokasi",
      locateIn: "di Bandung",
      locateRegion: "Jawa Barat, Indonesia",
      marquee1: "PUTRA MICHAEL SITOHANG",
      marquee2: "PUTRA MICHAEL SITOHANG",
    },
    // About
    about: {
      title: "Tentang Saya",
      paragraph1: "Mahasiswa Teknik Informatika semester 6 bidang Data Software Engineering. Berfokus pada perancangan arsitektur backend yang tangguh, integrasi API, dan pengembangan antarmuka web modern yang skalabel.",
      paragraph2: "Saya adalah seorang Full-Stack Developer dengan spesialisasi mendalam pada ekosistem Laravel. Saya sangat antusias membangun aplikasi web berkinerja tinggi, memanfaatkan keandalan Laravel di sisi backend dan mengintegrasikannya dengan antarmuka dinamis seperti Vue.js maupun React.js.",
      paragraph3: "Pengalaman saya mencakup perancangan arsitektur database relasional MySQL dan PostgreSQL, implementasi Role-Based Access Control, hingga integrasi layanan pihak ketiga berupa payment gateway.",
      paragraph4: "Saat ini saya mencari peluang profesional untuk berkontribusi secara penuh sebagai Full-Stack Laravel Developer dalam tim engineering yang dinamis dan inovatif.",
      programmingLanguages: "Frontend",
      databasesArchitecture: "Backend & Mobile",
      databaseTools: "Database & Tools",
      downloadCV: "Unduh Resume",
    },
    // Projects
    projects: {
      title: "Proyek Terbaru",
      seeOther: "Lihat proyek lainnya",
      loadMore: "Muat Lebih",
      desc1: "Aplikasi pemrosesan video otomatis berbasis AI dengan arsitektur komputasi asinkron. Mengintegrasikan FFmpeg dengan subprocess asinkron Python (asyncio) di backend, dan mekanisme caching client-side menggunakan IndexedDB untuk manajemen memori.",
      desc2: "Platform jual beli kursus online dengan 3 role. Mengembangkan REST API Laravel, sistem instruktur, course management, dan workflow approval.",
      desc3: "Sistem Manajemen Tiket Support (Helpdesk) terpusat dengan arsitektur SPA. Frontend menggunakan Vue.js 3 dan Pinia, sedangkan backend mengimplementasikan Laravel 11 dengan Laravel Sanctum untuk autentikasi berbasis token. Dilengkapi fitur pelacakan tiket berjenjang, manajemen peran (Admin/User), dan notifikasi real-time.",
      desc4: "Prototipe e-commerce full-stack dengan fokus pada fundamental arsitektur. Membangun sistem Role-Based Access Control (RBAC) dan Custom JWT Authentication, serta mendesain RESTful API menggunakan raw MySQL queries.",
      desc5: "E-Computer adalah portal informasi dan blog kolaboratif seputar perangkat keras (PC hardware). Dikembangkan dalam tim menggunakan fundamental web klasik (HTML5, Vanilla CSS3, Vanilla JS) dan terintegrasi dengan Swiper.js untuk interaktivitas slider katalog produk yang dinamis.",
      desc6: "Aplikasi web e-commerce simulasi toko senjata api yang unik dengan fitur autentikasi multi-role. Dikembangkan secara native menggunakan PHP dan MySQL untuk logika backend, dan dirancang responsif menggunakan kerangka kerja Bootstrap 5.",
      desc7: "Aplikasi full-stack RESTful API dan antarmuka web untuk manajemen rak buku digital, dilengkapi operasi CRUD dan pencarian real-time. Backend dibangun menggunakan Node.js dan Hapi.js dengan penyimpanan in-memory, sementara antarmuka UI didesain menggunakan TailwindCSS.",
      desc8: "Sistem perangkat lunak Desktop berskala Enterprise untuk mendigitalisasi operasional bioskop harian yang dikembangkan secara kolaboratif. Dibangun menggunakan Java, Java Swing (GUI), dan MySQL, dengan fitur Modul Back-Office untuk manajemen jadwal (clash detection), serta sistem kasir (POS) untuk pemilihan kursi dinamis.",
      desc9: "Game desktop 2D endless runner modern yang dikembangkan secara kolaboratif. Dibangun murni menggunakan Java OOP dan JavaFX untuk merender animasi kompleks serta lingkungan parallax, dilengkapi fitur tingkat kesulitan dinamis, transisi waktu sinematik siang-malam, dan sistem penyimpanan High-Score permanen via Binary File I/O.",
    },
    // Experience
    experience: {
      title: "Pengalaman",
      education: "Pendidikan",
      present: "Sekarang",
      role1: "Full-Stack Software Engineer",
      desc1: "Mengembangkan platform e-learning berbasis Laravel 12 dan Vue.js 3 dengan fitur manajemen kursus, autentikasi pengguna, pembayaran online melalui Midtrans, serta distribusi video yang aman menggunakan AWS S3. Menerapkan RBAC, Google OAuth, dan pelacakan progres pembelajaran untuk meningkatkan pengalaman pengguna.",
      role2: "Software Engineer",
      desc2: "Mengembangkan platform video editing berbasis AI yang mendukung analisis video otomatis, ekstraksi momen penting, serta fitur editing dan streaming menggunakan React 19, TypeScript, Python, FastAPI, dan FFmpeg. Menerapkan autentikasi, RBAC, sistem kredit berbasis transaksi, serta optimasi performa melalui penyimpanan lokal menggunakan IndexedDB.",
      role3: "Web Backend Developer",
      desc3: "Mengimplementasikan sistem manajemen reservasi menggunakan framework Laravel 12 dengan arsitektur MVC. Berfokus pada pengelolaan state ketersediaan kamar secara real-time dan perancangan relasi database MySQL untuk memastikan integritas data dan mencegah anomali double-booking. Melakukan pengujian fungsional pada modul transaksi guna memastikan stabilitas aplikasi sesuai standar rekayasa perangkat lunak.",
      eduConcentration: "Konsentrasi:",
      eduGPA: "IPK Saat Ini:",
      educationIntro: "Mahasiswa S1 Informatika di Universitas Jenderal Achmad Yani, Cimahi. Mulai kuliah sejak 2023, sekarang masih aktif dan terus belajar hal-hal baru.",
      edu1Role: "S1 Informatika",
      edu1Company: "Universitas Jenderal Achmad Yani, Cimahi",
      edu1Desc: "Mulai mendalami dunia pengembangan software, dari dasar pemrograman hingga fullstack web development dan mobile development.",
    },
    // Contact
    contact: {
      github: "Github",
      links: "Tautan",
    },
  },
}

export type Translations = typeof translations.en
