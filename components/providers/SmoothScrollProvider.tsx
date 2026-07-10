"use client"

import { createContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export const SmoothScrollContext = createContext({
  scroll: null as any,
})

interface SmoothScrollProviderProps {
  children: React.ReactNode
  options?: any
}

export const SmoothScrollProvider = ({
  children,
  options,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<any>(null)
  const pathname = usePathname()

  // Hancurkan scroll instance saat berpindah halaman
  useEffect(() => {
    if (scroll) {
      try {
        if (typeof scroll.destroy === "function") {
          scroll.destroy()
        }
      } catch (error) {
        console.warn("SmoothScrollProvider: Error destroying scroll instance", error)
      }
      setScroll(null)
    }
  }, [pathname])

  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]")
    if (!container) return

    if (!scroll) {
      ;(async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default

          setScroll(
            new LocomotiveScroll({
              el: container,
              ...options,
            })
          )
        } catch (error) {
          console.error("SmoothScrollProvider initialization failed:", error)
        }
      })()
    }

    return () => {
      if (scroll) {
        try {
          if (typeof scroll.destroy === "function") {
            scroll.destroy()
          }
        } catch (error) {
          console.warn("SmoothScrollProvider cleanup: Error destroying scroll instance", error)
        }
      }
    }
  }, [options, scroll])

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  )
}

