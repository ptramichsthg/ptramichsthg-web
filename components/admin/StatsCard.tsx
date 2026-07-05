"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  label: string
  value: string | number
  description?: string
  icon: React.ReactNode
  trend?: { value: number; isPositive: boolean }
  delay?: number
}

export default function StatsCard({
  label,
  value,
  description,
  icon,
  trend,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className="rounded-xl border border-border bg-card p-5 transition-colors duration-150 hover:bg-accent/50"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">{value}</p>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
          {trend && (
            <p className={cn(
              "mt-1.5 text-xs font-medium",
              trend.isPositive ? "text-green-500" : "text-destructive"
            )}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% dari bulan lalu
            </p>
          )}
        </div>
        <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground">
          {icon}
        </div>
      </div>
    </motion.div>
  )
}
