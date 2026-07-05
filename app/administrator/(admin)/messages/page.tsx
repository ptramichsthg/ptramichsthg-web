import { Mail } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Pesan Masuk</h1>
        <p className="text-sm text-muted-foreground mt-1">Baca dan balas pesan dari pengunjung website Anda.</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-muted-foreground">
          <Mail size={24} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Kotak masuk kosong</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
          Belum ada pesan baru yang masuk dari form kontak halaman utama.
        </p>
      </div>
    </div>
  )
}
