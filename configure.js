// Shared CV data — edit this file to populate all themes
const CV_DATA = {
  name: "John Doe",
  title: "Senior Software Engineer",
  image: { src: "", alt: "Photo", position: "sidebar" },
  contact: [
    { icon: "📧", text: "john.doe@email.com", href: "mailto:john.doe@email.com" },
    { icon: "📱", text: "+1 234 567 890" },
    { icon: "🔗", text: "linkedin.com/in/johndoe", href: "https://linkedin.com/in/johndoe" },
    { icon: "🌐", text: "johndoe.dev", href: "https://johndoe.dev" },
    { icon: "📍", text: "San Francisco, CA" }
  ],
  summary: "Experienced software engineer with 8+ years building scalable web applications and distributed systems. Passionate about clean architecture, developer experience, and mentoring teams. Proven track record of delivering high-impact products in fast-paced environments.",
  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"], levels: [95, 90, 80, 65, 75] },
    { group: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"], levels: [90, 85, 70, 80, 95] },
    { group: "Backend", items: ["Node.js", "Express", "FastAPI", "GraphQL", "REST"], levels: [90, 85, 70, 75, 90] },
    { group: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"], levels: [80, 85, 70, 80, 65] },
    { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"], levels: [85, 80, 75, 65] }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TechCorp Inc.",
      date: "Jan 2022 — Present",
      bullets: [
        "Led migration of monolithic application to microservices, reducing deployment time by 70%",
        "Designed and implemented real-time data pipeline processing 2M+ events/day",
        "Mentored team of 5 junior developers, establishing code review practices and documentation standards",
        "Reduced infrastructure costs by 40% through optimization of cloud resource allocation"
      ]
    },
    {
      role: "Software Engineer",
      company: "StartupXYZ",
      date: "Mar 2019 — Dec 2021",
      bullets: [
        "Built customer-facing dashboard with React and GraphQL serving 50K+ daily active users",
        "Implemented automated testing pipeline achieving 95% code coverage",
        "Developed RESTful APIs handling 10K+ requests per second with sub-100ms latency",
        "Collaborated with product team to define technical roadmap and sprint planning"
      ]
    },
    {
      role: "Junior Developer",
      company: "WebAgency Co.",
      date: "Jun 2017 — Feb 2019",
      bullets: [
        "Developed responsive web applications for 15+ clients across various industries",
        "Introduced component-based architecture reducing development time by 30%",
        "Maintained and improved legacy PHP applications while planning migration to modern stack"
      ]
    }
  ],
  projects: [
    { name: "OpenTaskBoard", description: "Open-source Kanban board with real-time collaboration, used by 2K+ teams", tech: "React, Node.js, WebSockets, PostgreSQL" },
    { name: "DevMetrics CLI", description: "Command-line tool for tracking developer productivity metrics across repositories", tech: "Go, GitHub API, SQLite" },
    { name: "CloudDeploy", description: "One-click deployment tool for containerized applications to multiple cloud providers", tech: "Python, Docker SDK, AWS/GCP APIs" }
  ],
  education: [
    { degree: "B.Sc. Computer Science", school: "University of California, Berkeley", date: "2013 — 2017", detail: "GPA 3.8/4.0 — Dean's List" }
  ],
  certifications: [
    { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", date: "2023" },
    { name: "Certified Kubernetes Administrator", issuer: "CNCF", date: "2022" }
  ],
  languages: [
    { lang: "English", level: "Native" },
    { lang: "Spanish", level: "Conversational" },
    { lang: "French", level: "Basic" }
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
