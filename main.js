/* ===================================
   SYBERX — main.js
   All interactivity, data, animations
   =================================== */

// ============ CONFIG ============
const SOCIAL_LINKS = {
  telegram:  "https://t.me/Cybersecurity_life",
  instagram: "https://www.instagram.com/fayozbek_08_25_?igsh=dDBlYWpjemhlZnA2",
  linkedin:  "https://www.linkedin.com/in/fayozbek-iskandarov-00a5313b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  youtube:   "https://youtube.com/@cybersecurity.uz1?si=pbDScYPvRKiQCrpc",
  github:    "https://github.com/Fayozbek09",
  email:     "mailto:gidhub2009@gmail.com"
};

// ============ ROADMAP DATA ============
const ROADMAP_DATA = {
  beginner: [
    {
      title: { en: "What is Cybersecurity?", uz: "Kiberxavfsizlik nima?", ru: "Что такое кибербезопасность?" },
      desc: { en: "Understand the fundamentals of cybersecurity — why it matters, key concepts like CIA triad, and how the digital threat landscape works.", uz: "Kiberxavfsizlikning asoslarini tushuning — u nima uchun muhim, CIA uchburchagi kabi asosiy tushunchalar va raqamli tahdid muhiti qanday ishlaydi.", ru: "Понять основы кибербезопасности — почему это важно, ключевые концепции, такие как триада ЦРУ, и как работает ландшафт цифровых угроз." },
      time: { en: "2 hours", uz: "2 soat", ru: "2 часа" },
      level: "beginner"
    },
    {
      title: { en: "How Computers Work", uz: "Kompyuterlar qanday ishlaydi", ru: "Как работают компьютеры" },
      desc: { en: "Explore hardware, operating systems, memory, processors, and how software interacts with your machine at a fundamental level.", uz: "Apparat, operatsion tizimlar, xotira, protsessorlar va dasturiy ta'minot asosiy darajada mashinangiz bilan qanday o'zaro ta'sir qilishini o'rganing.", ru: "Изучить аппаратное обеспечение, операционные системы, память, процессоры и то, как программное обеспечение взаимодействует с машиной на фундаментальном уровне." },
      time: { en: "3 hours", uz: "3 soat", ru: "3 часа" },
      level: "beginner"
    },
    {
      title: { en: "Linux Basics", uz: "Linux asoslari", ru: "Основы Linux" },
      desc: { en: "Get comfortable with the Linux command line: file system navigation, permissions, users, and essential commands every security professional needs.", uz: "Linux buyruq qatori bilan ishlashni o'rganing: fayl tizimi navigatsiyasi, ruxsatlar, foydalanuvchilar va har bir xavfsizlik mutaxassisiga zarur asosiy buyruqlar.", ru: "Освоить командную строку Linux: навигация по файловой системе, права доступа, пользователи и основные команды, необходимые каждому специалисту по безопасности." },
      time: { en: "5 hours", uz: "5 soat", ru: "5 часов" },
      level: "beginner"
    },
    {
      title: { en: "Networking Basics", uz: "Tarmoq asoslari", ru: "Основы сети" },
      desc: { en: "Learn how the internet works: TCP/IP, DNS, HTTP, ports, subnetting, and the protocols that power modern communication.", uz: "Internet qanday ishlashini o'rganing: TCP/IP, DNS, HTTP, portlar, tarmoq quyi bo'linishi va zamonaviy aloqani quvvatlovchi protokollar.", ru: "Узнать, как работает Интернет: TCP/IP, DNS, HTTP, порты, подсети и протоколы, обеспечивающие современную связь." },
      time: { en: "4 hours", uz: "4 soat", ru: "4 часа" },
      level: "beginner"
    },
    {
      title: { en: "Basic Web Security", uz: "Asosiy veb xavfsizlik", ru: "Базовая веб-безопасность" },
      desc: { en: "Introduction to how websites work, HTTPS, cookies, sessions, and why web security is the backbone of modern cybersecurity education.", uz: "Veb-saytlar qanday ishlashiga kirish, HTTPS, cookie-fayllar, sessiyalar va nima uchun veb xavfsizligi zamonaviy kiberxavfsizlik ta'limining asosi ekanligi.", ru: "Введение в принцип работы веб-сайтов, HTTPS, файлы cookie, сессии и почему веб-безопасность является основой современного образования в области кибербезопасности." },
      time: { en: "3 hours", uz: "3 soat", ru: "3 часа" },
      level: "beginner"
    }
  ],
  intermediate: [
    {
      title: { en: "Web Vulnerabilities (XSS, SQLi)", uz: "Veb zaifliklari (XSS, SQLi)", ru: "Веб-уязвимости (XSS, SQLi)" },
      desc: { en: "Learn conceptually how Cross-Site Scripting and SQL Injection attacks work — for defense and understanding, not exploitation. Theory and detection focus.", uz: "Saytlararo skriptlash va SQL in'ektsiya hujumlari qanday ishlashini kontseptual jihatdan o'rganing — himoya va tushunish uchun, hujum uchun emas.", ru: "Концептуально узнать, как работают атаки Cross-Site Scripting и SQL-инъекция — для защиты и понимания, а не для эксплуатации." },
      time: { en: "6 hours", uz: "6 soat", ru: "6 часов" },
      level: "intermediate"
    },
    {
      title: { en: "Linux Security", uz: "Linux xavfsizligi", ru: "Безопасность Linux" },
      desc: { en: "Harden a Linux system: firewall configuration, user management, log analysis, file permissions deep-dive, and system monitoring basics.", uz: "Linux tizimini mustahkamlash: xavfsizlik devori konfiguratsiyasi, foydalanuvchilarni boshqarish, jurnal tahlili, fayl ruxsatlarining chuqur o'rganish va tizimni monitoring qilish asoslari.", ru: "Защитить систему Linux: настройка брандмауэра, управление пользователями, анализ журналов, углублённое изучение прав доступа к файлам и основы мониторинга системы." },
      time: { en: "5 hours", uz: "5 soat", ru: "5 часов" },
      level: "intermediate"
    },
    {
      title: { en: "Security Tools Introduction", uz: "Xavfsizlik asboblari tanishuv", ru: "Введение в инструменты безопасности" },
      desc: { en: "Overview of tools used by security professionals: Wireshark, Nmap, Burp Suite — their purpose, ethical usage, and how to start learning them.", uz: "Xavfsizlik mutaxassislari tomonidan ishlatiladigan vositalarga umumiy nuqtai nazar: Wireshark, Nmap, Burp Suite — ularning maqsadi, axloqiy foydalanish va ularni o'rganishni qanday boshlash.", ru: "Обзор инструментов, используемых специалистами по безопасности: Wireshark, Nmap, Burp Suite — их назначение, этичное использование и с чего начать их изучение." },
      time: { en: "4 hours", uz: "4 soat", ru: "4 часа" },
      level: "intermediate"
    },
    {
      title: { en: "Basic Penetration Testing Theory", uz: "Asosiy penetratsion sinov nazariyasi", ru: "Теория базового тестирования на проникновение" },
      desc: { en: "Understand the penetration testing methodology: reconnaissance, scanning, exploitation theory, post-exploitation, and reporting — all for educational purposes.", uz: "Penetratsion sinov metodologiyasini tushuning: razvedka, skanerlash, ekspluatatsiya nazariyasi, ekspluatatsiyadan keyingi bosqich va hisobot — bularning barchasi ta'lim maqsadlari uchun.", ru: "Понять методологию тестирования на проникновение: разведка, сканирование, теория эксплуатации, постэксплуатация и отчётность — всё в образовательных целях." },
      time: { en: "8 hours", uz: "8 soat", ru: "8 часов" },
      level: "intermediate"
    }
  ],
  advanced: [
    {
      title: { en: "Threat Modeling", uz: "Tahdid modellashtirish", ru: "Моделирование угроз" },
      desc: { en: "Learn how organizations identify, analyze, and prioritize potential security threats using frameworks like STRIDE and PASTA for proactive defense.", uz: "Tashkilotlar STRIDE va PASTA kabi doiralar yordamida potentsial xavfsizlik tahdidlarini qanday aniqlash, tahlil qilish va ustuvorlashtirish haqida o'rganing.", ru: "Узнать, как организации выявляют, анализируют и расставляют приоритеты потенциальных угроз безопасности с помощью таких фреймворков, как STRIDE и PASTA." },
      time: { en: "6 hours", uz: "6 soat", ru: "6 часов" },
      level: "advanced"
    },
    {
      title: { en: "Incident Response Basics", uz: "Hodisalarga javob berish asoslari", ru: "Основы реагирования на инциденты" },
      desc: { en: "Understand how security teams detect, respond to, and recover from security incidents using the NIST and SANS incident response frameworks.", uz: "Xavfsizlik guruhlari NIST va SANS hodisalarga javob berish doiralari yordamida xavfsizlik hodisalarini qanday aniqlash, ularga javob berish va tiklash haqida bilib oling.", ru: "Понять, как команды безопасности обнаруживают, реагируют и восстанавливаются после инцидентов безопасности, используя фреймворки реагирования NIST и SANS." },
      time: { en: "5 hours", uz: "5 soat", ru: "5 часов" },
      level: "advanced"
    },
    {
      title: { en: "OSINT Concepts (Educational Only)", uz: "OSINT tushunchalari (faqat ta'limiy)", ru: "Концепции OSINT (только образовательные)" },
      desc: { en: "Open-Source Intelligence gathering concepts for investigators and analysts. Understanding what information is publicly available and how to protect your own digital footprint.", uz: "Tergovchi va tahlilchilar uchun ochiq manba razvedkasi yig'ish tushunchalari. Qanday ma'lumotlar ommaviy mavjudligini va o'z raqamli izingizni qanday himoya qilishni tushunish.", ru: "Концепции сбора разведывательных данных из открытых источников для следователей и аналитиков. Понять, какая информация находится в открытом доступе и как защитить свой цифровой след." },
      time: { en: "7 hours", uz: "7 soat", ru: "7 часов" },
      level: "advanced"
    },
    {
      title: { en: "Security Architecture", uz: "Xavfsizlik arxitekturasi", ru: "Архитектура безопасности" },
      desc: { en: "Design secure systems from the ground up: zero trust architecture, defense in depth, network segmentation, and building resilient security infrastructure.", uz: "Xavfsiz tizimlarni noldan loyihalash: nol ishonch arxitekturasi, chuqurlikda himoya, tarmoq segmentatsiyasi va bardoshli xavfsizlik infratuzilmasini qurish.", ru: "Проектировать безопасные системы с нуля: архитектура нулевого доверия, глубокая защита, сегментация сети и построение устойчивой инфраструктуры безопасности." },
      time: { en: "8 hours", uz: "8 soat", ru: "8 часов" },
      level: "advanced"
    }
  ]
};

// ============ ARTICLES DATA ============
const ARTICLES_DATA = [
  {
    tag: { en: "ROADMAP", uz: "YO'L XARITASI", ru: "ДОРОЖНАЯ КАРТА" },
    title: { en: "Cybersecurity Roadmap 2026", uz: "Kiberxavfsizlik Yo'l Xaritasi 2026", ru: "Дорожная карта кибербезопасности 2026" },
    excerpt: { en: "A complete guide to learning cybersecurity in 2026 — from zero knowledge to job-ready skills, structured as a clear learning path.", uz: "2026 yilda kiberxavfsizlikni o'rganish uchun to'liq qo'llanma — nol bilimdan ish tayyor ko'nikmalariga, aniq o'quv yo'li sifatida tuzilgan.", ru: "Полное руководство по изучению кибербезопасности в 2026 году — от нулевых знаний до готовых к работе навыков, структурированное как чёткий путь обучения." },
    readTime: { en: "8 min read", uz: "8 daqiqa o'qish", ru: "8 мин чтения" },
    date: "Jan 2026"
  },
  {
    tag: { en: "BASICS", uz: "ASOSLAR", ru: "ОСНОВЫ" },
    title: { en: "How the Internet Works", uz: "Internet qanday ishlaydi", ru: "Как работает Интернет" },
    excerpt: { en: "A beginner-friendly deep dive into DNS, TCP/IP, HTTP/HTTPS, and what actually happens when you type a URL in your browser.", uz: "DNS, TCP/IP, HTTP/HTTPS haqida boshlang'ich qo'llanma va brauzeringizda URL terayotganingizda nima sodir bo'lishini o'rganish.", ru: "Понятное для начинающих глубокое погружение в DNS, TCP/IP, HTTP/HTTPS и то, что на самом деле происходит, когда вы вводите URL в браузере." },
    readTime: { en: "6 min read", uz: "6 daqiqa o'qish", ru: "6 мин чтения" },
    date: "Feb 2026"
  },
  {
    tag: { en: "LINUX", uz: "LINUX", ru: "LINUX" },
    title: { en: "Linux for Beginners", uz: "Boshlang'ichlar uchun Linux", ru: "Linux для начинающих" },
    excerpt: { en: "Start your Linux journey: essential commands, file system structure, permissions, and why Linux is the OS of choice in cybersecurity.", uz: "Linux sayohatingizni boshlang: muhim buyruqlar, fayl tizimi tuzilishi, ruxsatlar va nima uchun Linux kiberxavfsizlikda tanlangan OS ekanligini o'rganing.", ru: "Начать своё путешествие в Linux: основные команды, структура файловой системы, права доступа и почему Linux является предпочтительной ОС в кибербезопасности." },
    readTime: { en: "10 min read", uz: "10 daqiqa o'qish", ru: "10 мин чтения" },
    date: "Mar 2026"
  },
  {
    tag: { en: "WEB SECURITY", uz: "VEB XAVFSIZLIK", ru: "ВЕБ-БЕЗОПАСНОСТЬ" },
    title: { en: "Web Security Basics", uz: "Veb Xavfsizlik Asoslari", ru: "Основы веб-безопасности" },
    excerpt: { en: "Understanding HTTPS, same-origin policy, CORS, cookies security flags, and the OWASP Top 10 — essential knowledge for any security learner.", uz: "HTTPS, bir xil kelib chiqish siyosati, CORS, cookie-fayl xavfsizligi bayroqlari va OWASP Top 10 ni tushunish — har qanday xavfsizlik o'quvchisi uchun muhim bilim.", ru: "Понять HTTPS, политику одного источника, CORS, флаги безопасности файлов cookie и OWASP Top 10 — необходимые знания для любого изучающего безопасность." },
    readTime: { en: "7 min read", uz: "7 daqiqa o'qish", ru: "7 мин чтения" },
    date: "Apr 2026"
  }
];

// ============ PROJECTS DATA ============
const PROJECTS_DATA = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.78a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    name: { en: "Network Scanner", uz: "Tarmoq skaneri", ru: "Сканер сети" },
    desc: { en: "A Python script that discovers active hosts and open ports on a local network — built for educational understanding of network topology.", uz: "Mahalliy tarmoqdagi faol xostlar va ochiq portlarni topadigan Python skripti — tarmoq topologiyasini ta'lim maqsadida tushunish uchun yaratilgan.", ru: "Python-скрипт, который обнаруживает активные хосты и открытые порты в локальной сети — создан для образовательного понимания сетевой топологии." },
    stack: ["Python", "Socket", "Nmap"],
    link: SOCIAL_LINKS.github
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    name: { en: "Password Strength Checker", uz: "Parol kuchi tekshiruvi", ru: "Проверка надёжности пароля" },
    desc: { en: "A web-based tool that analyzes password strength in real-time using entropy calculations and pattern detection. Learn why some passwords are weak.", uz: "Entropiya hisob-kitoblari va naqsh aniqlash yordamida parol kuchini real vaqtda tahlil qiluvchi veb-asosli vosita. Nima uchun ba'zi parollar zaifligini o'rganing.", ru: "Веб-инструмент, который анализирует надёжность пароля в реальном времени с помощью расчётов энтропии и обнаружения паттернов." },
    stack: ["JavaScript", "HTML", "CSS"],
    link: SOCIAL_LINKS.github
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    name: { en: "SYBERX Learning Platform", uz: "SYBERX O'quv Platformasi", ru: "Учебная платформа SYBERX" },
    desc: { en: "This very website — a cybersecurity education platform built with pure HTML/CSS/JS. Open source and free for anyone to learn from or fork.", uz: "Aynan shu veb-sayt — sof HTML/CSS/JS bilan yaratilgan kiberxavfsizlik ta'lim platformasi. Ochiq kodli va har kim uchun o'rganish yoki fork qilish uchun bepul.", ru: "Этот самый сайт — образовательная платформа по кибербезопасности, созданная на чистом HTML/CSS/JS. Открытый исходный код, бесплатный для всех." },
    stack: ["HTML", "CSS", "JavaScript"],
    link: SOCIAL_LINKS.github
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    name: { en: "OSINT Toolbox Notes", uz: "OSINT Toolbox Eslatmalari", ru: "Заметки OSINT Toolbox" },
    desc: { en: "A curated collection of OSINT resources, tools, and techniques documented during studies. Educational reference guide for ethical intelligence gathering.", uz: "O'qish davomida hujjatlashtirilgan OSINT resurslar, vositalar va texnikalar to'plami. Axloqiy razvedka yig'ish uchun ta'limiy ma'lumotnoma.", ru: "Отобранная коллекция ресурсов OSINT, инструментов и техник, задокументированных в ходе учёбы. Образовательное справочное руководство." },
    stack: ["Markdown", "Research", "OSINT"],
    link: SOCIAL_LINKS.github
  }
];

// ============ CONTACT DATA ============
const CONTACT_DATA = [
  { key: "telegram", label: "Telegram", handle: "@Cybersecurity_life", url: SOCIAL_LINKS.telegram, cls: "cc-telegram",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>` },
  { key: "instagram", label: "Instagram", handle: "@fayozbek_08_25_", url: SOCIAL_LINKS.instagram, cls: "cc-instagram",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>` },
  { key: "linkedin", label: "LinkedIn", handle: "Fayozbek Iskandarov", url: SOCIAL_LINKS.linkedin, cls: "cc-linkedin",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
  { key: "youtube", label: "YouTube", handle: "@cybersecurity.uz1", url: SOCIAL_LINKS.youtube, cls: "cc-youtube",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>` },
  { key: "github", label: "GitHub", handle: "Fayozbek09", url: SOCIAL_LINKS.github, cls: "cc-github",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` },
  { key: "email", label: "Email", handle: "gidhub2009@gmail.com", url: SOCIAL_LINKS.email, cls: "cc-email",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>` }
];

// ============ STATE ============
let currentLang = 'en';
let currentLevel = 'beginner';

// ============ CANVAS BACKGROUND ============
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], lines = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(80, Math.floor(W * H / 15000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();
  window.addEventListener('resize', () => { resize(); initParticles(); });
})();

// ============ NAVBAR ============
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
})();

// ============ TYPING ANIMATION ============
(function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = [
    "learning cybersecurity...",
    "exploring ethical hacking...",
    "studying at HAAD TC...",
    "building syberx.uz...",
    "from zero to advanced...",
  ];
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  setTimeout(type, 800);
})();

// ============ LANGUAGE SYSTEM ============
function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll(`[data-${lang}]`).forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render dynamic sections
  renderRoadmap(currentLevel);
  renderArticles();
  renderProjects();
  renderContacts();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ============ ROADMAP RENDER ============
function renderRoadmap(level) {
  currentLevel = level;
  const container = document.getElementById('roadmapContent');
  if (!container) return;
  const data = ROADMAP_DATA[level] || [];
  container.innerHTML = data.map((item, i) => `
    <div class="rm-card reveal" style="animation-delay:${i * 0.07}s">
      <div class="rm-card-header">
        <span class="rm-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="rm-level-badge level-${level}">${level.toUpperCase()}</span>
      </div>
      <h3 class="rm-title">${item.title[currentLang]}</h3>
      <p class="rm-desc">${item.desc[currentLang]}</p>
      <div class="rm-footer">
        <span class="rm-time">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${item.time[currentLang]}
        </span>
        <a href="#roadmap" class="rm-read-btn">${currentLang === 'en' ? 'Read →' : currentLang === 'uz' ? 'O\'qish →' : 'Читать →'}</a>
      </div>
    </div>
  `).join('');

  // Trigger reveals
  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 50);
}

document.querySelectorAll('.rm-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.rm-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderRoadmap(tab.dataset.level);
  });
});

// ============ ARTICLES RENDER ============
function renderArticles() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;
  grid.innerHTML = ARTICLES_DATA.map(a => `
    <a href="#articles" class="article-card reveal">
      <div class="article-top">
        <span class="article-tag">${a.tag[currentLang]}</span>
        <h3 class="article-title">${a.title[currentLang]}</h3>
        <p class="article-excerpt">${a.excerpt[currentLang]}</p>
      </div>
      <div class="article-footer">
        <span class="article-meta">${a.date} · ${a.readTime[currentLang]}</span>
        <span class="article-arrow">→</span>
      </div>
    </a>
  `).join('');
  triggerReveal();
}

// ============ PROJECTS RENDER ============
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS_DATA.map(p => `
    <div class="project-card reveal">
      <div class="project-icon">${p.icon}</div>
      <h3 class="project-name">${p.name[currentLang]}</h3>
      <p class="project-desc">${p.desc[currentLang]}</p>
      <div class="project-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
      <a href="${p.link}" target="_blank" class="project-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        ${currentLang === 'en' ? 'View on GitHub' : currentLang === 'uz' ? 'GitHub\'da ko\'rish' : 'Посмотреть на GitHub'}
      </a>
    </div>
  `).join('');
  triggerReveal();
}

// ============ CONTACTS RENDER ============
function renderContacts() {
  const grid = document.getElementById('contactGrid');
  if (!grid) return;
  grid.innerHTML = CONTACT_DATA.map(c => `
    <a href="${c.url}" target="_blank" class="contact-card ${c.cls} reveal">
      <div class="contact-icon">${c.icon}</div>
      <span class="contact-name">${c.label}</span>
      <span class="contact-handle">${c.handle}</span>
    </a>
  `).join('');
  triggerReveal();
}

// ============ REVEAL ON SCROLL ============
function triggerReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ============ HERO ENTRANCE ANIMATION ============
(function heroEntrance() {
  const items = ['.hero-badge', '.hero-title', '.hero-sub', '.hero-meta', '.hero-terminal', '.hero-cta', '.hero-stats'];
  items.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 100);
    }
  });
})();

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap('beginner');
  renderArticles();
  renderProjects();
  renderContacts();

  // Global reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
