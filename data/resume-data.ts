export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Publication = {
  title: string
  description: string
  year: string
  link?: string
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    location: string
    linkedin: string
    github: string | null
    researchgate: string | null
    orcid: string | null
    website: string
    photo?: string
    yearsOfExperience?: string
    teamLeadExperience?: string
  }
  summary: string[]
  skills: {
    languages: string[]
    data: string[]
    architecture?: string[]
    cloud?: string[]
  }
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
  experience?: WorkExperience[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Ali Akbar",
    title: "AI/ML Engineer",
    email: "aliakbarnashit146@gmail.com",
    location: "India",
    linkedin: "https://www.linkedin.com/in/ali-akbar-7a1565274/",
    github: "https://github.com/WarDaddy146/",
    researchgate: "https://www.researchgate.net/profile/Ali-Akbar-118",
    orcid: "https://orcid.org/0009-0006-2110-9111",
    website: "https://aliakbar.dev",
    photo: "/images/profile.png",
    yearsOfExperience: "Early career",
    teamLeadExperience: "Developing leadership skills",
  },
  summary: ["I'm a Computer Science Engineering student who learns by building and solving problems hands-on. My curiosity about how things work, from code to larger systems, drives me to explore different areas of technology. I adapt quickly, whether picking up new frameworks, automating tasks, or working on research projects. My background in diversified fields helps me approach challenges from different angles. I focus on understanding fundamentals and achieving optimal solutions."],
  skills: {
    languages: ["Python", "Qiskit", "Arduino IDE", "HTML", "CSS"],
    data: ["SQLite", "MySQL"],
    architecture: ["Django ORM", "Web Applications", "2 Qubit Systems"],
    cloud: ["Git", "GitHub", "VS Code", "n8n", "Jupyter Notebook", "Google Colab", "Linux (Ubuntu)"],
  },
  experience: [],
  hardSkills: [
    "Python",
    "Django ORM",
    "Qiskit",
    "Workflow Automation",
  ],
  softSkills: [
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
    "Communication",
  ],
  languages: [
    {
      name: "Hindi/Urdu",
      level: "C2 Proficiency",
      
    },
    {
      name: "English",
      level: "C2 Proficiency",
      
    },
    {
      name: "Deutsch",
      level: "A2 Proficiency",
      
    },
    {
      name: "Russian",
      level: "A1 Proficiency",
      
    }
  ],
  publications: [
    
    {
      title: "Evolutionary Computation: Potential and Limitations",
      description: "A study on the Evolutionary computation and it's potentials in the modern computing trends.",
      year: "2025",
    },
    {
      title: "Revolutioninzing Evolutionary Computation with Quantum-Inspired Algorithms",
      description: "A comprehensive study on the potential integration of Evolutionary computation into hybrid computing models.",
      year: "2024",
    },
    {
      title: "Inflationary Model as an Alternative to the Big Bang Theory: A Comprehensive Review",
      description: "A study on the Origin of the Cosmos with the Inflationary model.",
      year: "Draft upon request",
    }
  ],
}

export default resumeData
