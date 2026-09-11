export const skillCategories = [
  {
    id: "backend-db",
    name: "Backend & Database",
    tagline: "Server-side logic, relational database engineering, and secure data access",
    skills: [
      {
        name: "PHP",
        badge: "Core Backend",
        description: "Object-oriented PHP, MVC architectural patterns, and reusable modular services.",
        icon: "Code2"
      },
      {
        name: "MySQL",
        badge: "Relational Database",
        description: "Relational schema design, query optimization, indexing, and data normalization.",
        icon: "Database"
      },
      {
        name: "PDO & Prepared Statements",
        badge: "Database Security",
        description: "Secure database communication preventing SQL injection vulnerabilities.",
        icon: "ShieldCheck"
      },
      {
        name: "MVC Architecture",
        badge: "Pattern",
        description: "Clean separation of business logic, database models, and presentation views.",
        icon: "Layers"
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & UI Engineering",
    tagline: "Responsive layouts, reactive state, and dynamic user interfaces",
    skills: [
      {
        name: "JavaScript (ES6+)",
        badge: "Language",
        description: "DOM manipulation, asynchronous programming, event handling, and ES6+ features.",
        icon: "FileCode"
      },
      {
        name: "HTML5 & CSS3",
        badge: "Core Web",
        description: "Semantic layouts, CSS Grid, Flexbox, media queries, and responsive design.",
        icon: "Layout"
      },
      {
        name: "Bootstrap",
        badge: "CSS Framework",
        description: "Rapid responsive grid scaffolding, mobile-first design, and UI components.",
        icon: "Layout"
      },
      {
        name: "AJAX",
        badge: "Async Data",
        description: "Asynchronous data fetching for cart updates and real-time page changes without reload.",
        icon: "Zap"
      }
    ]
  },
  {
    id: "modern-react",
    name: "React & Modern Frontend",
    tagline: "Single-page application architecture and interactive animations (Gen Alpha)",
    skills: [
      {
        name: "React.js / React 19",
        badge: "SPA Library",
        description: "Component composition, reactive state, custom hooks, and dynamic client routing.",
        icon: "Code2"
      },
      {
        name: "Vite & Tailwind CSS",
        badge: "Modern Toolchain",
        description: "High-speed build tooling and utility-first responsive styling.",
        icon: "Terminal"
      },
      {
        name: "Axios & React Router",
        badge: "API & Routing",
        description: "HTTP client integration with API interceptors and client-side page routing.",
        icon: "Webhook"
      },
      {
        name: "GSAP, Framer Motion & Lenis",
        badge: "Motion & Smooth Scroll",
        description: "Fluid UI transitions, spring-based scroll reveals, and smooth scrolling physics.",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: "api-security",
    name: "API, Payments & Auth",
    tagline: "RESTful endpoints, third-party integrations, and verification systems",
    skills: [
      {
        name: "REST API Integration",
        badge: "API Architecture",
        description: "Custom REST endpoints supporting GET, POST, PUT, DELETE with JSON payloads.",
        icon: "Webhook"
      },
      {
        name: "JWT Authentication",
        badge: "Security",
        description: "Stateless token-based authorization and protected route access control.",
        icon: "ShieldCheck"
      },
      {
        name: "Razorpay Integration",
        badge: "Payment Gateway",
        description: "End-to-end checkout integration, order generation, and signature verification.",
        icon: "Zap"
      },
      {
        name: "OTP Verification",
        badge: "Auth Security",
        description: "Multi-factor OTP verification using SMS and Email channels for secure login.",
        icon: "ShieldCheck"
      }
    ]
  },
  {
    id: "tools",
    name: "Development Tools & Environment",
    tagline: "Version control, API testing, and local servers",
    skills: [
      {
        name: "GitHub & Git",
        badge: "Version Control",
        description: "Source code management, branch workflows, and repository collaboration.",
        icon: "GitBranch"
      },
      {
        name: "Postman",
        badge: "API Testing",
        description: "Testing, validating, and debugging RESTful API endpoints and response codes.",
        icon: "Terminal"
      },
      {
        name: "XAMPP",
        badge: "Local Server",
        description: "Local development server environment for Apache, PHP, and MySQL stacks.",
        icon: "Database"
      }
    ]
  }
];

export const currentlyLearning = [
  {
    name: "Python",
    category: "Programming Language",
    description: "Backend scripting, automation workflows, and computational fundamentals."
  },
  {
    name: "Git & GitHub",
    category: "Version Control & Collaboration",
    description: "Advanced branching strategies, collaborative workflows, and CI/CD pipelines."
  },
  {
    name: "AI Tools",
    category: "AI & Productivity",
    description: "AI-assisted development, prompt engineering, and LLM workflow integrations."
  }
];

export const orbitTechList = [
  { name: "PHP", category: "Backend", angle: 0, distance: 130, color: "#8892be" },
  { name: "MySQL", category: "Database", angle: 45, distance: 165, color: "#4479a1" },
  { name: "JavaScript", category: "Frontend", angle: 90, distance: 130, color: "#f7df1e" },
  { name: "React", category: "SPA", angle: 135, distance: 170, color: "#61dafb" },
  { name: "REST API", category: "Integration", angle: 180, distance: 125, color: "#06b6d4" },
  { name: "Bootstrap", category: "Styling", angle: 225, distance: 165, color: "#7952b3" },
  { name: "GSAP", category: "Animation", angle: 270, distance: 130, color: "#88ce02" },
  { name: "Framer Motion", category: "Motion", angle: 315, distance: 160, color: "#a855f7" }
];
