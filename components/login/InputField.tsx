"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InputFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  autoComplete?: string
  icon: React.ReactNode
  rightElement?: React.ReactNode
  delay?: number
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

export default function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  icon,
  rightElement,
  delay = 0,
  hideLabel = false,
}: InputFieldProps & { hideLabel?: boolean }) {
  return (
    <motion.div
      className="flex flex-col gap-1.5"
      custom={delay}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-medium text-foreground tracking-wide",
          hideLabel && "sr-only"
        )}
      >
        {label}
      </label>
      <div className="relative group">
        {/* Left icon */}
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors duration-200 pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-4 text-sm font-medium text-foreground placeholder:text-muted-foreground",
            "outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-offset-0",
            icon ? "pl-10" : "pl-4",
            error
              ? "border-destructive focus:border-destructive focus:ring-destructive/20"
              : "border-input hover:border-muted-foreground/30 focus:border-primary focus:ring-primary/20"
          )}
        />

        {/* Right element (e.g. show password) */}
        {rightElement && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <motion.p
          id={`${id}-error`}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-destructive font-medium mt-0.5"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}
