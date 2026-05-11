/**
 * ============================================================================
 * 🚀 PROJECTS DATA CONFIGURATION
 * ============================================================================
 * 
 * Here is where you can easily add, edit, or remove your projects!
 * The website will automatically read this list and display them on the page.
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the { ... } blocks below.
 * 2. Paste it at the end of the list.
 * 3. Change the text, image, and links to match your new project.
 * 
 * ============================================================================
 */

const portfolioProjects = [
    {
        id: "flower_app",
        titleEn: "Flower Store App",
        titleAr: "تطبيق متجر الزهور",
        shortDescEn: "A seamless shopping experience for flowers with clean architecture.",
        shortDescAr: "تجربة تسوق سلسة لبيع الزهور ببنية Clean Architecture.",
        fullDescEn: "A complete e-commerce application for purchasing flowers. It utilizes Clean Architecture, BLoC for state management, Retrofit for API calls, and Google Maps for location tracking.",
        fullDescAr: "تطبيق متجر إلكتروني متكامل لشراء الزهور. يعتمد على بنية Clean Architecture، و BLoC لإدارة الحالة، و Retrofit للاتصال بالـ API، بالإضافة إلى خرائط جوجل لتتبع الموقع.",
        tags: ["Flutter", "BLoC", "Clean Architecture", "Retrofit"],
        image: "assets/images/flower_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "exam_app",
        titleEn: " Exam App",
        titleAr: "تطبيق اختبارات ",
        shortDescEn: "A robust e-learning platform for taking exams.",
        shortDescAr: "منصة تعليمية قوية لإجراء الاختبارات.",
        fullDescEn: "An e-learning app designed for students to take exams seamlessly. Features secure local storage using Hive, Skeleton loading UI for better UX, and BLoC for robust state management.",
        fullDescAr: "تطبيق تعليمي مصمم للطلاب لإجراء الاختبارات بسهولة. يتميز بتخزين محلي آمن باستخدام Hive، وواجهات تحميل Skeleton لتحسين تجربة المستخدم، و BLoC لإدارة الحالة بقوة.",
        tags: ["Flutter", "BLoC", "Hive", "GetIt"],
        image: "assets/images/exam_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "hungry_app",
        titleEn: "Hungry App",
        titleAr: "تطبيق هنجري",
        shortDescEn: "A modern burger ordering application.",
        shortDescAr: "تطبيق حديث لطلب البرجر.",
        fullDescEn: "A fast and beautiful burger ordering application allowing users to browse the menu, customize their burgers, add meals to their cart, and track their orders in real-time.",
        fullDescAr: "تطبيق سريع وجميل لطلب البرجر يتيح للمستخدمين تصفح القائمة، تخصيص البرجر، إضافة الوجبات إلى السلة، وتتبع طلباتهم في الوقت الفعلي.",
        tags: ["Flutter", "Firebase", "Provider"],
        image: "assets/images/hungry_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "chato_app",
        titleEn: "Chato",
        titleAr: "تطبيق شاتّو",
        shortDescEn: "A real-time messaging application.",
        shortDescAr: "تطبيق محادثات فورية.",
        fullDescEn: "A real-time chat application with group chats, media sharing, and push notifications.",
        fullDescAr: "تطبيق محادثة فورية يدعم الدردشات الجماعية، مشاركة الوسائط، وإشعارات الـ Push.",
        tags: ["Flutter", "Firebase", "WebSockets"],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "newscloud_app",
        titleEn: "NewsCloud",
        titleAr: "تطبيق سحابة الأخبار",
        shortDescEn: "A personalized news reading app.",
        shortDescAr: "تطبيق مخصص لقراءة الأخبار.",
        fullDescEn: "Stay up to date with the latest global news. Features offline reading, categorized news feeds, and dark mode.",
        fullDescAr: "ابقَ على اطلاع بآخر الأخبار العالمية. يتميز بقراءة الأخبار بدون إنترنت، وتصنيف الأخبار، والوضع الداكن.",
        tags: ["Flutter", "REST API", "Sqflite"],
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "weather_app",
        titleEn: "Weather App",
        titleAr: "تطبيق الطقس",
        shortDescEn: "Real-time weather forecasts and conditions.",
        shortDescAr: "توقعات وحالة الطقس في الوقت الفعلي.",
        fullDescEn: "Get beautiful and accurate weather forecasts. Integrates with OpenWeatherMap API and uses location services.",
        fullDescAr: "احصل على توقعات طقس دقيقة وجميلة. يتصل بـ OpenWeatherMap API ويستخدم خدمات تحديد الموقع.",
        tags: ["Flutter", "Location API", "Dio"],
        image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "qiraa_app",
        titleEn: "Qiraa (Quran App)",
        titleAr: "تطبيق قراءة",
        shortDescEn: "A serene and easy-to-use Quran reading application.",
        shortDescAr: "تطبيق هادئ وسهل الاستخدام لقراءة القرآن.",
        fullDescEn: "A beautifully designed application for reading and listening to the Holy Quran, with bookmarking and audio playback features.",
        fullDescAr: "تطبيق بتصميم جميل لقراءة والاستماع إلى القرآن الكريم، مع ميزات الحفظ (العلامات المرجعية) وتشغيل الصوت.",
        tags: ["Flutter", "AudioPlayer", "Local Storage"],
        image: "https://images.unsplash.com/photo-1609599006353-e629aaab31fc?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "novera_app",
        titleEn: "Novera",
        titleAr: "تطبيق نوڤيرا",
        shortDescEn: "A modern application tailored for specific services.",
        shortDescAr: "تطبيق عصري مخصص لخدمات محددة.",
        fullDescEn: "Novera is a robust application built with modern Flutter standards, offering an intuitive UI and smooth user experience.",
        fullDescAr: "نوڤيرا هو تطبيق قوي مبني بمعايير فلاتر الحديثة، يقدم واجهة مستخدم بديهية وتجربة مستخدم سلسة.",
        tags: ["Flutter", "UI/UX", "Animations"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "tunes_app",
        titleEn: "Tunes",
        titleAr: "تطبيق تيونز",
        shortDescEn: "A simple and elegant music player.",
        shortDescAr: "مشغل موسيقى بسيط وأنيق.",
        fullDescEn: "An elegant music player application allowing users to play local audio files with a beautiful visualization.",
        fullDescAr: "تطبيق مشغل موسيقى أنيق يتيح للمستخدمين تشغيل الملفات الصوتية المحلية مع تصوير مرئي جميل.",
        tags: ["Flutter", "Audio", "UI Design"],
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "dawenit_app",
        titleEn: "DawenIt (MyNote)",
        titleAr: "تطبيق دوّنها (ملاحظاتي)",
        shortDescEn: "A smart note-taking application.",
        shortDescAr: "تطبيق ذكي لتدوين الملاحظات.",
        fullDescEn: "A secure and fast note-taking app that helps users organize their thoughts with rich text editing and local database.",
        fullDescAr: "تطبيق آمن وسريع لتدوين الملاحظات يساعد المستخدمين على تنظيم أفكارهم مع محرر نصوص متقدم وقاعدة بيانات محلية.",
        tags: ["Flutter", "Hive", "Rich Text"],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "toku_app",
        titleEn: "Toku App",
        titleAr: "تطبيق توكو",
        shortDescEn: "A language learning application.",
        shortDescAr: "تطبيق لتعلم اللغات.",
        fullDescEn: "An interactive application designed to help users learn basic vocabulary with audio pronunciations.",
        fullDescAr: "تطبيق تفاعلي مصمم لمساعدة المستخدمين على تعلم المفردات الأساسية مع النطق الصوتي.",
        tags: ["Flutter", "Education", "Audio"],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
        githubLink: "#",
        playStoreLink: "#"
    }
];

// We make it accessible to other scripts
window.portfolioProjects = portfolioProjects;
