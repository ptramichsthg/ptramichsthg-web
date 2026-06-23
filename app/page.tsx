"use client"

import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Hero from "@/components/hero/Hero"
import Nav from "@/components/navbar/Nav"
import Experience from "@/components/experience/Experience"
import Preload from "@/components/preload/Preload"
import Projects from "@/components/projects/Projects"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(true)
  const [endedLoading, setEndedLoading] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-visited")
    const body = document.querySelector("body")

    if (hasVisited) {
      setLoadingPreloader(false)
      setEndedLoading(true)
      body?.classList.remove("overflow-hidden")
      setIsInitialized(true)
      return
    }

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden")
      setTimeout(() => {
        setLoadingPreloader(false)
        sessionStorage.setItem("portfolio-visited", "true")
      }, 4000)
      setTimeout(() => {
        setEndedLoading(true)
      }, 3000)
    } else {
      body?.classList.remove("overflow-hidden")
    }
    
    setIsInitialized(true)
  }, [loadingPreloader])

  if (!isInitialized) return null

  if (loadingPreloader) {
    return (
      <>
        <AnimatePresence mode="wait" initial={true}>
          {loadingPreloader && <Preload endedLoading={endedLoading} />}
        </AnimatePresence>
      </>
    )
  }

  if (!loadingPreloader) {
    return (
      <>
        <Nav />
        <main data-scroll-container className="flex flex-col items-center">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </>
    )
  }
}
