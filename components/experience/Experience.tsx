"use client"

import { experiences, education } from "@/lib/experienceData"
import { useLanguage } from "../providers/LanguageProvider"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Briefcase, MapPin, Calendar, GraduationCap } from "lucide-react"

export default function Experience() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  }

  return (
    <section
      id="experience"
      className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] mt-24"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={containerVariants}
        className="w-full"
      >
        <div className="mb-12 flex flex-col items-start w-full">
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-4xl md:text-6xl font-bold text-foreground">
            <Briefcase className="h-10 w-10 md:h-12 md:w-12 text-foreground/80" />
            <h2>{t.experience.title}</h2>
          </motion.div>
        </div>

        <div className="relative border-l border-foreground/20 ml-4 md:ml-6 space-y-12 pb-16">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-foreground outline outline-4 outline-zinc-100 dark:outline-zinc-900"></div>
              
              <div className="flex flex-col gap-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.experience[`role${exp.id}` as keyof typeof t.experience]}</h3>
                <h4 className="text-lg md:text-xl font-semibold text-foreground/70">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/50 mt-1 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.date.includes("Present") || exp.date.includes("Sekarang") ? exp.date.split(" ")[0] + " - " + t.experience.present : exp.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-4xl text-justify">
                  {t.experience[`desc${exp.id}` as keyof typeof t.experience]}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
                  {exp.tech.map((techItem, i) => (
                    <span key={i} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-semibold text-foreground/80">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-12 mt-16 flex flex-col items-start w-full">
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-4xl md:text-6xl font-bold text-foreground">
            <GraduationCap className="h-10 w-10 md:h-12 md:w-12 text-foreground/80" />
            <h2>{t.experience.education}</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-4xl">
            {t.experience.educationIntro}
          </motion.p>
        </div>

        <div className="relative border-l border-foreground/20 ml-4 md:ml-6 space-y-12 pb-16">
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-foreground outline outline-4 outline-zinc-100 dark:outline-zinc-900"></div>
              
              <div className="flex flex-col gap-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.experience[`edu${edu.id}Role` as keyof typeof t.experience]}</h3>
                <h4 className="text-lg md:text-xl font-semibold text-foreground/70">{t.experience[`edu${edu.id}Company` as keyof typeof t.experience]}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/50 mt-1 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.date.includes("Present") || edu.date.includes("Sekarang") ? edu.date.split(" ")[0] + " - " + t.experience.present : edu.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-4xl text-justify">
                  {t.experience[`edu${edu.id}Desc` as keyof typeof t.experience]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
