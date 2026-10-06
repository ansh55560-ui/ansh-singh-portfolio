export const aiKnowledge = {
  profile: {
    name: "Ansh Singh",
    role: "Full Stack Developer",
    headline: "Building scalable web applications, e-commerce platforms, CMS solutions, and modern React experiences.",
    location: "Thane, Maharashtra, India",
    phone: "+91 90985 31316",
    email: "ansh55560@gmail.com",
    linkedin: "https://www.linkedin.com/in/ansh-singh-thakur",
    github: "https://github.com/ansh55560-ui",
    resumeUrl: "/Ansh_Singh_Resume.pdf",
    availabilityStatus: "Available for Opportunities",
    isAvailable: true,
    experienceSummary: "1 year of professional experience at Clock Softwares preceded by a 3-month internship.",
    bio: "Full Stack Developer with professional experience developing scalable web applications, custom CMS architectures, and robust e-commerce platforms across the complete software development lifecycle."
  },

  experience: {
    totalDuration: "1 year of professional experience, following a 3-month internship",
    company: "Clock Softwares",
    roles: [
      {
        role: "Full Stack Developer",
        period: "November 2025 — Present",
        duration: "1 Year",
        company: "Clock Softwares",
        summary: "Developed scalable web applications, e-commerce systems, dynamic CMS panels, and custom backend modules using PHP, MySQL, JavaScript, AJAX, and Bootstrap.",
        keyPoints: [
          "Developed scalable web applications utilizing PHP, MySQL, HTML5, CSS3, JavaScript, AJAX, and Bootstrap.",
          "Designed complete e-commerce platforms with shopping cart, wishlist, secure checkout, order management, and coupon systems.",
          "Built dynamic admin panels for managing products, categories, orders, banners, and site content.",
          "Integrated Razorpay payment gateway for secure online transactions.",
          "Implemented secure OTP-based authentication via SMS and Email channels.",
          "Developed reusable backend modules following MVC architecture and optimized SQL queries."
        ]
      },
      {
        role: "Full Stack Web Developer Intern",
        period: "2025",
        duration: "3 Months",
        company: "Clock Softwares",
        summary: "Completed a 3-month intensive web development internship preceding the professional role, building foundation in PHP, MySQL database design, and frontend styling."
      }
    ]
  },

  projects: [
    {
      id: "gen-alpha",
      title: "Gen Alpha",
      type: "Corporate Web Application & Custom CMS",
      status: "ONGOING",
      isLive: false,
      featured: false,
      description: "A modern corporate web application built with a decoupled architecture: a high-performance React 19 single-page frontend paired with a custom OOP PHP REST API backend. Features protected JWT authentication, dynamic routing, a custom multi-module CMS, and fluid interactive animations.",
      architecture: "Decoupled React 19 SPA + Custom OOP PHP REST API Backend (PDO & Prepared Statements)",
      technologies: ["React 19", "Vite", "Tailwind CSS", "JavaScript", "Axios", "PHP", "MySQL", "REST API", "JWT", "GSAP", "Framer Motion", "Lenis", "React Router"],
      highlights: [
        "Custom REST API architecture supporting full CRUD operations (GET, POST, PUT, DELETE) with PDO prepared statements",
        "JWT-secured authentication with protected API endpoints for administrative access",
        "Custom CMS for managing services, projects, brands, news, media gallery, and website content",
        "Media management system with image upload, instant preview, and deletion",
        "Smooth scrolling and UI animations integrated via GSAP, Framer Motion, and Lenis"
      ]
    },
    {
      id: "shopatbms",
      title: "ShopatBMS",
      type: "Headless E-Commerce Platform",
      status: "LIVE",
      isLive: true,
      featured: true,
      liveUrl: "https://www.shopatbms.com/",
      description: "A modern headless e-commerce platform featuring a fully customizable storefront and an extensive dynamic administrative control center. Engineered with PHP, MySQL, JavaScript, and AJAX for seamless shopping and content administration without code changes.",
      architecture: "Modular PHP Architecture + Relational MySQL Database + AJAX Frontend",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "AJAX", "Bootstrap"],
      highlights: [
        "Live production e-commerce platform with customizable branding, logo, and theme settings",
        "Complete e-commerce lifecycle: product catalog, inventory tracking, wishlist, shopping cart, customer reviews, and secure checkout",
        "Comprehensive Admin Dashboard: product, category, order, customer, coupon, and banner management with operational analytics",
        "Newsletter subscription module and customer notification systems",
        "Performance-optimized SQL queries and responsive cross-device experience"
      ]
    },
    {
      id: "metals-mantra",
      title: "Metals Mantra",
      type: "E-Commerce Website",
      status: "LIVE",
      secondaryStatus: "Currently Working",
      isLive: true,
      featured: true,
      liveUrl: "https://www.metalsmantra.com/",
      description: "A complete production e-commerce website for metal artifacts and products. Features a structured product catalogue, category browsing, cart and wishlist workflows, integrated payment gateway, order tracking, and a dynamic admin management suite.",
      architecture: "Production PHP & MySQL E-Commerce Stack with Bootstrap & JavaScript",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      highlights: [
        "Live production e-commerce platform serving customers with real-time product discovery and ordering",
        "Comprehensive shopping cart, wishlist, customer checkout, and payment processing workflow",
        "Dynamic administrative panel for managing products, categories, orders, and real-time inventory counts",
        "Image processing optimization and asset caching for fast page loading",
        "Fully responsive user interface optimized across smartphones, tablets, and desktops"
      ]
    },
    {
      id: "tathshri",
      title: "Tathshri",
      type: "Event Management Website",
      status: "LIVE",
      secondaryStatus: "Currently Working",
      isLive: true,
      featured: true,
      liveUrl: "https://www.tathshri.in/",
      description: "A dynamic event management web platform designed to showcase event portfolios, manage event listings, curate media galleries, and handle client inquiries through a custom CMS-driven admin dashboard.",
      architecture: "PHP & MySQL Web Application with Custom CMS Backend",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      highlights: [
        "Live production event platform with interactive portfolios and dynamic date/category filtering",
        "Gallery Management System for organizing event photography, client albums, and media assets",
        "Contact & Inquiry Module facilitating client event bookings and direct lead capture",
        "CMS-based Admin Panel empowering non-technical staff to update event details and site content",
        "SEO-friendly page architecture with performance and mobile layout optimizations"
      ]
    }
  ],

  techStack: {
    core: [
      "PHP",
      "MySQL",
      "JavaScript (ES6+)",
      "React / React 19",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "AJAX",
      "REST API",
      "JWT",
      "PDO & Prepared Statements",
      "Axios",
      "GitHub & Git",
      "Postman",
      "GSAP",
      "Framer Motion",
      "Lenis",
      "XAMPP"
    ],
    categories: {
      backend: ["PHP (OOP & MVC)", "REST APIs", "JWT Authentication", "PDO"],
      database: ["MySQL", "Relational Schema Design", "Query Optimization", "Prepared Statements"],
      frontend: ["JavaScript (ES6+)", "React.js / React 19", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "AJAX"],
      animations: ["GSAP", "Framer Motion", "Lenis Smooth Scroll"],
      tools: ["Git & GitHub", "Postman", "Vite", "XAMPP"]
    },
    alsoExploring: [
      { name: "Python", purpose: "Backend scripting, automation workflows, and computational fundamentals." },
      { name: "Git & GitHub", purpose: "Advanced branching strategies, collaborative workflows, and CI/CD pipelines." },
      { name: "AI Tools", purpose: "AI-assisted development, prompt engineering, and LLM workflow integrations." }
    ]
  },

  achievements: [
    "Delivered 3+ live client websites to production",
    "Engineered a complete Headless E-Commerce Platform (ShopatBMS)",
    "Built dynamic administrative panels and custom CMS systems",
    "Integrated Razorpay payment gateway workflows",
    "Implemented secure OTP-based multi-channel authentication (SMS/Email)"
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "K.P.B. Hinduja College of Science & Commerce",
      university: "Yashwantrao Chavan Maharashtra Open University",
      period: "2022 — 2025",
      description: "Coursework covering computer applications, software engineering principles, database management systems, object-oriented programming, and web development fundamentals."
    }
  ],

  certifications: [
    {
      name: "MS-CIT",
      category: "Information Technology",
      description: "Maharashtra State Certificate in Information Technology covering computing fundamentals, office productivity, and IT concepts."
    },
    {
      name: "Node.js & React Development",
      category: "Modern JavaScript Ecosystem",
      description: "Training in modern JavaScript (ES6+), React component architectures, single-page application development, and Node.js fundamentals."
    },
    {
      name: "Web Designing & PHP Development",
      category: "Full Stack & Web Engineering",
      description: "Comprehensive training in PHP server-side programming, MySQL relational databases, responsive web layout design, and dynamic website architectures."
    }
  ],

  contact: {
    email: "ansh55560@gmail.com",
    phone: "+91 90985 31316",
    location: "Thane, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/ansh-singh-thakur",
    github: "https://github.com/ansh55560-ui",
    resumeUrl: "/Ansh_Singh_Resume.pdf"
  }
};
