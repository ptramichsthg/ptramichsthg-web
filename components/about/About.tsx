"use client"

import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import DownloadCV from "./DownloadCV"
import AnimateBadges from "./AnimateBadges"
import { useLanguage } from "../providers/LanguageProvider"

export default function About() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className="relative mb-10 flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={t.about.title}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-base text-justify">
            <AnimateParagraph
              paragraph={t.about.paragraph1}
              delay={1.5}
            />
            <AnimateParagraph
              paragraph={t.about.paragraph2}
              delay={1.8}
            />
            <AnimateParagraph
              paragraph={t.about.paragraph3}
              delay={2}
            />
            <AnimateParagraph
              paragraph={t.about.paragraph4}
              delay={2.2}
            />
            <DownloadCV />
          </div>

          <div className="mb-10 flex w-full flex-col gap-6 leading-relaxed tracking-wide md:mb-16 md:gap-8 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.programmingLanguages} delay={0.5} />
              <AnimateBadges
                skills={[
                  { name: "HTML5", icon: "html5" },
                  { name: "CSS3", icon: "css" },
                  { name: "JavaScript", icon: "javascript" },
                  { name: "TypeScript", icon: "typescript" },
                  { name: "React.js", icon: "react" },
                  { name: "Next.js", icon: "nextdotjs" },
                  { name: "Vue.js", icon: "vuedotjs" },
                  { name: "Tailwind CSS", icon: "tailwindcss" },
                  { name: "Framer Motion", icon: "framer" },
                  { name: "Vite", icon: "vite" }
                ]}
                delay={0.8}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.databasesArchitecture} delay={1} />
              <AnimateBadges
                skills={[
                  { name: "Laravel", icon: "laravel" },
                  { name: "PHP", icon: "php" },
                  { name: "Python", icon: "python" },
                  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                  { name: "Android Native", icon: "android" }
                ]}
                delay={1.3}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.databaseTools} delay={1.5} />
              <AnimateBadges
                skills={[
                  { name: "MySQL", icon: "mysql" },
                  { name: "Supabase", icon: "supabase" },
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "Git", icon: "git" },
                  { name: "Github", icon: "github" },
                  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
                  { name: "Android Studio", icon: "androidstudio" }
                ]}
                delay={1.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
