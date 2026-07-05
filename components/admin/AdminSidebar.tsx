"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  Mail,
  User,
  Settings,
  LogOut,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/administrator/dashboard" },
  { icon: FolderKanban, label: "Proyek", href: "/administrator/projects" },
  { icon: Briefcase, label: "Pengalaman", href: "/administrator/experience" },
  { icon: Mail, label: "Pesan Masuk", href: "/administrator/messages", badge: 3 },
  { icon: User, label: "Profil", href: "/administrator/profile" },
  { icon: Settings, label: "Pengaturan", href: "/administrator/settings" },
]

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-border bg-card/80 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background">
            <span className="select-none text-sm font-bold text-foreground">PM</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">CMS Portfolio</p>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Navigasi Admin">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Menu Utama
          </p>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors duration-150",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon size={16} aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className={cn(
                          "flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold",
                          isActive ? "bg-background/20 text-background" : "bg-foreground/10 text-foreground"
                        )}>
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight size={14} className={cn(
                        "transition-opacity duration-150",
                        isActive ? "opacity-70" : "opacity-0 group-hover:opacity-40"
                      )} />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div className="border-t border-border p-3 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
            aria-label="Lihat Portfolio (buka tab baru)"
          >
            <ExternalLink size={16} />
            <span className="font-medium">Lihat Portfolio</span>
          </Link>
          <Link
            href="/administrator"
            onClick={() => {
              document.cookie = "session-admin=; path=/; max-age=0"
            }}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-destructive/10 hover:text-destructive"
            aria-label="Keluar dari akun"
          >
            <LogOut size={16} />
            <span className="font-medium">Keluar</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
