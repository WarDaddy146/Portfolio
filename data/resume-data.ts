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
  }
  summary: string[]
  skills: {
    languages: string[]
    data: string[]
  }
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
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
    website: "https://aliakbar146.com",
    photo: "/images/profile.png",
  },
  summary: ["A young mind in training."],
  skills: {
    languages: ["Python", "Qiskit", "Django ORM", "HTML", "CSS", ""],
    data: ["SQLite", "MySQL" ],

  },
  // experience: [
  //   {
  //     title: "AI/ML Engineer",
  //     company: "Prenuvo",
  //     period: "Jan 2023 - Present",
  //     location: "Remote, United States",
  //     responsibilities: [
  //       "Implemented performance enhancements that cut response times by 25% through optimized database access and resource management.",
  //       "Designed and built backend support for AI-powered tools used by radiologists, boosting workflow efficiency.",
  //       "Created and rolled out a self-service discount system, giving Sales fine-grained control over promotions.",
  //       "Led an external-service integration that improved operational efficiency and contributed to seasonal revenue gains.",
  //     ]
  //   },
  // ],
  hardSkills: [
    "Python",
    "Django ORM",
    "Qiskit",
    "Workflow Automation",
    ""
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
