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
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
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
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-base">
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
                skills={["HTML5", "CSS3", "Java", "JavaScript", "PHP"]}
                delay={0.8}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.databasesArchitecture} delay={1} />
              <AnimateBadges
                skills={["MySQL", "PostgreSQL", "Relational Database Design", "MVC Architecture", "RESTful API"]}
                delay={1.3}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.frameworksLibraries} delay={1.5} />
              <AnimateBadges
                skills={["Laravel", "Vue.js", "React.js", "Next.js"]}
                delay={1.8}
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title={t.about.toolsIntegrations} delay={2} />
              <AnimateBadges
                skills={["Git", "GitHub", "Postman", "Midtrans Payment Gateway", "Google Authentication (OAuth)"]}
                delay={2.3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
