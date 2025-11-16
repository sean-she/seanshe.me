import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sean She",
  initials: "SS",
  url: "https://seanshe.me",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer and Designer. Passionate about making everyday experiences better.",
  summary:
    `A recent graduate from UC Berkeley, now software engineer and designer based in San Francisco, CA. Over the course of my undergraduate career, I've been passionate about building products and experiences that help people. I love design, data, and engineering and hope to use my skills to solve meaningful problems. I'm always looking for new challenges and opportunities to learn.
    
    \n\n Currently seeking entry-level/new grad roles in software engineering and design.
    
    \n\n Ask me about [photography](https://www.instagram.com/seanphotodumps), sitcoms, and food!`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Swift/SwiftUI",
    "Figma",
    "MongoDB",
    "Google Firebase",
    "Pandas",
    "Python",
    "Java",
    "C/C++",
    "Go",
    "SQL/NoSQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sean.she@berkeley.edu",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sean-she",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sean-she/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ASUC OCTO, MoffitStatus",
      href: "https://octo.asuc.org/",
      badges: [],
      location: "Berkeley, CA",
      title: "Web Developer",
      logoUrl: "/octo.png",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Spearheaded the design and development of a real-time web application that lets students see how busy each of the six main campus libraries are, reaching around **300 daily active users** during its initial launch. Built with **Next.js**, **React**, **Tailwind CSS**, and **shadcn/ui**, the app features a responsive interface backed by **Firebase** for authentication, data storage, and live updates, allowing verified students to report and view occupancy by floor. I implemented API services for real-time data handling, built logic to surface the most recent and reliable reports, and collaborated with **ASUC engineering** teams to enable data sharing across student-led projects. The platform also included an experimental **predictive feature** that estimated current and near-future library occupancy using historical reporting patterns.",
    },
    {
      company: "Big Data at Berkeley",
      href: "https://bd.studentorg.berkeley.edu/",
      badges: [],
      location: "Berkeley, CA",
      title: "Web Developer | Head of Online Course",
      logoUrl: "/bdab.png",
      start: "Sept 2022",
      end: "May 2025",
      description:
        `Launched the **first public iteration** of our club’s online education platform after several semesters of prior development, redesigning and developing **8 core course modules** along with the landing and homepage sections to improve usability and learning flow. Built with **React**, **Gatsby**, and **CSS Modules**, the platform reached over **73 learners across 6 countries on launch**, representing a wide range of ages and backgrounds. 
        
        \n\n Later, as **Head of Online Course**, I led a **team of 5 developers** to design and prototype a Python backend system for user authentication, progress tracking, and analytics. I also integrated **Google Analytics** to monitor engagement and guide future design and feature decisions.`
    },
    {
      company: "Open Project",
      href: "https://openprojectberkeley.com/",
      badges: [],
      location: "Berkeley, CA",
      title: "Mobile Developer",
      logoUrl: "/op.png",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "Develop SmartSpoon, a mobile app that detects pantry ingredients and generates personalized recipes based on what users already have at home. Working with a **team of 8**, I focused on designing and building the frontend using **React Native**, **Expo Router**, and **TypeScript**, creating **six core screens** for pantry management, recipe generation, and user profiles. The app connected to a **Flask** backend that handled **ingredient detection** through **Roboflow** and recipe generation using the **OpenAI GPT-4 API**, with **MongoDB** used for ingredient and user data storage.",
    },
    {
      company: "Innovative Design",
      href: "https://www.innovativedesign.club/",
      badges: [],
      location: "Berkeley, CA",
      title: "Web Lead | VP of Technology",
      logoUrl: "/innod.png",
      start: "Sept 2021",
      end: "May 2024",
      description:
        `As **Web Team Lead** over four semesters, I guided teams of **9+ designers and developers** to build websites for campus and community organizations using **React** and **CSS Modules**, emphasizing accessibility, maintainability, and hands-on learning through semester-long projects. I hosted **workshops on web technologies and UI/UX principles** and mentored members through hands-on projects. These efforts balanced mentorship and production, and produced polished, production-ready sites **used by active student groups**. **Previous Clients**: Berkeley Student Food Collective, [Riot Games at Berkeley](https://legends.studentorg.berkeley.edu/) (previously Berkeley Legends), Berkeley SURG, [Berke1337](https://berke1337-innod.netlify.app/), [Berkeley ToxSa](https://toxsa.studentorg.berkeley.edu/)
        
        \n\n As **Vice President of Technology**, I **redesigned of the club’s main website** following a major rebrand, enhancing accessibility and engagement for **120+ members**. I developed reusable components for long-term scalability and consistency across future iterations. Launched **two event websites each semester** that attracted **70+ attendees**. Working closely with other executives, I ensured cohesive coordination across technical, marketing, and event planning efforts.
        
        
        \n\n Also spent a semester as VP of Administration, where I helped with the planning and execution of the club events, activities, membership, and general club operations :)`,
    },
    {
      company: "Ai.Vocate",
      href: "",
      badges: [],
      location: "Berkeley, CA",
      title: "Software Engineer Intern",
      logoUrl: "/berkeley_skydeck.png",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "During the summer, I worked as an iOS developer for Ai.Vocate, a Berkeley SkyDeck–affiliated startup building an AI-powered “pocket lawyer”. Collaborating on a small three-person team, I designed user flows, created mid-fidelity prototypes, and implemented key authentication, chat, and profile pages in **Swift**, using **Firebase** for secure user and data management. I also integrated the **ChatGPT API** to simulate conversational legal assistance for our MVP, ensuring a seamless and intuitive experience while the core chatbot was in development.",
    },
    {
      company: "CS 61C (Machine Structures)",
      href: "https://cs61c.org/",
      badges: [],
      location: "Berkeley, CA",
      title: "Academic Intern",
      logoUrl: "/uc_berkeley_eecs.png",
      start: "Jan 2023",
      end: "May 2023",
      description:
        "As an Academic Intern for CS 61C, I supported a class of over **600 students** by assisting weekly in-person office hours focused on **debugging**, **systems design**, and conceptual understanding. I guided students through projects in **C** and **RISC-V assembly**, breaking down complex topics like **instruction execution**, **memory hierarchy**, and **parallelism** into clear, practical explanations. Working closely with teaching assistants, I stayed up to date with course content and provided guidance tailored to each phase of the class.",
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      href: "https://berkeley.edu",
      degree: "B.S. Electrical Engineering and Computer Sciences",
      logoUrl: "/berkeley.png",
      start: "2021",
      end: "2025",
      description: `Minors in Data Science and Public Policy
      
      \n\n Was also an Orientation Leader during my Senior year for the Class of 2028 :)`
    },
  ],
  projects: [
    {
      title: "SmartSpoon",
      href: "https://github.com/Danhdere/SmartSpoon-MobileApp",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "SmartSpoon is a React Native mobile app that uses AI-powered ingredient detection to help users manage their pantry and generate personalized recipes. Built with Flask, Roboflow, and the OpenAI API, it identifies food items from photos, tracks stored ingredients, and suggests new meal ideas based on user preferences and available ingredients.",
      technologies: [
        "React Native",
        "Typescript",
        "Expo",
        "MongoDB",
        "Flask",
        "OpenAI API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Danhdere/SmartSpoon-MobileApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartspoon_cover.png",
      video:
        "",
    },
    {
      title: "Sotion",
      href: "https://github.com/sean-she/sotion",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "Sotion is a Notion-like application built with Next.js 14, React, Convex, Tailwind, Clerk, and EdgeStore. It is a real-time database and Notion-style editor that allows you to create, edit, and delete documents. It also allows you to publish your notes to the web.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "EdgeStore",
        "Clerk",
        "Tailwind CSS",
        "Shadcn UI",
        "BlockNote",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sean-she/sotion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sotion_cover.png",
      video: "",
    },
  ],
} as const;
