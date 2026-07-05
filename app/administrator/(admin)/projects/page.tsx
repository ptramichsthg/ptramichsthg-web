import { FolderKanban, Plus } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Manajemen Proyek</h1>
          <p className="text-sm text-muted-foreground mt-1">Kelola dan tambahkan proyek baru ke dalam portfolio Anda.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 w-fit">
          <Plus size={16} />
          Proyek Baru
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-muted-foreground">
          <FolderKanban size={24} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Belum ada proyek</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
          Mulai tambahkan proyek pertama Anda untuk ditampilkan di halaman depan portfolio.
        </p>
      </div>
    </div>
  )
}
