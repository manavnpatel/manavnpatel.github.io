export const siteConfig = {
  name: "Manav Patel",
  title: "Aspiring Data Scientist",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "manavnpatel0@gmail.com",
    linkedin: "https://linkedin.com/in/manavnpatel",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/manavnpatel",
  },
  aboutMe:
    "As an aspiring data scientist and current M.S. Analytics student at Georgia Tech, I enjoy uncovering patterns in data and applying statistical and predictive modeling techniques to solve real-world problems. My goal is to bridge analytics and strategy to create meaningful impact across industries!",
  skills: ["Python", "R", "Tableau", "SQL", "Statistics", "Modeling"],
  projects: [
    {
      name: "Recipe Recommender",
      description:
        "Project Currently In Progress: Create a tool that suggests personalized recipes based on the ingredients a user has at home",
      link: "",
      skills: ["Data Wrangling", "Recommender Algorithms", "Text Processing", "Pandas", "NumPy"],
    },
    {
      name: "Inequitable Urban Greenery: Addressing Environmental Disparities in NYC (CX 4242)",
      description:
        "Analyzed ~700,000 NYC tree records and ~2,000 census tracts using SQL, Python (Decision Trees, K-means), and an interactive choropleth map to uncover environmental inequities in tree health and distribution across socioeconomic groups, providing actionable insights for sustainable urban planning.",
      link: "https://www.youtube.com/watch?v=ita8fCkWcYQ",
      skills: ["Python", "SQL", "D3.js", "Data Wrangling", "Predictive Visualization", "Data Visualization"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "SQL", "D3.js", "Data Wrangling", "Predictive Visualization", "Data Visualization"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
