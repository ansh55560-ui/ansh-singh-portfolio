import { aiKnowledge } from '../data/aiKnowledge';

/**
 * AI Service for Ansh Singh Portfolio Assistant
 * Provides clean abstraction for external LLM API integration with robust local knowledge-base fallback.
 */

class AIService {
  constructor() {
    // API endpoint for optional backend AI proxy (never store raw API secrets in frontend)
    this.apiEndpoint = import.meta.env?.VITE_API_ENDPOINT || null;
    this.knowledge = aiKnowledge;
  }

  /**
   * Send a message to the AI Assistant
   * @param {string} userMessage - Message sent by the visitor
   * @param {Array} history - Past conversation history in current session
   * @param {Object} sessionContext - Contextual memory (last topic/project)
   * @returns {Promise<{text: string, quickLinks?: Array, suggestions?: Array, updatedContext?: Object}>}
   */
  async sendMessage(userMessage, history = [], sessionContext = {}) {
    // Input Sanitization & length limitation
    const sanitizedInput = typeof userMessage === 'string'
      ? userMessage.trim().slice(0, 500)
      : '';

    if (!sanitizedInput) {
      return {
        text: "Please enter a question or select a topic about Ansh's portfolio.",
        updatedContext: sessionContext
      };
    }

    // If an external backend/serverless proxy endpoint is configured
    if (this.apiEndpoint) {
      try {
        return await this._callExternalAI(sanitizedInput, history, sessionContext);
      } catch (err) {
        console.warn("External AI endpoint unavailable, using secure portfolio knowledge engine:", err);
      }
    }

    // Local deterministic, zero-hallucination knowledge engine
    return this._localKnowledgeResponse(sanitizedInput, history, sessionContext);
  }

  /**
   * Internal deterministic rule & semantic matcher grounded strictly on verified portfolio data
   */
  _localKnowledgeResponse(rawMessage, history, sessionContext = {}) {
    const query = (rawMessage || '').trim().toLowerCase();
    const context = { ...sessionContext };

    // Resolve context pronouns ("it", "this project", "that project")
    let targetProject = null;
    if (query.includes('gen alpha') || query.includes('genalpha')) {
      targetProject = 'gen-alpha';
      context.lastProject = 'gen-alpha';
    } else if (query.includes('shopatbms') || query.includes('shop at bms') || query.includes('bms')) {
      targetProject = 'shopatbms';
      context.lastProject = 'shopatbms';
    } else if (query.includes('metals mantra') || query.includes('metalsmantra') || query.includes('metals')) {
      targetProject = 'metals-mantra';
      context.lastProject = 'metals-mantra';
    } else if (query.includes('tathshri') || query.includes('tathshree')) {
      targetProject = 'tathshri';
      context.lastProject = 'tathshri';
    } else if ((query.includes('it') || query.includes('this project') || query.includes('that') || query.includes('tech stack')) && context.lastProject) {
      targetProject = context.lastProject;
    }

    // 1. SPECIFIC PROJECT DETAILS
    if (targetProject) {
      const proj = this.knowledge.projects.find(p => p.id === targetProject);
      if (proj) {
        if (query.includes('tech') || query.includes('stack') || query.includes('built with') || query.includes('language') || query.includes('framework')) {
          return {
            text: `**${proj.title}** is built with:\n\n• **Architecture**: ${proj.architecture}\n• **Technologies**: ${proj.technologies.join(', ')}`,
            quickLinks: proj.liveUrl ? [{ label: `View ${proj.title} Live`, url: proj.liveUrl, external: true }] : [],
            updatedContext: context
          };
        }

        const liveText = proj.isLive ? `● **Live Website** (${proj.secondaryStatus ? proj.secondaryStatus : 'Production'})` : `● **Ongoing Project**`;
        const actionLinks = [];
        if (proj.liveUrl) {
          actionLinks.push({ label: `Visit ${proj.title} Live`, url: proj.liveUrl, external: true });
        }

        return {
          text: `**${proj.title}** (${proj.type})\nStatus: ${liveText}\n\n${proj.description}\n\n**Key Highlights:**\n${proj.highlights.map(h => `• ${h}`).join('\n')}\n\n**Tech Stack:**\n${proj.technologies.join(', ')}`,
          quickLinks: actionLinks,
          updatedContext: context
        };
      }
    }

    // 2. WHO IS ANSH / ABOUT / ROLE
    if (
      query.includes('who is ansh') || 
      query.includes('who are you') || 
      query.includes('about ansh') || 
      query.includes('tell me about ansh') || 
      query.includes('what does ansh do') || 
      query.includes('introduce') ||
      query.includes('what do you do') ||
      query.includes('role')
    ) {
      return {
        text: `**Ansh Singh** is a **Full Stack PHP Developer** based in **Thane, Maharashtra, India**.\n\nHe has **1 year of professional experience** at Clock Softwares (following a 3-month internship), specializing in building scalable web applications, custom CMS architectures, REST APIs, and e-commerce platforms with PHP, MySQL, JavaScript, and modern React experiences.`,
        quickLinks: [
          { label: "View Experience", action: "experience" },
          { label: "Explore Projects", action: "projects" }
        ],
        updatedContext: context
      };
    }

    // 3. EXPERIENCE / YEARS OF EXPERIENCE / CLOCK SOFTWARES
    if (
      query.includes('experience') || 
      query.includes('how many years') || 
      query.includes('clock software') || 
      query.includes('background') || 
      query.includes('work history')
    ) {
      return {
        text: `Ansh has **1 year of professional experience** as a Full Stack PHP Developer at **Clock Softwares** (November 2025 – Present), preceded by an intensive **3-month web development internship** at the same company.\n\n**Key responsibilities & accomplishments:**\n• Engineered scalable web applications & dynamic admin CMS dashboards.\n• Built end-to-end e-commerce features with cart, wishlist, coupon, and checkout pipelines.\n• Integrated Razorpay payment gateways and multi-channel SMS/Email OTP authentication.\n• Developed clean MVC architectures and optimized relational MySQL queries.`,
        quickLinks: [
          { label: "View Selected Work", action: "projects" },
          { label: "Download Resume", url: this.knowledge.contact.resumeUrl, external: true }
        ],
        updatedContext: context
      };
    }

    // 4. TECH STACK / SKILLS
    if (
      query.includes('tech stack') || 
      query.includes('skills') || 
      query.includes('technologies') || 
      query.includes('what tools') || 
      query.includes('languages') || 
      query.includes('frontend') || 
      query.includes('backend') || 
      query.includes('database')
    ) {
      return {
        text: `Here is an overview of Ansh's verified tech stack:\n\n• **Backend & APIs**: PHP (OOP & MVC), REST APIs, JWT Authentication, PDO & Prepared Statements\n• **Frontend**: JavaScript (ES6+), React.js / React 19, Vite, Tailwind CSS, Bootstrap, AJAX, HTML5, CSS3\n• **Databases**: MySQL (Relational Schema Design & Query Optimization)\n• **Animations**: GSAP, Framer Motion, Lenis Smooth Scroll\n• **Tools**: Git & GitHub, Postman, XAMPP\n\n**Also Exploring:**\n• Python *(Backend scripting & automation)*\n• Git & GitHub *(Advanced workflows)*\n• AI Tools *(AI-assisted development & prompt engineering)*`,
        quickLinks: [
          { label: "Explore Projects", action: "projects" }
        ],
        updatedContext: context
      };
    }

    // 5. PROJECTS / BEST PROJECT / E-COMMERCE / SELECTED WORK
    if (
      query.includes('best project') || 
      query.includes('favourite project') || 
      query.includes('top project') || 
      query.includes('recommend')
    ) {
      return {
        text: `Rather than claiming one single project is objectively the best, the portfolio highlights different technical strengths:\n\n• **Gen Alpha**: Decoupled React 19 SPA + custom OOP PHP REST API with JWT authentication.\n• **ShopatBMS**: Live headless e-commerce platform with customizable storefront & dynamic admin matrix.\n• **Metals Mantra**: Live production e-commerce website for metal artifacts with complete shopping & payment workflows.\n• **Tathshri**: Live production event management platform with custom CMS & media gallery.\n\n*One of the strongest projects to explore is **Gen Alpha** for full-stack SPA architecture, or **ShopatBMS / Metals Mantra** for live e-commerce.*`,
        quickLinks: [
          { label: "Explore All Projects", action: "projects" }
        ],
        updatedContext: context
      };
    }

    if (
      query.includes('e-commerce') || 
      query.includes('ecommerce') || 
      query.includes('shopping') || 
      query.includes('store')
    ) {
      return {
        text: `Ansh has delivered multiple production e-commerce solutions:\n\n1. **ShopatBMS** (Live): Headless e-commerce platform with customizable branding, dynamic admin panel, product catalog, cart, and coupon management.\n2. **Metals Mantra** (Live): Metal artifacts production store featuring category filters, cart/wishlist pipeline, order tracking, and payment processing.`,
        quickLinks: [
          { label: "Visit ShopatBMS", url: "https://www.shopatbms.com/", external: true },
          { label: "Visit Metals Mantra", url: "https://www.metalsmantra.com/", external: true }
        ],
        updatedContext: context
      };
    }

    if (
      query.includes('project') || 
      query.includes('work') || 
      query.includes('portfolio') || 
      query.includes('built')
    ) {
      return {
        text: `Ansh's portfolio features 4 key projects across full-stack web and e-commerce domains:\n\n1. **Gen Alpha** *(Ongoing)* — Decoupled React 19 SPA + OOP PHP REST API Backend & Custom CMS.\n2. **ShopatBMS** *(Live)* — Headless E-Commerce Platform with dynamic admin control panel.\n3. **Metals Mantra** *(Live • Currently Working)* — Production E-Commerce website for metal artifacts.\n4. **Tathshri** *(Live • Currently Working)* — Event management platform with custom CMS gallery.`,
        quickLinks: [
          { label: "View Projects Section", action: "projects" }
        ],
        updatedContext: context
      };
    }

    // 6. CONTACT / HIRE / EMAIL / PHONE / LINKEDIN
    if (
      query.includes('contact') || 
      query.includes('hire') || 
      query.includes('email') || 
      query.includes('phone') || 
      query.includes('call') || 
      query.includes('linkedin') || 
      query.includes('reach') || 
      query.includes('available') || 
      query.includes('location') || 
      query.includes('where')
    ) {
      return {
        text: `You can connect with Ansh directly via:\n\n• **Email**: [ansh55560@gmail.com](mailto:ansh55560@gmail.com)\n• **Phone**: [+91 90985 31316](tel:+919098531316)\n• **Location**: Thane, Maharashtra, India\n• **LinkedIn**: [linkedin.com/in/ansh-singh-thakur](https://www.linkedin.com/in/ansh-singh-thakur)\n• **GitHub**: [github.com/ansh55560-ui](https://github.com/ansh55560-ui)\n• **Status**: ${this.knowledge.profile.availabilityStatus}`,
        quickLinks: [
          { label: "Send Email", url: "mailto:ansh55560@gmail.com", external: true },
          { label: "LinkedIn Profile", url: this.knowledge.contact.linkedin, external: true }
        ],
        updatedContext: context
      };
    }

    // 7. RESUME / CV
    if (
      query.includes('resume') || 
      query.includes('cv') || 
      query.includes('download')
    ) {
      return {
        text: `You can view and download Ansh Singh's verified resume (PDF) detailing his 1 year of professional experience, projects, technical skills, and education.`,
        quickLinks: [
          { label: "View Resume (PDF)", url: this.knowledge.contact.resumeUrl, external: true }
        ],
        updatedContext: context
      };
    }

    // 8. EDUCATION & CERTIFICATIONS
    if (
      query.includes('education') || 
      query.includes('bca') || 
      query.includes('college') || 
      query.includes('degree') || 
      query.includes('university') || 
      query.includes('certification') || 
      query.includes('courses')
    ) {
      return {
        text: `**Education:**\n• **Bachelor of Computer Applications (BCA)** (2022 — 2025)\n  K.P.B. Hinduja College of Science & Commerce / Yashwantrao Chavan Maharashtra Open University\n\n**Certifications:**\n• **Web Designing & PHP Development** *(Full Stack & Web Engineering)*\n• **Node.js & React Development** *(Modern JavaScript Ecosystem)*\n• **MS-CIT** *(Information Technology Fundamentals)*`,
        quickLinks: [
          { label: "Download Resume", url: this.knowledge.contact.resumeUrl, external: true }
        ],
        updatedContext: context
      };
    }

    // 9. ALSO EXPLORING (Python, Git, AI)
    if (
      query.includes('exploring') || 
      query.includes('python') || 
      query.includes('ai') || 
      query.includes('learning')
    ) {
      return {
        text: `Beyond his core PHP and React stack, Ansh is currently exploring:\n\n• **Python**: Expanding into backend scripting, automation workflows, and computational basics.\n• **Git & GitHub**: Advanced branching strategies and collaborative CI/CD pipelines.\n• **AI Tools**: AI-assisted development, prompt engineering, and LLM integrations.`,
        quickLinks: [
          { label: "View Tech Stack", action: "stack" }
        ],
        updatedContext: context
      };
    }

    // 10. ACHIEVEMENTS & METRICS
    if (
      query.includes('achievement') || 
      query.includes('metric') || 
      query.includes('impact') || 
      query.includes('highlight')
    ) {
      return {
        text: `Key career highlights for Ansh Singh:\n\n• **3+ Live Client Websites** delivered to production.\n• **Headless E-Commerce Platform** engineered for ShopatBMS.\n• **Dynamic CMS & Admin Dashboards** built for non-technical stakeholders.\n• **Payment Gateways** (Razorpay) and multi-channel **OTP Verification** implemented in production.`,
        quickLinks: [
          { label: "Explore Projects", action: "projects" }
        ],
        updatedContext: context
      };
    }

    // 11. GREETINGS & CASUAL
    if (
      query === 'hi' || 
      query === 'hello' || 
      query === 'hey' || 
      query.startsWith('hi ') || 
      query.startsWith('hello ') ||
      query === 'good morning' ||
      query === 'good evening'
    ) {
      return {
        text: `Hello! I'm **Ansh AI** 👋\n\nI can help you explore Ansh's background, technical skills, production projects, and professional experience. What would you like to know?`,
        quickLinks: [
          { label: "Who is Ansh?", action: "who-is-ansh" },
          { label: "View Tech Stack", action: "stack" },
          { label: "Explore Projects", action: "projects" }
        ],
        updatedContext: context
      };
    }

    // 12. STRICT FALLBACK (Zero Hallucination)
    return {
      text: `I don't have that specific information in my portfolio data.\n\nI can answer anything about Ansh's **1 year of experience at Clock Softwares**, **tech stack** (PHP, MySQL, React, JavaScript), **projects** (*Gen Alpha, ShopatBMS, Metals Mantra, Tathshri*), **education**, or **contact information**.`,
      quickLinks: [
        { label: "About Ansh", action: "who-is-ansh" },
        { label: "View Projects", action: "projects" },
        { label: "Contact Ansh", action: "contact" }
      ],
      updatedContext: context
    };
  }

  /**
   * Placeholder for external AI provider integration (OpenAI, Gemini, Anthropic, or custom proxy endpoint)
   */
  async _callExternalAI(userMessage, history, sessionContext) {
    // Example secure server proxy call:
    // const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: userMessage, history, context: sessionContext }) });
    // return await res.json();
    return this._localKnowledgeResponse(userMessage, history, sessionContext);
  }
}

export const aiService = new AIService();
