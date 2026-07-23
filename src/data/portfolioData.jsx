// src/data/portfolioData.js
import React from 'react';
import { 
    SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiPython, 
    SiPostgresql, SiExpress, SiNodedotjs, SiGit, SiGithub, SiVite, SiHtml5, SiCss,
    SiPhp, SiMysql, SiMariadb, SiElectron, SiFlutter, SiDart, SiOpenjdk, SiFirebase, 
    SiGooglecloud, SiJira, SiGitlab, SiDocker, SiTrello
} from 'react-icons/si';

export const techRows = [
    // Row 1: Core Frontend, Mobile & Desktop
    {
    direction: 'right',
    items: [
        { name: 'TypeScript', icon: <SiTypescript size={18} /> },
        { name: 'JavaScript', icon: <SiJavascript size={18} /> },
        { name: 'React', icon: <SiReact size={18} /> },
        { name: 'React Native', icon: <SiReact size={18} /> },
        { name: 'Electron', icon: <SiElectron size={18} /> },
        { name: 'Flutter', icon: <SiFlutter size={18} /> },
        { name: 'Dart', icon: <SiDart size={18} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
        { name: 'HTML5', icon: <SiHtml5 size={18} /> },
        { name: 'CSS3', icon: <SiCss size={18} /> },
    ]
    },
    // Row 2: Languages, Backend & Databases
    {
    direction: 'left',
    items: [
        { name: 'Python', icon: <SiPython size={18} /> },
        { name: 'Java', icon: <SiOpenjdk size={18} /> },
        { name: 'PHP', icon: <SiPhp size={18} /> },
        { name: 'Node.js', icon: <SiNodedotjs size={18} /> },
        { name: 'Express.js', icon: <SiExpress size={18} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
        { name: 'MySQL', icon: <SiMysql size={18} /> },
        { name: 'MariaDB', icon: <SiMariadb size={18} /> },
        { name: 'Firebase', icon: <SiFirebase size={18} /> },
    ]
    },
    // Row 3: Tools, Cloud & Workflow
    {
    direction: 'right',
    items: [
        { name: 'Git', icon: <SiGit size={18} /> },
        { name: 'GitHub', icon: <SiGithub size={18} /> },
        { name: 'GitLab', icon: <SiGitlab size={18} /> },
        { name: 'Google Cloud', icon: <SiGooglecloud size={18} /> },
        { name: 'Jira', icon: <SiJira size={18} /> },
        { name: 'Trello', icon: <SiTrello size={18} /> },
        { name: 'Vite', icon: <SiVite size={18} /> },
        { name: 'Docker', icon: <SiDocker size={18} /> },
        ]
    }
];

export const experiences = [
    { date: 'July 2026 - Now', role: 'Game Tester', company: 'Untitled Bakery, Roblox', location: 'Remote' },
    { date: 'April 2026 - June 2026', role: 'Data Quality Analyst', company: 'TELUS Digital', location: 'Remote' },
    { date: 'February 2026 - Now', role: 'Self Employed Full Stack Developer', company: '-', location: 'Remote' },
    { date: 'August 2025 - January 2026', role: 'Software Engineer Trainee', company: 'SLB Kuching Technology Centre', location: 'On-site' },
    { date: 'February 2024 - August 2024', role: 'Learning and Development Intern', company: 'Sarawak Energy Berhad', location: 'Hybrid' },
    { date: 'April 2021 - March 2023', role: 'Personal Book Shopper', company: 'Shopee Malaysia', location: 'Remote' },
    { date: 'March 2020 - July 2020', role: 'Private Tutor', company: '-', location: 'Hybrid' }
];

export const education = [
    {
        degree: 'Bachelor in Software Engineering (Hons)',
        institution: 'Universiti Malaysia Sarawak (UNIMAS)',
        cgpa: '3.71 / 4.00',
        period: '2021 - 2025',
        details: 'Focused on advanced software architecture, full-stack web development, database systems, and agile engineering principles.'
    },
    {
        degree: 'Foundation in Physical Science',
        institution: 'Universiti Malaysia Sarawak (UNIMAS)',
        cgpa: '3.32 / 4.00',
        period: '2020 - 2021',
        details: 'Core preparation in advanced mathematics, computational science, and fundamental physics principles.'
    },
    {
        degree: 'Malaysia Universiti English Test (MUET)',
        institution: 'Universiti Malaysia Sarawak (UNIMAS)',
        cgpa: 'Band 4.5',
        period: '2021',
        details: 'Achieved Band 4.5 demonstrating high proficiency in academic English, effective written communication, and professional spoken articulation.'
    },
    {
        degree: 'Sijil Pelajaran Malaysia (SPM)',
        institution: 'Kolej Datu Patinggi Abang Haji Abdillah',
        cgpa: '6A 3B',
        period: '2019',
        details: 'Completed Pure Science stream education with a strong foundation in Additional Mathematics, Physics, Chemistry, and English.'
    }
];

export const certificates = [
    { title: 'Crash Course on Python', issuer: 'Coursera', year: '2025' },
    { title: 'Foundations of Data Science', issuer: 'Coursera', year: '2025' },
    { title: 'AI-900 - Microsoft Azure AI Fundamentals', issuer: 'Trainocate', year: '2025' },
    { title: 'HackWKND Hackathon Certificate', issuer: 'Sarawak Digital', year: '2025' },
    { title: 'Fundamentals of Cloud Computing Workshop', issuer: 'RunCloud Education @ UMPSA', year: '2025' }
];

export const highlights = [
    {
        title: 'Frontend Web Applications & UI Components (roadmap.sh)',
        description: 'Developed a suite of 15+ responsive UI components focusing on strict web standards, semantics, and high accessibility (including Accessible Form UI, Cookie Consent banners, Tabs, and Accordions). Engineered dynamic applications like a Weather Web App with live API integration and an interactive browser-based Quiz App built with modern JavaScript frameworks (ReactJS, Vite, and Tailwind CSS) to manage complex state and scoring logic.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Backend APIs & Command-Line Utilities (roadmap.sh)',
        description: 'Engineered a collection of RESTful services and CLI utilities to master core backend architecture. Built scalable micro-services including a Weather API and a Blogging Platform API for full CRUD lifecycle management. Developed command-line applications like Task Tracker, Expense Tracker, and GitHub User Activity fetchers to process raw data formats, manage local storage, and integrate third-party APIs efficiently.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Report Conversion - Legacy (FO/XSL)/Birt to JasperReport',
        description: 'Successfully completed all assigned report conversions from FO/XSL to JasperReports. Prior to training completion, 3 reports were deployment-ready, while 8 reports progressed through Quality Control (4 under active QC and 4 queued), demonstrating consistent delivery and adherence to enterprise workflows.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Hackathon Recognition – HackWKND Kota Samarahan',
        description: 'Awarded Most Accessible Solution for developing a web‑based educational platform supporting learners with dyslexia, dysgraphia, and dyscalculia. Focused on accessibility‑first design, adaptive content presentation, and user‑friendly navigation to improve outcomes for neurodivergent users.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Crowdsourced Study Material App',
        description: 'Contributed to frontend and integration tasks for a scalable, AI‑driven quiz app using Flutter, Firebase, and TensorFlow Lite which is a centralized space for students to share study materials, generate quizzes using AI, and collaborate in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    }
];