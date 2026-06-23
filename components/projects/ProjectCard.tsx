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
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
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
      className="relative z-10 flex flex-col lg:flex-row min-h-[400px] w-full overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800"
    >
      {/* Text Section */}
      <div className={cn("relative flex flex-col justify-center p-6 md:p-8 lg:p-10", image === "" ? "w-full" : "w-full lg:w-1/2 order-2 lg:order-1")}>
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardLinksAnimation}
          aria-hidden="true"
          className="mb-8 flex items-center justify-start gap-4"
        >
          <Link
            href={repo}
            target="_blank"
            className="rounded-full bg-foreground p-3 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-foreground/80"
            aria-label="Open Github Repo"
          >
            <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
          </Link>
          <Link
            href={projectLink}
            target="_blank"
            className="rounded-full bg-foreground p-3 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-foreground/80"
            aria-label="Open Live Demo"
          >
            <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
          </Link>
        </motion.div>

        <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl lg:leading-tight">
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
        
        <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/60 md:text-base lg:text-lg">
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
          className="mt-8 flex flex-wrap gap-x-3 gap-y-3 lg:mt-10"
        >
          {tech.map((tech, index) => (
            <p
              key={index}
              className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-semibold text-foreground/80 md:text-sm"
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
