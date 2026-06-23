"use client"

import { createContext, useEffect, useState } from "react"

export const SmoothScrollContext = createContext({
  scroll: null as LocomotiveScroll | null,
})

interface SmoothScrollProviderProps {
  children: React.ReactNode
  options?: any
}

export const SmoothScrollProvider = ({
  children,
  options,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scroll) {
      ;(async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              ...options,
            })
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      try {
        if (scroll && typeof scroll.destroy === "function") {
          scroll.destroy()
        }
      } catch (error) {
        // Suppress internal locomotive scroll destroy errors during fast refresh
        console.warn("SmoothScrollProvider: Error destroying scroll instance", error)
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
