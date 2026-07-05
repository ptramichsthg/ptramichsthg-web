"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Loader, Mail } from "lucide-react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import MagneticEffect from "../providers/MagneticEffect"
import { Button } from "../ui/button"
import ContactFormLine from "./ContactFormLine"
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"

export default function ContactForm() {
  const el = useRef<HTMLDivElement | null>(null)
  const formEl = useRef<HTMLFormElement | null>(null)
  const [pending, setPending] = useState(false)
  const [errors, setErrors] = useState({
    email: false,
    name: false,
    message: false,
    subject: false,
  })

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      ".contact-content",
      { translateY: "-50%" },
      {
        translateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    )
  }, [])

  const handleFocus = (inputId: number) => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.input-line-${inputId}`,
        { translateX: 0 },
        {
          translateX: "66%",
          duration: 1,
          ease: "power1.inOut",
        }
      )
    })

    return () => ctx.revert()
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formEl.current) return

    const formData = new FormData(formEl.current)
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const newErrors = {
      email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      name: !name || name.trim().length < 2,
      subject: !subject || subject.trim().length < 2,
      message: !message || message.trim().length < 3,
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((err) => err)) {
      return
    }

    setPending(true)

    // Konfigurasi EmailJS (Service ID, Template ID, Public Key)
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID"
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"

    emailjs.sendForm(serviceID, templateID, formEl.current, publicKey).then(
      () => {
        setPending(false)
        formEl.current?.reset()
        alert("Pesan berhasil terkirim!")
      },
      (error) => {
        setPending(false)
        console.error("FAILED...", error.text)
        alert("Gagal mengirim pesan, silakan coba lagi.")
      }
    )
  }

  return (
    <div
      ref={el}
      className="mx-auto mb-12 flex w-full max-w-[90rem] flex-col gap-3 text-4xl"
    >
      <form ref={formEl} onSubmit={sendEmail}>
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              autoComplete="off"
              onFocus={() => handleFocus(1)}
              className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={1} hasError={errors.name} />
          </div>
          {errors.name && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid name
            </span>
          )}
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Your email"
              onFocus={() => handleFocus(2)}
              className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={2} hasError={errors.email} />
          </div>
          {errors.email && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <input
              type="text"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              onFocus={() => handleFocus(3)}
              className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
            <ContactFormLine inputId={3} hasError={errors.subject} />
          </div>
          {errors.subject && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a valid subject
            </span>
          )}
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <textarea
              className="peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
              placeholder="Your Message"
              name="message"
              onFocus={() => handleFocus(4)}
            />
            <ContactFormLine inputId={4} hasError={errors.message} />
          </div>
          {errors.message && (
            <span className="block text-sm font-light text-red-500 lg:text-base">
              Please enter a message atleast 3 characters long
            </span>
          )}
        </div>
        <Button
          disabled={pending}
          variant="outline"
          size="lg"
          className="mt-6"
        >
          <MagneticEffect>
            {pending === true ? (
              <div className="inline-flex items-center gap-x-2">
                <Loader className="h-6 w-6 animate-spin" />
                <span>Sending ...</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-x-2">
                <Mail className="h-6 w-6" />
                <span>Send</span>
              </div>
            )}
          </MagneticEffect>
        </Button>
      </form>
    </div>
  )
}
