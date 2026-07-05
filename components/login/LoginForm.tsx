"use client"

import { useState, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import InputField from "@/components/login/InputField"
import LoginButton from "@/components/login/LoginButton"

// ─── Animation Variants ──────────────────────────────────────────────────────
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
  },
}

const alertVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18 } },
}

// ─── Main Login Form ──────────────────────────────────────────────────────────
export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) newErrors.email = "Email address is required."
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format."
    if (!password) newErrors.password = "Password is required."
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Submit Handler ───────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    setFormStatus("idle")
    try {
      await new Promise((res) => setTimeout(res, 1800))
      if (email === "admin@portfolio.com" && password === "admin123") {
        setFormStatus("success")
        setStatusMessage("Sign in successful! Redirecting...")
        // Set dummy session cookie for middleware
        document.cookie = "session-admin=true; path=/; max-age=86400"
        
        // Tunggu sebentar agar user bisa melihat pesan sukses, lalu redirect
        setTimeout(() => {
          router.push("/administrator/dashboard")
        }, 1000)
      } else {
        setFormStatus("error")
        setStatusMessage("Invalid email or password. Please try again.")
      }
    } catch {
      setFormStatus("error")
      setStatusMessage("A network error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background px-5 py-14"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[460px]"
      >
        {/* ── Card ─────────────────────────────────────────────────────────── */}
        <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl px-8 py-10 shadow-2xl shadow-black/20">

          {/* Heading (Monospace style like the screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.28 }}
            className="mb-8"
          >
            <h1 className="font-mono text-xl font-bold tracking-tight text-foreground">
              Sign in:
            </h1>
          </motion.div>

          {/* Status Alert */}
          <AnimatePresence mode="wait">
            {formStatus !== "idle" && (
              <motion.div
                key={formStatus}
                variants={alertVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                role="alert"
                aria-live="polite"
                className={`mb-6 flex items-start gap-2.5 rounded-xl border px-4 py-3.5 text-sm ${formStatus === "success"
                  ? "border-green-800/40 bg-green-950/30 text-green-400"
                  : "border-red-800/40 bg-red-950/30 text-red-400"
                  }`}
              >
                {formStatus === "success" ? (
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                )}
                <span>{statusMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
            aria-label="CMS Login Form"
          >
            {/* Email */}
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
              }}
              error={errors.email}
              autoComplete="email"
              icon={null as any}
              hideLabel={true}
              delay={0.36}
            />

            {/* Password */}
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors((p) => ({ ...p, password: undefined }))
              }}
              error={errors.password}
              autoComplete="current-password"
              icon={null as any}
              hideLabel={true}
              delay={0.44}
            />

            {/* Submit */}
            <div className="mt-2">
              <LoginButton isLoading={isLoading} delay={0.56} label="Sign in" />
            </div>
          </form>

        </div>

        {/* Kembali ke Portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.74 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
            aria-label="Back to Portfolio homepage"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  )
}
