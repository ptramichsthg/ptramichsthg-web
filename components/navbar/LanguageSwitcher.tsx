"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { cn } from "@/lib/utils"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm font-semibold text-zinc-400 dark:text-zinc-600">
      <span className="text-xs text-zinc-400 dark:text-zinc-600">🌐</span>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded px-1.5 py-0.5 transition-all duration-200",
          language === "en"
            ? "text-zinc-100 dark:text-zinc-800 font-bold"
            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-700"
        )}
      >
        EN
      </button>
      <span className="text-zinc-600 dark:text-zinc-400 select-none">|</span>
      <button
        onClick={() => setLanguage("id")}
        className={cn(
          "rounded px-1.5 py-0.5 transition-all duration-200",
          language === "id"
            ? "text-zinc-100 dark:text-zinc-800 font-bold"
            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-700"
        )}
      >
        ID
      </button>
    </div>
  )
}
