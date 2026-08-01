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
        titleEn: "Exam App",
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
        fullDescEn: "A real-time chat application with group chats, media sharing, and push notifications. Built with a focus on instant messaging and clean UI.",
        fullDescAr: "تطبيق محادثة فورية يدعم الدردشات الجماعية، مشاركة الوسائط، وإشعارات الـ Push. مصمم للتركيز على المراسلة الفورية وواجهة مستخدم نظيفة.",
        tags: ["Flutter", "Firebase", "Cloud Messaging"],
        image: "assets/images/chato_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "newscloud_app",
        titleEn: "NewsCloud",
        titleAr: "تطبيق سحابة الأخبار",
        shortDescEn: "A real-time news aggregation application.",
        shortDescAr: "تطبيق لتجميع الأخبار في الوقت الفعلي.",
        fullDescEn: "NewsCloud is a robust news aggregator that delivers the latest headlines across multiple categories including Business and Entertainment. Features real-time API integration and a clean, responsive UI.",
        fullDescAr: "سحابة الأخبار هو مجمع أخبار قوي يقدم أحدث العناوين عبر فئات متعددة بما في ذلك الأعمال والترفيه. يتميز بتكامل الـ API في الوقت الفعلي وواجهة مستخدم نظيفة واستجابية.",
        tags: ["Flutter", "NewsAPI", "REST API", "Dio"],
        image: "assets/images/newscloud_app.png",
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
        image: "assets/images/weather_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "qiraa_app",
        titleEn: "Qiraa (Book Reader)",
        titleAr: "تطبيق قراءة (كتب)",
        shortDescEn: "A modern and elegant book reading application.",
        shortDescAr: "تطبيق عصري وأنيق لقراءة الكتب الرقمية.",
        fullDescEn: "Qiraa is a premium digital book reader featuring a sleek purple UI, library management, reading progress tracking, and customizable typography for a perfect reading experience.",
        fullDescAr: "قراءة هو تطبيق احترافي لقراءة الكتب الرقمية، يتميز بواجهة بنفسجية أنيقة، وإدارة المكتبة، وتتبع تقدم القراءة، وتخصيص الخطوط لتجربة قراءة مثالية.",
        tags: ["Flutter", "PDF Reader", "Local Storage", "UI Design"],
        image: "assets/images/qiraa_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "novera_app",
        titleEn: "Novera",
        titleAr: "تطبيق نوڤيرا",
        shortDescEn: "A premium beauty e-commerce application.",
        shortDescAr: "تطبيق متجر إلكتروني متميز لمنتجات التجميل.",
        fullDescEn: "Novera is a high-end beauty e-commerce platform featuring a sleek dark UI, category-based product browsing, secure user profiles, and seamless checkout experience.",
        fullDescAr: "نوڤيرا هي منصة تجارة إلكترونية متميزة لمنتجات التجميل، تتميز بواجهة مستخدم داكنة وأنيقة، تصفح المنتجات حسب الفئات، ملفات تعريف مستخدم آمنة، وتجربة دفع سلسة.",
        tags: ["Flutter", "Clean Architecture", "REST API", "UI/UX"],
        image: "assets/images/novera_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "dawenit_app",
        titleEn: "DawenIt (Smart Notes)",
        titleAr: "تطبيق دوّنها (ملاحظات ذكية)",
        shortDescEn: "A smart and colorful note-taking application.",
        shortDescAr: "تطبيق ذكي لتدوين الملاحظات مع ميزة الألوان.",
        fullDescEn: "DawenIt is a professional note-taking app that allows users to organize their thoughts with color-coded categories, rich text editing, and instant search functionality.",
        fullDescAr: "دوّنها هو تطبيق احترافي لتدوين الملاحظات يتيح للمستخدمين تنظيم أفكارهم من خلال تصنيفات ملونة، تحرير نصوص متقدم، وميزة البحث الفوري.",
        tags: ["Flutter", "Hive", "UI Design", "Clean Architecture"],
        image: "assets/images/dawenit_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "karam_app",
        titleEn: "Karam (Syrian Food)",
        titleAr: "تطبيق كرم (أكل سوري)",
        shortDescEn: "A premium Syrian food delivery application.",
        shortDescAr: "تطبيق متميز لتوصيل الأكل السوري.",
        fullDescEn: "A dedicated platform for Syrian cuisine, featuring a wide range of traditional dishes, real-time tracking, and seamless payment integration.",
        fullDescAr: "منصة مخصصة للمطبخ السوري، تضم مجموعة واسعة من الأطباق التقليدية، مع ميزة التتبع في الوقت الفعلي وتكامل سلس للمدفوعات.",
        tags: ["Flutter", "Clean Architecture", "Firebase", "Maps"],
        image: "assets/images/karam_app.png",
        githubLink: "#",
        playStoreLink: "#"
    },
    {
        id: "power_fitness_app",
        titleEn: "Power Fitness",
        titleAr: "تطبيق باور فتنس الرياضي",
        shortDescEn: "A comprehensive fitness and workout tracking application.",
        shortDescAr: "تطبيق شامل للياقة البدنية وتتبع التمارين.",
        fullDescEn: "A complete fitness application featuring personalized workout plans, diet tracking, detailed exercise guides with 3D avatars, and a community chat. Designed with a sleek dark theme and vibrant orange accents for an energetic user experience.",
        fullDescAr: "تطبيق رياضي متكامل يوفر خطط تمارين مخصصة، تتبع الأنظمة الغذائية، أدلة تمارين مفصلة مع شخصيات ثلاثية الأبعاد، ومحادثة تفاعلية. مصمم بواجهة داكنة أنيقة مع لمسات برتقالية تمنح تجربة مستخدم مليئة بالطاقة.",
        tags: ["Flutter", "Clean Architecture", "UI/UX", "Firebase"],
        image: "assets/images/power_fitness_app.png",
        githubLink: "#",
        playStoreLink: "#"
    }
];

// We make it accessible to other scripts
window.portfolioProjects = portfolioProjects;
