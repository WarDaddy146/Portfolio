import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import resumeData from "@/data/resume-data"

export const metadata = {
  title: "Contact",
  description: `Get in touch with Ali Akbar for opportunities, collaborations, or just to say hello.`,
}

export default function ContactPage() {
  // Ensure we have the personal info data with fallbacks
  const email = resumeData?.personalInfo?.email || "aliakbarnashit146@gmail.com"
  const location = resumeData?.personalInfo?.location || "India"
  const github = resumeData?.personalInfo?.github || "https://github.com/WarDaddy146"
  const linkedin = resumeData?.personalInfo?.linkedin || "https://www.linkedin.com/in/ali-akbar-7a1565274/"
  const researchgate = resumeData?.personalInfo?.researchgate
  const orcid = resumeData?.personalInfo?.orcid

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch for opportunities, collaborations, or just to say hello
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-white mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${email}`} className="text-zinc-400 hover:text-white">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-zinc-400">{location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Link>
                {researchgate && (
                  <Link
                    href={researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.366 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.401 0 0 1 .014-.938 15.821 15.821 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.554.484.693.927.032.1.05.235.088.465.037.23.055.654.055 1.274v.156c0 .094.047.14.14.14h1.812c.094 0 .14-.046.14-.14v-.222c0-.643-.012-1.14-.037-1.49a4.674 4.674 0 0 0-.138-.98 3.5 3.5 0 0 0-.354-.928 2.452 2.452 0 0 0-.651-.747 3.085 3.085 0 0 0-1.024-.476 5.1 5.1 0 0 0-1.411-.174z"/>
                    </svg>
                    ResearchGate
                  </Link>
                )}
                {orcid && (
                  <Link
                    href={orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 5.378c.525 0 .947.431.947.947a.95.95 0 0 1-.947.947.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V8.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V8.416zm1.444 1.303v7.444h2.297c2.359 0 3.978-1.303 3.978-3.722 0-2.203-1.303-3.722-3.978-3.722h-2.297z"/>
                    </svg>
                    ORCID
                  </Link>
                )}
                <Link
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
