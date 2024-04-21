import { epam, university, hero } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];
export const languages = [
    {
        name: "Armenian",
        level: "Native",
    },
    {
        name: "Russian",
        level: "Fluent written and oral communication",
    },
    {
        name: "English",
        level: "Fluent written and oral communication",
    },
];

export const experiences = [
    {
        title: "Automation Student",
        company_name: "National Polytechnic University of Armenia, State Engineering University of Armenia (SEUA), Yerevan, Armenia",
        icon: university,
        iconBg: "#9ca3af",
        date: "Sep 2021 - Present",
        points: [
            "Control Systems Design and Analysis",
            "Simulation and Modeling: Practising using simulation software such as MATLAB Simulink, LabVIEW to model dynamic systems and predict their behaviors under various conditions.",
        ],
    },
    {
        title: "Student",
        company_name: "EPAM Systems",
        icon: epam,
        iconBg: "#b7e4c7",
        date: "May 2023 - sep 2023",
        points: [
            "Node.js and Framework Expertise",
            "RESTful API Development: Designed and implemented RESTful services, focusing on routing, middleware, security practices, and API testing",
            "Successfully navigated numerous interviews, demonstrating strong technical acumen and problem-solving skills.",
        ],
    },
    {
        title: "Junior Software Engineer",
        company_name: "EPAM Systems",
        icon: epam,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Now",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Actively engaged in continuous learning and skill enhancement, including attending workshops and webinars on the latest industry trends."
        ],
    },
];
// Add footer for this Links
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: hero,
        name: 'Form-Builder on NEXTJS',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: hero,
        name: 'Real Time Notes-Taker/Caht-app',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: hero,
        name: 'CRUD app using PERN stack with Docker',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: hero,
        name: 'React-Redux Shop',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: hero,
        name: 'My Start in JS (Simple projects in one)',
        description: 'You can see here the projects from which I began my programming journey.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];