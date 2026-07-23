const DEFAULT_IMG = 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80';

export const allProjectsList = [
    // --- Custom Projects ---
    { 
        id: 1, 
        title: 'FoodShare', 
        desc: 'A mobile application designed to reduce food waste by connecting food donors with local recipients in real-time.', 
        tags: ['Mobile App', 'React Native', 'JavaScript', 'Community'],
        image: DEFAULT_IMG,
        github: 'https://github.com/Hafiiii/FoodShare'
    },
    { 
        id: 2, 
        title: 'Cooking Habit', 
        desc: 'A web application built for a client bakery to showcase products, discover recipes, and streamline customer order management.', 
        tags: ['Web App', 'PHP', 'Client Project', 'Bakery'],
        image: DEFAULT_IMG,
        github: 'https://github.com/izzatii14/cookinghabit'
    },
    { 
        id: 3, 
        title: 'Crowdsourced Study Material App', 
        desc: 'A mobile app enabling resource sharing, collaborative learning, and automated quiz generation using DistilBERT and TensorFlow ML models.', 
        tags: ['Mobile App', 'Flutter', 'Dart', 'Firebase', 'TensorFlow', 'DistilBERT', 'Quiz AI'],
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura/study_app'
    },
    { 
        id: 4, 
        title: 'NeverOut', 
        desc: 'A mobile inventory app using AI OCR receipt scanning to automatically log purchases and track household essential stock levels.', 
        tags: ['Mobile App', 'Flutter', 'Dart', 'Firebase', 'AI / OCR'],
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura/NeverOut'
    },

    // --- Selected Roadmap.sh Projects ---
    { 
        id: 5, 
        title: 'Weather Web App', 
        desc: 'A real-time weather monitoring application utilizing core API integration techniques to fetch, parse, and render global forecasts.', 
        tags: ['API Integration', 'JavaScript', 'CSS3', 'HTML5'],
        image: DEFAULT_IMG,
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
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura/reddit-client-rm'
    },
    { 
        id: 8, 
        title: 'Task Tracker CLI', 
        desc: 'A command-line interface tool to manage tasks, track completion statuses, and handle local JSON data persistence.', 
        tags: ['CLI', 'Python', 'Backend', 'JSON'],
        image: DEFAULT_IMG,
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
        image: DEFAULT_IMG,
        github: 'https://github.com/dynura/github-activity-rm'
    },
];