import {
    epam, 
    university, 
    hero, 
    formBuider,
    shop,
    chatApp,
    CRUD_PERN,
    JSProjects,
} from "../assets/images";
import {
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
export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KarenTsaturyan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/karentsaturyan',
    }
];

export const projects = [
    {
        iconUrl: formBuider,
        name: 'Form-Builder on NEXTJS',
        description: 'A dynamic form-building application that leverages Next.js for server-side rendering, providing a seamless user experience for creating and managing customizable web forms with various field types',
        link: 'https://github.com/KarenTsaturyan/FormBuilder',
    },
    {
        iconUrl: chatApp,
        name: 'Real Time Chat Application',
        description: 'An interactive chat application designed for real-time communication, utilizing WebSockets to enable instant messaging and user presence features across different devices.',
        link: 'https://github.com/KarenTsaturyan/Chat_App',
    },
    {
        iconUrl: CRUD_PERN,
        name: 'CRUD app using PERN stack with Docker',
        description: 'A comprehensive application built with the PERN (PostgreSQL, Express, React, Node.js) stack, encapsulated in Docker containers, that offers robust create, read, update, and delete (CRUD) functionality for efficient data management.',
        link: 'https://github.com/KarenTsaturyan/Tasks/tree/master/PERN_Project',
    },
    {
        iconUrl: shop,
        name: 'React-Redux Shop',
        description: 'An e-commerce platform developed using React and Redux, providing a responsive user interface that manages state efficiently for real-time updates to shopping carts and product listings.',
        link: 'https://github.com/KarenTsaturyan/Shop',
    },
    {
        iconUrl: JSProjects,
        name: 'My Start in JS (Simple projects in one)',
        description: 'You can see here the projects from which I began my programming journey.(Code has not been updated, maybe will do it in the future',
        link: 'https://github.com/KarenTsaturyan/Landing-Page',
    }
];