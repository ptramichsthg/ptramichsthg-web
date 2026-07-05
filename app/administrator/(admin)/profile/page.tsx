import { User, Edit } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Profil Saya</h1>
          <p className="text-sm text-muted-foreground mt-1">Kelola informasi pribadi dan kredensial login Anda.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 w-fit">
          <Edit size={16} />
          Edit Profil
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card p-8 shadow-sm max-w-2xl">
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-muted-foreground">
            PM
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Putra Michael Sitohang</h2>
            <p className="text-sm text-muted-foreground">admin@portfolio.com</p>
            <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  )
}
