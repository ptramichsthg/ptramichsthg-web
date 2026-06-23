"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import MagneticEffect from "../providers/MagneticEffect"
import { useLanguage } from "../providers/LanguageProvider"

export default function DownloadCV() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  const animation = {
    hidden: { opacity: 0, y: `1em` },
    visible: { 
      opacity: 1, 
      y: `0em`, 
      transition: { 
        duration: 1.8, 
        delay: 2.8, 
        ease: [0.2, 0.65, 0.3, 0.9] 
      } 
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={animation}
      className="mt-4 flex items-center justify-start"
    >
      <MagneticEffect>
        <div 
          onClick={() => alert("Resume document is currently being updated and will be available soon!")}
          className="cursor-pointer"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-xl transition-all duration-300"
            aria-label="Download Resume"
          >
            {t.about.downloadCV}
          </Button>
        </div>
      </MagneticEffect>
    </motion.div>
  )
}
