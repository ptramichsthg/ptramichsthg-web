"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Plus, Bell, LogOut, User } from "lucide-react"
import Link from "next/link"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className="flex min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-0">
        {/* ── Top Header ─────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card/80 px-5 py-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden focus-visible:outline-none"
              aria-label="Buka menu navigasi"
            >
              {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div>
              <h1 className="text-base font-bold text-foreground">Dashboard</h1>
              <p className="hidden text-xs text-muted-foreground sm:block">
                Selamat datang kembali, <span className="font-medium text-foreground">Putra Michael</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notification */}
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none"
              aria-label="Notifikasi (3 baru)"
            >
              <Bell size={16} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            </button>

            {/* Add Content */}
            <button className="flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition-opacity hover:opacity-80 focus-visible:outline-none">
              <Plus size={14} />
              Tambah Konten
            </button>

            {/* Avatar Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Menu Profil"
                aria-expanded={profileOpen}
              >
                PM
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <>
                    {/* Backdrop to close dropdown when clicking outside */}
                    <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} aria-hidden="true" />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-border bg-card p-1 shadow-xl shadow-black/5"
                    >
                      <div className="mb-1 border-b border-border px-3 py-2.5">
                        <p className="text-sm font-semibold text-foreground">Putra Michael</p>
                        <p className="truncate text-xs text-muted-foreground">admin@portfolio.com</p>
                      </div>
                      <Link
                        href="/administrator/profile"
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <User size={15} />
                        <span className="font-medium">Profil Saya</span>
                      </Link>
                      <Link
                        href="/administrator"
                        onClick={() => {
                          document.cookie = "session-admin=; path=/; max-age=0"
                        }}
                        className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive/30"
                      >
                        <LogOut size={15} />
                        <span className="font-medium">Keluar (Logout)</span>
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.header>

        {/* ── Page Content ────────────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-7" aria-label="Konten CMS Admin">
          {children}
        </main>
      </div>
    </div>
  )
}
