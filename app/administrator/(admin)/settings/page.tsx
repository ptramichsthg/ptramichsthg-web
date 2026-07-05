import { Settings, Globe, Shield, Paintbrush } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Pengaturan</h1>
        <p className="text-sm text-muted-foreground mt-1">Konfigurasi preferensi dan tampilan CMS Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[
          { label: "Pengaturan Umum", desc: "Konfigurasi dasar website dan SEO", icon: Globe },
          { label: "Keamanan", desc: "Password dan autentikasi dua langkah", icon: Shield },
          { label: "Tampilan", desc: "Tema, warna, dan kustomisasi UI", icon: Paintbrush },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:bg-accent/50 cursor-pointer">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
              <item.icon size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
