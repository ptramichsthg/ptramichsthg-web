"use client"

import { useState, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react"
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

// ─── Logo Monogram ────────────────────────────────────────────────────────────
function LogoMark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      className="mb-7 flex justify-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card">
        <span className="text-base font-bold tracking-tight text-foreground select-none">PM</span>
      </div>
    </motion.div>
  )
}

// ─── Main Login Form ──────────────────────────────────────────────────────────
export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) newErrors.email = "Alamat email wajib diisi."
    else if (!emailRegex.test(email)) newErrors.email = "Format email tidak valid."
    if (!password) newErrors.password = "Password wajib diisi."
    else if (password.length < 6) newErrors.password = "Password minimal 6 karakter."
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
        setStatusMessage("Login berhasil! Mengarahkan ke Dashboard...")
        // Set dummy session cookie for middleware
        document.cookie = "session-admin=true; path=/; max-age=86400"
        
        // Tunggu sebentar agar user bisa melihat pesan sukses, lalu redirect
        setTimeout(() => {
          router.push("/administrator/dashboard")
        }, 1000)
      } else {
        setFormStatus("error")
        setStatusMessage("Email atau password tidak valid. Silakan coba lagi.")
      }
    } catch {
      setFormStatus("error")
      setStatusMessage("Terjadi kesalahan jaringan. Silakan coba lagi.")
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
        className="relative z-10 w-full max-w-[420px]"
      >
        {/* ── Card ─────────────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-card px-8 py-9 shadow-xl shadow-black/5 dark:shadow-black/50">

          {/* Logo */}
          <LogoMark />

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.28 }}
            className="mb-7 text-center"
          >
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Selamat Datang
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Masuk untuk mengakses{" "}
              <span className="font-medium text-foreground">ke Halaman</span>.
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
                className={`mb-5 flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-sm ${formStatus === "success"
                  ? "border-green-800/40 bg-green-950/30 text-green-400"
                  : "border-red-800/40 bg-red-950/30 text-red-400"
                  }`}
              >
                {formStatus === "success" ? (
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
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
            aria-label="Formulir Login CMS"
          >
            {/* Email */}
            <InputField
              id="email"
              label="Alamat Email"
              type="email"
              placeholder="admin@portfolio.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
              }}
              error={errors.email}
              autoComplete="email"
              icon={<Mail size={15} />}
              delay={0.36}
            />

            {/* Password */}
            <InputField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors((p) => ({ ...p, password: undefined }))
              }}
              error={errors.password}
              autoComplete="current-password"
              icon={<Lock size={15} />}
              delay={0.44}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              }
            />

            {/* Remember Me + Lupa Password */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center justify-between"
            >
              <label
                htmlFor="remember-me"
                className="flex cursor-pointer select-none items-center gap-2"
              >
                <div className="relative">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="peer sr-only"
                    aria-label="Ingat saya"
                  />
                  <div className="h-4 w-4 rounded border border-input bg-background transition-colors duration-150 peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-background" />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 peer-checked:opacity-100">
                    <div className="h-[7px] w-[7px] rounded-[2px] bg-primary-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Ingat saya</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                aria-label="Lupa password"
              >
                Lupa password?
              </Link>
            </motion.div>

            {/* Submit */}
            <div className="mt-1.5">
              <LoginButton isLoading={isLoading} delay={0.56} />
            </div>
          </form>

          {/* Kembali ke Portfolio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.74 }}
            className="mt-6 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
              aria-label="Kembali ke halaman utama Portfolio"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Kembali ke Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Footer Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.82 }}
          className="mt-5 text-center text-xs text-muted-foreground/70"
        >
          Akses terbatas untuk administrator &mdash;{" "}
          <span className="text-muted-foreground">
            Putra Michael Sitohang © {new Date().getFullYear()}
          </span>
        </motion.p>
      </motion.div>
    </motion.main>
  )
}
