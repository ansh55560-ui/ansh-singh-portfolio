export const aiWorkflowSteps = [
  {
    step: "01",
    title: "IDEA",
    role: "Ideation & Scope",
    icon: "Lightbulb",
    shortDesc: "Deconstructing product requirements into crisp technical goals.",
    details: "I begin by mapping domain boundaries, identifying core entity relationships, and drafting user story flows with precision before touching code.",
    accent: "#f59e0b",
    aiRole: "AI acts as a sparring partner for edge-case brainstorming and requirement disambiguation."
  },
  {
    step: "02",
    title: "PROMPT",
    role: "Context Framing",
    icon: "Sparkles",
    shortDesc: "Structuring contextual prompts with system constraints.",
    details: "Crafting chain-of-thought instructions with explicit schemas, type safety guidelines, and architectural patterns (e.g. Service-Repository in Laravel).",
    accent: "#8b5cf6",
    aiRole: "High-density prompts ensure zero-hallucination code generation tailored to project specs."
  },
  {
    step: "03",
    title: "ARCHITECTURE",
    role: "System Design",
    icon: "Network",
    shortDesc: "Defining database schemas, API contracts, and component trees.",
    details: "Designing MySQL tables with relational constraints, mapping REST endpoints, and laying out React component hierarchies with unidirectional data flow.",
    accent: "#6366f1",
    aiRole: "AI rapidly stress-tests database indexing strategies and evaluates API contract completeness."
  },
  {
    step: "04",
    title: "CODE",
    role: "Full Stack Implementation",
    icon: "Code2",
    shortDesc: "Writing clean, modular PHP, Laravel, and React code.",
    details: "Implementing type-strict PHP 8+ classes, elegant Eloquent queries, and polished React components with clean state management.",
    accent: "#06b6d4",
    aiRole: "AI eliminates boilerplate generation while human engineering maintains strict architectural integrity."
  },
  {
    step: "05",
    title: "TEST",
    role: "Validation & QA",
    icon: "ShieldCheck",
    shortDesc: "Automated test synthesis and boundary validation.",
    details: "Validating API payloads, CSRF/XSS sanitization, SQL query safety, and client-side UI error boundary robustness.",
    accent: "#10b981",
    aiRole: "AI synthesizes adversarial edge-case test vectors and identifies potential race conditions."
  },
  {
    step: "06",
    title: "SHIP",
    role: "Deployment & Optimization",
    icon: "Rocket",
    shortDesc: "Production build, caching configuration, and deployment.",
    details: "Optimizing bundle sizes, configuring route caching and MySQL index buffers, and deploying with clean Git release tagging.",
    accent: "#ec4899",
    aiRole: "AI assists with changelog generation, release documentation, and performance profiling analysis."
  }
];
