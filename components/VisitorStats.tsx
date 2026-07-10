"use client"

import { useEffect } from "react"
import useSWR from "swr"
import { useLanguage } from "@/components/providers/LanguageProvider"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function VisitorStats() {
  const { language } = useLanguage()

  // SWR untuk auto-fetch data statistik
  const { data, error, isLoading } = useSWR("/api/visits", fetcher, {
    refreshInterval: 60000, // Refresh setiap 1 menit
    revalidateOnFocus: true
  })

  useEffect(() => {
    // Jalankan pencatatan kunjungan sekali per sesi
    const visitedKey = "portfolio-visit-logged"
    const hasLogged = sessionStorage.getItem(visitedKey)

    if (!hasLogged) {
      // Buat ID sesi acak sederhana
      const sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36)
      
      fetch("/api/visits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ sessionId })
      })
        .then((res) => {
          if (res.ok) {
            sessionStorage.setItem(visitedKey, "true")
          }
        })
        .catch((err) => console.error("Failed to log visit:", err))
    }
  }, [])

  // Teks terjemahan
  const texts = {
    en: {
      header: "STATISTICS",
      subHeader: "Visitor Statistics",
      today: "Today's Visits",
      last7: "Last 7 Days Visits",
      last30: "Last 30 Days Visits",
      total: "Total Visits",
      error: "Failed to load stats"
    },
    id: {
      header: "STATISTIK",
      subHeader: "Statistik Pengunjung",
      today: "Kunjungan Hari Ini",
      last7: "Kunjungan 7 Hari Terakhir",
      last30: "Kunjungan 30 Hari Terakhir",
      total: "Total Kunjungan",
      error: "Gagal memuat statistik"
    }
  }

  const t = texts[language as "en" | "id"] || texts.en

  // Formatter angka ribuan
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === "id" ? "id-ID" : "en-US").format(num)
  }

  if (error) {
    return (
      <div className="flex flex-col items-center md:items-start text-xs text-red-500/80">
        <p>{t.error}</p>
      </div>
    )
  }

  const stats = data && !data.error ? data : { today: 0, last7Days: 0, last30Days: 0, total: 0 }

  return (
    <div className="flex flex-col items-center w-full max-w-[250px] transition-opacity duration-300">
      <p className="mb-4 text-xl font-semibold text-zinc-200 dark:text-zinc-800">
        {t.header}
      </p>
      <div className="flex flex-col gap-y-1 text-sm font-medium text-zinc-400 dark:text-zinc-500 w-full">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1 border-b border-zinc-700/30 dark:border-zinc-300/30 pb-1 font-semibold">
          {t.subHeader}
        </p>
        
        <div className="flex justify-between w-full gap-x-4">
          <span>{t.today}:</span>
          <span className="font-mono text-zinc-200 dark:text-zinc-700">
            {isLoading ? "..." : formatNumber(stats.today)}
          </span>
        </div>

        <div className="flex justify-between w-full gap-x-4">
          <span>{t.last7}:</span>
          <span className="font-mono text-zinc-200 dark:text-zinc-700">
            {isLoading ? "..." : formatNumber(stats.last7Days)}
          </span>
        </div>

        <div className="flex justify-between w-full gap-x-4">
          <span>{t.last30}:</span>
          <span className="font-mono text-zinc-200 dark:text-zinc-700">
            {isLoading ? "..." : formatNumber(stats.last30Days)}
          </span>
        </div>

        <div className="flex justify-between w-full gap-x-4 pt-1 border-t border-zinc-700/30 dark:border-zinc-300/30 mt-1">
          <span className="font-semibold text-zinc-300 dark:text-zinc-600">{t.total}:</span>
          <span className="font-mono font-bold text-zinc-100 dark:text-zinc-900">
            {isLoading ? "..." : formatNumber(stats.total)}
          </span>
        </div>
      </div>
    </div>
  )
}
