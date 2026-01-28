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
    website: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
  }
  summary: string[]
  skills: {
    languages: string[]
    architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
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
    website: "https://aliakbar146.com",
    photo: "/images/profile.png",
    yearsOfExperience: "Constantly learning",
    teamLeadExperience: "adaptable.",
  },
  summary: ["A young mind in training."],
  skills: {
    languages: ["Python", "Qiskit", "Django REST"],
    architecture: ["Django ORM", "Qiskit", "n8n Workflows"],
    cloud: ["Colab", "GitHub", "IBM Quantum Library"],
    data: ["SQLite", "MySQL", ],

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
    "FastAPI",
    "Django REST",
    "Qiskit",
    "Workflow Automation"
  ],
  softSkills: [
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
    "Communication",
  ],
  languages: [
    {
      name: "English",
      level: "Native Proficiency",
      
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
      title: "Revolutioninzing Evolutionary Computation with Quantum-Inspired Algorithms",
      description: "A comprehensive study on the integration of quantum-inspired algorithms into evolutionary computation to enhance optimization processes.",
      year: "2024",
    },
    // {
    //   title: "Estudos de Técnicas de Mineração de Dados Aplicadas em Ambientes Sistematizados de Bibliotecas",
    //   description: "A study on data mining techniques applied to systematized library environments.",
    //   year: "2018",
    // },
    // {
    //   title: "Carros de Combate na Selva: Utilização de VBCCCs no Teatro de Operações da Amazônia",
    //   description: "A publication on combat vehicles in jungle environments, focusing on operations in the Amazon.",
    //   year: "2017",
    // },
  ],
}

export default resumeData
