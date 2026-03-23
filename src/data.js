const DATA = {
  name: "Guru Prasad G S",
  role: "Full-Stack Software Engineer",
  taglines: ["JSF / PrimeFaces Developer", "Drools & Rules Engine Expert", "React JS Enthusiast", "Insurance Domain Specialist"],
  summary: "Software Engineer with 3+ years of experience designing and implementing enterprise-grade web applications. Proficient in client-side scripting (JSF, React) and back-end development with Java, Drools, and MySQL. Passionate about clean code, performance, and continuous learning.",
  email: "gurup9300@gmail.com",
  phone: "+91-9087653093",
  linkedin: "https://linkedin.com/in/guru-prasad-8b672615b",
  github: "https://github.com/gurup9300",
  location: "Madurai, Tamil Nadu, India",
  skills: [
    {
      category: "Frontend",
      icon: "🖥️",
      items: ["HTML5", "CSS3", "JavaScript", "React JS", "JSF PrimeFaces", "Bootstrap", "Redux"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Java", "RESTful APIs", "Drools (Rules Engine)", "JSF Managed Beans"]
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["MySQL", "Query Optimization", "Indexing", "Stored Procedures"]
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      items: ["Git", "GitLab", "Jenkins", "CI/CD", "JIRA", "Bugzilla"]
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Solartis Technology Services Pvt Ltd",
      period: "Sept 2023 – Present",
      points: [
        "Developed and maintained a production insurance web application serving thousands of users with JSF PrimeFaces.",
        "Drove CI/CD pipeline ownership for controlled, quality-focused feature releases via Jenkins.",
        "Delivered a high-priority specification within a critical deadline, maintaining full quality standards.",
        "Led cross-functional collaboration for a successful PrimeFaces version upgrade, boosting performance.",
      ],
      stack: ["JSF PrimeFaces", "Drools", "MySQL", "JavaScript", "RESTful API"]
    },
    {
      role: "Associate Software Engineer",
      company: "Solartis Technology Services Pvt Ltd",
      period: "Sept 2022 – Sept 2023",
      points: [
        "Implemented responsive design patterns ensuring optimal UX across all device breakpoints.",
        "Built robust MySQL queries with indexing strategies that significantly improved data fetch performance.",
        "Executed comprehensive test plans post-deployment, ensuring zero critical bugs in production.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "React JS", "JSF PrimeFaces", "MySQL"]
    }
  ],
  projects: [
    {
      title: "Product Management Tool (PMT)",
      desc: "Enterprise-grade configuration platform for managing insurance product offerings within the Solartis PAS platform. Enables business analysts and IT administrators to define pricing, rules, notification templates, and algorithms.",
      points: [
        "Multi-role collaboration: business analysts, IT teams, Solartis admins, and monitoring teams.",
        "Configures product definitions, pricing structures, Drools rules, and notification templates.",
        "Seamless deployment within the Solartis Policy Administration System (PAS).",
      ],
      stack: ["React JS", "JSF PrimeFaces", "Drools", "MySQL", "RESTful API", "HTML5", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Copy Company Feature",
      desc: "A background-processing module enabling insurers to clone company subline configurations. Features async job tracking, status polling, and a PrimeFaces-based progress UI with dynamic row management.",
      points: [
        "Resolved 504 timeout issues by separating navigation from long-running service calls.",
        "Implemented poll-driven p:remoteCommand pattern for real-time status updates.",
        "Built MySQL lock-safe aggregate queries to prevent lock timeout errors (Error 1205).",
      ],
      stack: ["JSF PrimeFaces", "Java", "Drools", "MySQL", "JavaScript"],
      github: "#",
      demo: "#"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering — Mechanical Engineering",
      school: "K.L.N College Of Engineering",
      period: "2017 – 2021",
      score: "CGPA: 8.17"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Fusco's Mat. Hr. Sec. School",
      period: "2016 – 2017",
      score: "81.4%"
    }
  ],
  certifications: [
    { title: "Core Java", issuer: "Elysium Academy Pvt. Ltd.", date: "Aug 2022" }
  ]
};

export default DATA;