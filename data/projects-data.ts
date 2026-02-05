export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
}

const projects: Project[] = [
  // {
  //   id: 4,
  //   title: "AI Cursor Init",
  //   description:
  //     "The AI-powered documentation framework that lives inside your IDE. Generate Architecture Decision Records, system diagrams, and onboarding guides with simple slash commands.",
  //   image:
  //     "https://github.com/mgiovani/ai-cursor-init/raw/main/images/system-architecture-example.png",
  //   tags: ["AI", "Documentation", "IDE", "Framework"],
  //   github: "https://github.com/mgiovani/ai-cursor-init/",
  //   demo: "https://github.com/mgiovani/ai-cursor-init/?tab=readme-ov-file#-visual-showcase",
  // },
  {
    id: 1,
    title: "Melt and Munch - E-Comerce Platform",
    description: "A simple E-Commerce platform for confectionaries.",
    image:
      "/home/ali/Downloads/giovani-dev-portfolio-website/public/images/mnm_logo.png",
    tags: ["Python", "Django ORM", "WebDevelopment"],
    github: "https://github.com/mgiovani/my-instants-discord-bot",
    demo: null
  },
  {
    id: 2,
    title: "Introductory Quantum Circuits using Qiskit",
    description: "A simple 2 Qubit system implementing basic quantum gates.",
    image:
      "https://camo.githubusercontent.com/1b6684c7c3ad58073423a154fa0709eb215c096fec5aa32b6a430240aaa7ce55/68747470733a2f2f692e696d6775722e636f6d2f733134694f54392e706e67",
    tags: ["Python", "Qiskit", "IBM Quantum"],
    github: "https://github.com/mgiovani/base16-whatsapp",
    demo: null,
  },
  {
    id: 3,
    title: "Automated Daily News Summariser with RSS Feeds",
    description:
      "An n8n workflow that fetches news from various RSS feeds, summarises the content using Gemini Models, and emails the summaries to subscribers.",
    image: null,
    tags: ["n8n", "RSS Feeds", "JSON"],
    github: "https://github.com/",
    demo: null,
  },
]

export const featuredProjects = [projects[0], projects[1], projects[2]]

export default {
  projects,
  featuredProjects,
}
