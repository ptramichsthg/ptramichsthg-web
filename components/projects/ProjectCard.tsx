import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  compact?: boolean
  badge?: string
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  compact = false,
  badge,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className={cn("relative z-10 flex flex-col lg:flex-row w-full overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-1", compact ? "h-full" : "min-h-[300px] md:min-h-[400px]")}
    >
      {/* Text Section */}
      <div className={cn("relative flex flex-col", compact ? "p-6 w-full h-full" : "p-6 md:p-8 lg:p-10 w-full justify-center order-2 lg:order-1", image && image !== "" ? "lg:w-1/2" : "lg:w-full")}>
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardLinksAnimation}
          aria-hidden="true"
          className={cn("flex items-center justify-start gap-3", compact ? "mb-6" : "mb-8")}
        >
          <Link
            href={repo}
            target="_blank"
            className={cn("rounded-full bg-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-foreground/80", compact ? "p-2" : "p-3")}
            aria-label="Open Github Repo"
          >
            <GithubIcon className={cn("text-zinc-100 dark:text-zinc-800", compact ? "h-5 w-5" : "h-6 w-6")} />
          </Link>
          <Link
            href={projectLink}
            target="_blank"
            className={cn("rounded-full bg-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-foreground/80", compact ? "p-2" : "p-3")}
            aria-label="Open Live Demo"
          >
            <LinkIcon className={cn("text-zinc-100 dark:text-zinc-800", compact ? "h-5 w-5" : "h-6 w-6")} />
          </Link>
        </motion.div>

        {badge && (
          <motion.div
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            className="mb-3"
          >
            <span className={cn(
              "inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
              badge.toLowerCase() === "freelance" 
                ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30" 
                : badge.toLowerCase() === "bootcamp"
                ? "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30"
                : "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
            )}>
              {badge}
            </span>
          </motion.div>
        )}

        <h3 className={cn("font-bold leading-tight text-foreground", compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl lg:text-4xl lg:leading-tight")}>
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            aria-hidden="true"
            className="block"
          >
            {title}
          </motion.span>
        </h3>
        
        <p className={cn("mt-4 font-medium leading-relaxed text-foreground/60 text-justify", compact ? "text-sm flex-1" : "text-sm md:text-base lg:text-lg lg:w-[80%]")}>
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardDescriptionAnimation}
            aria-hidden="true"
            className="block"
          >
            {description}
          </motion.span>
        </p>
        
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardTechAnimation}
          aria-hidden="true"
          className={cn("flex flex-wrap gap-x-2 gap-y-2", compact ? "mt-6" : "mt-8 lg:mt-10")}
        >
          {tech.map((tech, index) => (
            <p
              key={index}
              className={cn("rounded-full border border-foreground/10 bg-foreground/5 font-semibold text-foreground/80", compact ? "px-3 py-1 text-[10px] md:text-xs" : "px-4 py-1.5 text-xs md:text-sm")}
            >
              {tech}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Image Section */}
      {image && image !== "" && (
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardImageAnimation}
          aria-hidden="true"
          className="relative w-full min-h-[200px] sm:min-h-[250px] lg:w-1/2 lg:min-h-full order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-foreground/10"
        >
          {image === "placeholder" ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800">
              <span className="rounded-full bg-zinc-200/50 px-6 py-2 text-sm font-bold uppercase tracking-widest text-zinc-600 backdrop-blur-sm dark:bg-zinc-900/50 dark:text-zinc-300">
                Screenshot Coming Soon
              </span>
            </div>
          ) : (
            <Image
              fill
              src={image}
              alt={title}
              className="object-cover object-center"
            />
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
