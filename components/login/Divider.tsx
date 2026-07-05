"use client"

import { motion } from "framer-motion"

interface DividerProps {
  label: string
  delay?: number
}

export default function Divider({ label, delay = 0 }: DividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3"
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-zinc-800" />
      <span className="text-xs font-medium tracking-widest uppercase text-zinc-600 select-none">
        {label}
      </span>
      <div className="h-px flex-1 bg-zinc-800" />
    </motion.div>
  )
}
