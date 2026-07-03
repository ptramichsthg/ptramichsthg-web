"use client"
import React, { useEffect, useState } from "react"
import { useLanguage } from "./providers/LanguageProvider"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Tabs defaultValue={language} value={language}>
      <TabsList className="border dark:border-zinc-600 dark:bg-zinc-800">
        <TabsTrigger value="id" onClick={() => setLanguage("id")}>
          ID
        </TabsTrigger>
        <TabsTrigger value="en" onClick={() => setLanguage("en")}>
          EN
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default LanguageSwitcher
