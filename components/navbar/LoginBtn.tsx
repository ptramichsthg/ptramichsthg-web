"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useRef } from "react"
import MagneticEffect from "../providers/MagneticEffect"
import { LogIn } from "lucide-react"
import Link from "next/link"

export default function LoginBtn() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    if(!el.current) return console.log("el.current is null")
    const context = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 })
      tl.to(el.current, { x: 0, duration: 2, ease: "power4.inOut" }, 0)
    }, el)

    return () => context.kill()
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-auto absolute right-[calc(2.5%+60px)] top-4 z-[51] translate-x-[calc(5rem+2.5vw+60px)]"
    >
      <MagneticEffect>
        <Link href="/administrator" tabIndex={0}>
          <div
            className={cn(
              "relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-zinc-800 text-zinc-200 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 dark:bg-zinc-200 dark:text-zinc-800"
            )}
          >
            <LogIn size={20} />
          </div>
        </Link>
      </MagneticEffect>
    </div>
  )
}
