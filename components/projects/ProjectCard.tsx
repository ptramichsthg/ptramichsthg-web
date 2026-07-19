"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Globe } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  compact?: boolean
  badge?: string
  category?: string
  tech: string[]
  repo: string
  projectLink: string
}

// Tech Icon Map
const techIconMap: Record<string, string> = {
  "react": "react", "react.js": "react", "typescript": "typescript", "python": "python", "fastapi": "fastapi",
  "laravel": "laravel", "vue.js": "vuedotjs", "tailwind css": "tailwindcss", "tailwind": "tailwindcss", "mysql": "mysql",
  "vite": "vite", "html5": "html5", "css3": "css", "aws s3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "javascript": "javascript", "swiper.js": "swiper", "php": "php", "bootstrap 5": "bootstrap", "bootstrap": "bootstrap",
  "fontawesome": "fontawesome", "node.js": "nodedotjs", "java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "apache ant": "apacheant", "supabase": "supabase", "docker": "docker", "ffmpeg": "ffmpeg",
  "vercel": "vercel", "framer motion": "framer", "android studio": "androidstudio", "codeigniter": "codeigniter",
  "next.js": "nextdotjs", "blade": "laravel", "go": "go"
}

// Gradient presets per badge
const gradientMap: Record<string, string> = {
  freelance: "from-violet-600 via-indigo-700 to-purple-900",
  academic:  "from-slate-600 via-slate-700 to-zinc-900",
  bootcamp:  "from-emerald-500 via-teal-600 to-cyan-800",
  "web design": "from-amber-500 via-orange-600 to-rose-700",
}

// Badge label color
const badgeColorMap: Record<string, string> = {
  freelance: "text-violet-500 dark:text-violet-400",
  academic:  "text-sky-500 dark:text-sky-400",
  bootcamp:  "text-emerald-500 dark:text-emerald-400",
  "web design": "text-amber-500 dark:text-amber-400",
}

export default function ProjectCard({
  title,
  description,
  image,
  compact = false,
  badge,
  category,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) ctrls.start("visible")
  }, [ctrls, isInView])

  const gradientClass = gradientMap[badge?.toLowerCase() ?? ""] ?? gradientMap.academic
  const badgeColor    = badgeColorMap[badge?.toLowerCase() ?? ""] ?? badgeColorMap.academic

  // Clean URL for display
  const displayUrl = projectLink
    .replace("https://", "")
    .replace("http://", "")
    .split("/")[0]

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      className={cn(
        "group relative z-10 flex flex-col w-full overflow-hidden rounded-3xl border border-foreground/10 bg-white dark:bg-zinc-900 shadow-md transition-all duration-300 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/50 hover:-translate-y-1",
        compact ? "h-full" : "min-h-[320px] md:min-h-[400px]"
      )}
    >
      {/* ── Browser Chrome ── */}
      <div className="relative w-full flex-shrink-0 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 dark:bg-zinc-950">
          {/* Traffic lights */}
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          {/* URL bar */}
          <div className="mx-3 flex flex-1 items-center gap-1.5 rounded-md bg-zinc-700/60 dark:bg-zinc-800/80 px-3 py-1">
            <Globe className="h-3 w-3 text-zinc-400 flex-shrink-0" />
            <span className="text-[11px] font-mono text-zinc-300 truncate">{displayUrl}</span>
          </div>
        </div>

        {/* Preview area */}
        <div className={cn(
          "relative w-full overflow-hidden",
          compact ? "h-44" : "h-56 sm:h-64 md:h-72"
        )}>
          {image === "placeholder" || image === "" ? (
            <div className={cn("absolute inset-0 bg-gradient-to-br", gradientClass)}>
              {/* Skeleton UI mockup */}
              <div className="absolute inset-0 flex flex-col gap-4 p-6 opacity-40">
                {/* Top bar */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-[10px] font-bold text-white uppercase">
                    {title.slice(0, 2)}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2 w-28 rounded-full bg-white/40" />
                    <div className="h-1.5 w-20 rounded-full bg-white/25" />
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="h-2 w-14 rounded-full bg-white/25" />
                    <div className="h-2 w-10 rounded-full bg-white/25" />
                    <div className="h-2 w-12 rounded-full bg-white/25" />
                  </div>
                </div>
                {/* Content block */}
                <div className="h-20 w-full rounded-xl bg-white/15" />
                {/* Text lines */}
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-full rounded-full bg-white/20" />
                  <div className="h-2 w-5/6 rounded-full bg-white/20" />
                  <div className="h-2 w-4/6 rounded-full bg-white/15" />
                </div>
                {/* Bottom buttons */}
                <div className="flex gap-2 mt-1">
                  <div className="h-8 w-28 rounded-lg bg-white/25" />
                  <div className="h-8 w-22 rounded-lg bg-white/15" />
                </div>
              </div>
            </div>
          ) : (
            <Image
              fill
              src={image}
              alt={title}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* ── "Kunjungi Langsung" overlay button ── */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <Link
              href={projectLink}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/20 backdrop-blur-sm opacity-0 translate-y-4 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 hover:!scale-105 hover:shadow-xl hover:shadow-black/30"
            >
              Kunjungi Langsung
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 px-6 py-5 gap-3 bg-white dark:bg-zinc-900">
        {/* Badge row + link icon */}
        <div className="flex items-start justify-between gap-2">
          <motion.div
            variants={projectCardTitleAnimation}
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
          >
            <span className={badgeColor}>{badge}</span>
            {category && (
              <>
                <span className="text-foreground/30">·</span>
                <span className={badgeColor}>{category}</span>
              </>
            )}
          </motion.div>

          <Link
            href={projectLink}
            target="_blank"
            aria-label="Open project"
            className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg border border-foreground/15 bg-foreground/5 text-foreground/40 hover:bg-foreground/10 hover:text-foreground transition-colors"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Title */}
        <motion.h3
          variants={projectCardTitleAnimation}
          className={cn(
            "font-bold leading-snug text-foreground",
            compact ? "text-lg" : "text-2xl md:text-3xl"
          )}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          variants={projectCardDescriptionAnimation}
          className={cn(
            "leading-relaxed text-foreground/60",
            compact ? "text-xs" : "text-sm md:text-base"
          )}
        >
          {description}
        </motion.p>

        {/* Tech tags — icon-based */}
        <motion.div
          variants={projectCardTechAnimation}
          className="flex flex-wrap gap-2 pt-1"
        >
          {tech.map((techItem, index) => {
            const iconSlug = techIconMap[techItem.toLowerCase()];
            return (
              <div
                key={index}
                title={techItem}
                className={cn(
                  "flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-colors hover:bg-foreground/10",
                  iconSlug ? "p-2" : "px-3 py-1 text-xs font-semibold text-foreground/70"
                )}
              >
                {iconSlug ? (
                  <img
                    src={iconSlug.startsWith("http") ? iconSlug : `https://cdn.simpleicons.org/${iconSlug}`}
                    alt={techItem}
                    className={cn(compact ? "h-4 w-4" : "h-5 w-5")}
                  />
                ) : (
                  techItem
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}
