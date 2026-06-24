"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export type SkillItem = string | { name: string; icon: string };

interface AnimateBadgesProps {
  skills: SkillItem[]
  delay?: number
}

export default function AnimateBadges({ skills, delay = 1 }: AnimateBadgesProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={ctrls}
      className="flex flex-wrap gap-2"
    >
      {skills.map((skill, index) => {
        const isObject = typeof skill === "object"
        const name = isObject ? skill.name : skill
        const iconSlug = isObject ? skill.icon : null
        
        return (
          <motion.span
            key={index}
            variants={item}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100/50 px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 shadow-sm transition-all hover:bg-zinc-200 hover:scale-105 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-700 sm:text-sm"
          >
            {iconSlug && (
              <img 
                src={iconSlug.startsWith('http') ? iconSlug : `https://cdn.simpleicons.org/${iconSlug}`} 
                alt={`${name} icon`} 
                className="w-4 h-4" 
              />
            )}
            {name}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
