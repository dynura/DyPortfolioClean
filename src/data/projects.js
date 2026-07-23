const DEFAULT_IMG = 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80';

export const allProjectsList = [
    // --- Custom Projects ---
    { 
        id: 1, 
        title: 'FoodShare', 
        desc: 'A mobile application designed to reduce food waste by connecting food donors with local recipients in real-time.', 
        tags: ['Mobile App', 'React Native', 'JavaScript', 'Community'],
        image: 'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790670/FoodShare_App_m3bkkh.png',
        video: 'https://res.cloudinary.com/dt2j9qzxy/video/upload/v1784791163/FoodShare_App_vyflkp.mp4',
        github: 'https://github.com/Hafiiii/FoodShare'
    },
    { 
        id: 2, 
        title: 'cookinghabit.kch Web App', 
        desc: 'A web application built for a client bakery to showcase products, discover recipes, and streamline customer order management.', 
        tags: ['Web App', 'PHP', 'Client Project', 'Bakery'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790301/cookinghabit1_pqivcw.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790301/cookinghabit2_iltuzj.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790310/cookinghabit3_dbhggp.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790302/cookinghabit4_wotyip.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790301/cookinghabit5_t5eutj.png',
        ],
        github: 'https://github.com/izzatii14/cookinghabit'
    },
    { 
        id: 3, 
        title: 'Crowdsourced Study Material App', 
        desc: 'A mobile app enabling resource sharing, collaborative learning, and automated quiz generation using DistilBERT and TensorFlow ML models.', 
        tags: ['Mobile App', 'Flutter', 'Dart', 'Firebase', 'TensorFlow', 'DistilBERT', 'Quiz AI'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790628/1_c6bh74.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790624/13_kodybv.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790625/14_ww0ged.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790626/15_hkukb7.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790627/16_dqzhzy.png',
        ],
        github: 'https://github.com/dynura/study_app'
    },
    { 
        id: 4, 
        title: 'NeverOut', 
        desc: 'A mobile inventory app using AI OCR receipt scanning to automatically log purchases and track household essential stock levels.', 
        tags: ['Mobile App', 'Flutter', 'Dart', 'Firebase', 'AI / OCR'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790590/NeverOut_App_jweu8q.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790561/3_i61dui.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790558/5_m6ohkf.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784790557/4_ebyl51.png',
        ],
        github: 'https://github.com/dynura/NeverOut'
    },

    // --- Selected Roadmap.sh Projects ---
    { 
        id: 5, 
        title: 'Weather Web App', 
        desc: 'A real-time weather monitoring application utilizing core API integration techniques to fetch, parse, and render global forecasts.', 
        tags: ['API Integration', 'JavaScript', 'CSS3', 'HTML5'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784792081/Screenshot_2026-07-23_153223_pjyzx0.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784792080/Screenshot_2026-07-23_153208_dek5bd.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784792083/Screenshot_2026-07-23_153250_qnt7nq.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784792082/Screenshot_2026-07-23_153237_edbdvz.png',
        ],
        video: 'https://res.cloudinary.com/dt2j9qzxy/video/upload/v1784792156/weather-web-app-rm_-_Brave_2026-07-23_15-33-19_a8xwod.mp4',
        github: 'https://github.com/dynura/weather-web-app-rm'
    },
    { 
        id: 6, 
        title: 'Quiz Application', 
        desc: 'An interactive browser-based quiz app built with modern frontend frameworks to manage state, scoring logic, and dynamic questions.', 
        tags: ['React', 'Vite', 'Tailwind CSS', 'State Management'],
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura/quiz-app-rm'
    },
    { 
        id: 7, 
        title: 'Reddit Client', 
        desc: 'A customizable Reddit client dashboard featuring multi-lane subreddit displays and real-time content fetching via Reddit REST API.', 
        tags: ['REST API', 'JavaScript', 'API Integration', 'UI Design'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793129/Screenshot_2026-07-23_154927_cclavy.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793131/Screenshot_2026-07-23_154936_pps74b.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793126/Screenshot_2026-07-23_154857_nzmtcg.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793127/Screenshot_2026-07-23_154913_mraxcj.png',
        ],
        video: 'https://res.cloudinary.com/dt2j9qzxy/video/upload/v1784793112/reddit-client-rm_-_Brave_2026-07-23_15-47-24_t5jzhq.mp4',
        github: 'https://github.com/dynura/reddit-client-rm'
    },
    { 
        id: 8, 
        title: 'Task Tracker CLI', 
        desc: 'A command-line interface tool to manage tasks, track completion statuses, and handle local JSON data persistence.', 
        tags: ['CLI', 'Python', 'Backend', 'JSON'],
        image: 'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793687/Screenshot_2026-07-23_160017_dtxxad.png',
        github: 'https://github.com/dynura/task-tracker-rm-b'
    },
    { 
        id: 9, 
        title: 'Blogging Platform API', 
        desc: 'A RESTful API suite supporting complete CRUD operations, category filtering, and post management for blogging applications.', 
        tags: ['REST API', 'Backend', 'Node.js', 'Express.js'],
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura'
    },
    { 
        id: 10, 
        title: 'GitHub User Activity CLI', 
        desc: 'A terminal application that fetches and parses public user event streams directly from the GitHub API.', 
        tags: ['CLI', 'API Integration', 'Python', 'Backend'],
        image: 'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784793689/Screenshot_2026-07-23_160041_nmeusf.png',
        github: 'https://github.com/dynura/github-activity-rm'
    },
    { 
        id: 11, 
        title: 'Personal Blog Web App', 
        desc: 'A dynamic server-side rendering, session authentication, and automated date tracking', 
        tags: ['NodeJS', 'Express', 'CSS', 'Backend'],
        images: [
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794094/Screenshot_2026-07-23_160622_qyrmak.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794095/Screenshot_2026-07-23_160631_t3hel5.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794097/Screenshot_2026-07-23_160639_lo51gb.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794104/Screenshot_2026-07-23_160712_g2quxz.png',
            'https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794099/Screenshot_2026-07-23_160703_t9j4t6.png',
        ],
        video: 'https://res.cloudinary.com/dt2j9qzxy/video/upload/v1784794247/Personal_Blog_-_Brave_2026-07-23_16-08-54_qlaw9y.mp4',
        github: 'https://github.com/dynura/personal-blog-rm'
    },
];