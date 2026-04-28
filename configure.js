// Shared CV data — edit this file to populate all themes
const CV_DATA = {
  name: "Trinh Quoc Khanh",
  title: "Senior Engineer",
  image: { src: "image.jpg", alt: "Trinh Quoc Khanh", position: "sidebar" },
  contact: [
    { icon: "📧", text: "trinhquockhanh20121999@gmail.com", href: "mailto:trinhquockhanh20121999@gmail.com" },
    { icon: "📱", text: "+84 339 271 913" },
    { icon: "🔗", text: "linkedin.com/in/khánh-trịnh-7b257a249", href: "https://www.linkedin.com/in/khánh-trịnh-7b257a249" },
    { icon: "📍", text: "298 Dê La Thành, phường Văn Miếu" }
  ],
  summary: "Software Engineer with 5 years of experience in automotive and embedded solution. Skilled in C/C++ and Python, with good knowledge of algorithms, data structures, and Unix operating systems. Experienced in agile development and the Scrum framework, helping teams work together and finish tasks on time. Good communication skills, with experience working and discussing technical issues with Korean partners to solve problems and meet project goals.",
  skills: [
    { group: "Languages", items: ["C", "C++", "Python"], levels: [80, 80, 40] },
    { group: "Algorithms", items: ["Sorting", "Searching", "DP", "Backtracking", "DFS-BFS"], levels: [80, 80, 60, 60, 60] },
    { group: "Data Structures", items: ["Stack", "Queue", "Vector", "Tree", "Hash"], levels: [80, 80, 60, 60, 60] },
    { group: "Tools & Platforms", items: ["Git", "Renode", "Vscode"], levels: [60, 20, 80] },
    { group: "Operating Systems", items: ["Theory", "Linux", "RTOS"], levels: [60, 40, 20] },
  ],
  experience: [
    {
      role: "Research Engineer — Automotive Software",
      company: "LG Electronics Development Vietnam",
      date: "Jan 2022 — Feb 2024",
      bullets: [
        "Developed middleware applications on Yocto-based Linux: Hardware Manager (device testing with Windows app), System Manager (CPU/memory monitoring), and Task Manager (application lifecycle management)",
        "Documented Software Detail Description (SDD) and Software Unit Test Cases (SWUTC) for all middleware components, ensuring comprehensive test coverage and traceability",
        "Implemented unit tests using Google Test framework, achieving 100% code coverage",
        "Built a Python script to auto-generate the SDD and SWUTC documents, reducing test creation time by 99%"
      ]
    },
    {
      role: "Senior Engineer — Embedded Solution",
      company: "LG Electronics Development Vietnam",
      date: "Feb 2024 — Dec 2025",
      bullets: [
        "Developed Software-in-the-Loop (SIL) test environment for validating the RTOS applications",
        "Collaborated with cross-functional teams to identify and resolve RTOS application issues, improving system stability and performance",
        "Created fake IO data layer to support DSL team in developing and debugging Domain-Specific Language for RTOS",
      ]
    },
    {
      role: "Senior Engineer — Embedded Solution",
      company: "LG Electronics Development Vietnam",
      date: "Dec 2024 — Present",
      bullets: [
        "Developed console+ (internal tool) for developers: coredump error tracking, log filtering with color highlighting, and memory usage monitoring via charts",
        "Custom scripting language to automate the testing process, improving developer productivity",
        "Integrated console+ into CI/CD pipeline, automating testing and improving development workflow efficiency",
      ]
    },
    {
      role: "Senior Engineer — Embedded Solution",
      company: "LG Electronics Development Vietnam",
      date: "Feb 2026 — Present",
      bullets: [
        "Used Renode to emulate hardware for testing, reducing reliance on physical hardware",
        "Expanded Renode framework emulation across multiple hardware models, enabling comprehensive RTOS testing and debugging in simulated environments"
      ]
    }
  ],
  projects: [
    { name: "Middleware Platform (Yocto/Linux)", description: "Developed a suite of middleware services (Hardware Manager, System Manager, Task Manager) on embedded Linux, with full unit test coverage and automated test-case generation from SDD", tech: "C++, Python, Google Test, Yocto, Linux" },
    { name: "SIL Test Environment for RTOS", description: "Built a Software-in-the-Loop simulation to validate RTOS applications and support DSL debugging without physical devices", tech: "C/C++, RTOS" },
    { name: "Console+ Developer Tool", description: "Created an internal developer tool for coredump tracking, log filtering with color highlighting, real-time memory usage visualization and a custom domain-specific scripting language (DSL) to automate testing workflows; integrated into CI/CD pipeline", tech: "Python, TypeScript" },
    { name: "Renode", description: "Used Renode to emulate hardware for testing, reducing reliance on physical hardware and enabling comprehensive RTOS testing and debugging in simulated environments. Collaborate with DSL of Console+ to create a complete automated testing solutions", tech: "Python, Renode" },
  ],
  education: [
    {
      degree: "Bachelor of Automobile Engineering",
      school: "University of Transport and Communications",
      date: "2017 — 2021",
      detail: "GPA: 2.27/4.0"
    }
  ],
  certifications: [
    { name: "Certified Software Programming Competency", issuer: "LG Electronics Development Vietnam", date: "2023" },
    { name: "2nd prize in the EIP (Effective Improvement Program) competition", issuer: "LG Electronics Development Vietnam", date: "2025" },
    { name: "\'A\' evaluation in 2025 year-end performance review (\'B\' is meet expectations)", issuer: "LG Electronics Development Vietnam", date: "2025" }
  ],
  languages: [
    { lang: "Vietnamese", level: "Native" },
    { lang: "English", level: "Intermediate" },
  ],
  layout: {
    pages: [
      {
        sidebar: ["skills", "certifications", "languages"],
        main: ["summary", "experience", "projects", "education"]
      }
    ]
  }
};
