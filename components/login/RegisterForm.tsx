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



// ─── Main Register Form ──────────────────────────────────────────────────────────
export default function RegisterForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string }>({})
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors: { name?: string; email?: string; password?: string; confirmPassword?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!name.trim()) newErrors.name = "Name is required."
    
    if (!email.trim()) newErrors.email = "Email address is required."
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format."
    
    if (!password) newErrors.password = "Password is required."
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters."
    
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password."
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match."
    
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
      // Dummy API Call
      await new Promise((res) => setTimeout(res, 1800))
      setFormStatus("success")
      setStatusMessage("Account created successfully! Redirecting to login...")
      
      // Redirect back to login after success
      setTimeout(() => {
        router.push("/administrator")
      }, 1500)
      
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



          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.28 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-foreground">
              CREATE ACCOUNT
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
              Register a new administrator account for the Portfolio CMS.
            </p>
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
                className={`mb-6 flex items-center gap-2.5 rounded-xl border px-4 py-3.5 text-sm font-medium ${formStatus === "success"
                  ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-400"
                  : "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400"
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
            className="flex flex-col gap-4"
            noValidate
            aria-label="CMS Register Form"
          >
            {/* Name */}
            <InputField
              id="name"
              label="Name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
              }}
              error={errors.name}
              autoComplete="name"
              icon={null as any}
              hideLabel={true}
              delay={0.34}
            />

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
              delay={0.38}
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
              autoComplete="new-password"
              icon={null as any}
              hideLabel={true}
              delay={0.42}
            />

            {/* Confirm Password */}
            <InputField
              id="confirm-password"
              label="Confirm password"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (errors.confirmPassword) setErrors((p) => ({ ...p, confirmPassword: undefined }))
              }}
              error={errors.confirmPassword}
              autoComplete="new-password"
              icon={null as any}
              hideLabel={true}
              delay={0.46}
            />

            <div className="mt-2">
              <LoginButton isLoading={isLoading} delay={0.52} label="Register" />
            </div>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.58 }}
              className="relative flex items-center py-2"
            >
              <div className="flex-grow border-t border-border"></div>
              <span className="mx-4 flex-shrink-0 text-xs text-muted-foreground/60 font-medium">or Continue with</span>
              <div className="flex-grow border-t border-border"></div>
            </motion.div>

            {/* Social Buttons */}
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.62 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Register with Google"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Register with Google
            </motion.button>
            
            {/* Login Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.68 }}
              className="mt-2 text-center"
            >
              <span className="text-sm text-muted-foreground">Already have an account? </span>
              <Link
                href="/administrator"
                className="text-sm font-semibold text-foreground hover:underline transition-colors duration-200"
              >
                Sign in
              </Link>
            </motion.div>
          </form>

        </div>


      </motion.div>
    </motion.main>
  )
}
