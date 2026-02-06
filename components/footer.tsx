import Link from "next/link"
import { Github, Linkedin, BookOpen, FlaskConical } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ali Akbar. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/WarDaddy146"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-akbar-7a1565274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.orcid.org/0009-0006-2110-9111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <BookOpen className="h-5 w-5" />
            <span className="sr-only">ORCID</span>
          </Link>
          <Link
            href="https://www.researchgate.net/profile/Ali-Akbar-118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FlaskConical className="h-5 w-5" />
            <span className="sr-only">ResearchGate</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
