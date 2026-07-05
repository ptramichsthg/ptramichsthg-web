"use client"

import { motion } from "framer-motion"
import { FolderKanban, Briefcase, Mail, Eye, Github } from "lucide-react"
import Link from "next/link"
import StatsCard from "@/components/admin/StatsCard"

// ─── Mock Data ────────────────────────────────────────────────────────────────
const stats = [
  {
    label: "Total Proyek",
    value: 8,
    description: "Proyek di portfolio",
    icon: <FolderKanban size={18} />,
    trend: { value: 2, isPositive: true },
    delay: 0.2,
  },
  {
    label: "Pengalaman",
    value: 5,
    description: "Entri riwayat kerja",
    icon: <Briefcase size={18} />,
    trend: { value: 1, isPositive: true },
    delay: 0.26,
  },
  {
    label: "Pesan Masuk",
    value: 3,
    description: "Belum dibaca",
    icon: <Mail size={18} />,
    trend: { value: 12, isPositive: true },
    delay: 0.32,
  },
  {
    label: "Pengunjung",
    value: "1.2K",
    description: "Bulan ini",
    icon: <Eye size={18} />,
    trend: { value: 18, isPositive: true },
    delay: 0.38,
  },
]

const recentMessages = [
  { name: "Budi Santoso", email: "budi@example.com", message: "Halo, saya tertarik untuk kolaborasi...", time: "2 jam lalu", read: false },
  { name: "Siti Rahayu", email: "siti@company.co", message: "Apakah Anda tersedia untuk freelance?", time: "5 jam lalu", read: false },
  { name: "Ahmad Fauzi", email: "ahmad@startup.id", message: "Portofolio Anda sangat impressive!", time: "1 hari lalu", read: true },
]

const recentProjects = [
  { title: "Benvenuto Web App", tech: ["Next.js", "Tailwind", "Prisma"], status: "Published" },
  { title: "Sales Dashboard", tech: ["React", "FastAPI", "Python"], status: "Published" },
  { title: "TickTrack Android", tech: ["Java", "SQLite", "Android"], status: "Draft" },
]

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      {action}
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <>

          {/* Stats Grid */}
          <section aria-labelledby="stats-heading">
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Ringkasan
            </motion.h2>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {stats.map((s) => (
                <StatsCard key={s.label} {...s} />
              ))}
            </div>
          </section>

          {/* Two column layout */}
          <div className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-5">

            {/* ── Pesan Masuk ─────────────────────────────────────────────── */}
            <section
              aria-labelledby="messages-heading"
              className="xl:col-span-2 rounded-xl border border-border bg-card p-5"
            >
              <SectionHeader
                title="Pesan Masuk"
                action={
                  <Link href="/administrator/messages" className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                    Lihat semua
                  </Link>
                }
              />
              <ul className="space-y-3" id="messages-heading">
                {recentMessages.map((msg, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-accent/50"
                  >
                    {/* Avatar initials */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-foreground">
                      {msg.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium text-foreground">{msg.name}</p>
                        <span className="shrink-0 text-[10px] text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">{msg.message}</p>
                    </div>
                    {!msg.read && (
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-label="Belum dibaca" />
                    )}
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* ── Proyek Terbaru ────────────────────────────────────────── */}
            <section
              aria-labelledby="projects-heading"
              className="xl:col-span-3 rounded-xl border border-border bg-card p-5"
            >
              <SectionHeader
                title="Proyek"
                action={
                  <Link href="/administrator/projects" className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                    Kelola
                  </Link>
                }
              />
              <div className="space-y-3" id="projects-heading">
                {recentProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                    className="flex items-center justify-between rounded-lg border border-border p-3.5 transition-colors hover:bg-accent/50"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{project.title}</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`ml-3 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                      project.status === "Published"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}>
                      {project.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* ── Quick Actions ─────────────────────────────────────────────── */}
          <section aria-labelledby="quick-actions-heading" className="mt-5">
            <motion.h2
              id="quick-actions-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Aksi Cepat
            </motion.h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Tambah Proyek", icon: FolderKanban, href: "/administrator/projects/new" },
                { label: "Tambah Pengalaman", icon: Briefcase, href: "/administrator/experience/new" },
                { label: "Baca Pesan", icon: Mail, href: "/administrator/messages" },
                { label: "Lihat Portfolio", icon: Github, href: "/" },
              ].map((action, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.55 + i * 0.06 }}
                >
                  <Link
                    href={action.href}
                    className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background">
                      <action.icon size={17} aria-hidden="true" />
                    </div>
                    {action.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

    </>
  )
}
