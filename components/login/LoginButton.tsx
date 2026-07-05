"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

interface LoginButtonProps {
  isLoading: boolean
  label?: string
  delay?: number
}

export default function LoginButton({
  isLoading,
  label = "Masuk",
  delay = 0,
}: LoginButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={!isLoading ? { scale: 1.015, opacity: 0.92 } : {}}
        whileTap={!isLoading ? { scale: 0.975 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground",
          "transition-opacity duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isLoading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
        )}
        aria-label={isLoading ? "Sedang memproses..." : label}
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            </motion.span>
          )}
          {isLoading ? "Memproses..." : label}
        </span>
      </motion.button>
    </motion.div>
  )
}
