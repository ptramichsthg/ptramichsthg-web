import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { LanguageProvider } from "@/components/providers/LanguageProvider"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
}

export const metadata: Metadata = {
  title: {
    template: "Putra Michael Sitohang | %s",
    default: "Putra Michael Sitohang | Full-Stack Software Engineer",
  },
  description:
    "A passionate Full-Stack Software Engineer specializing in backend architectures, API integrations, and scalable modern web interfaces.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: {
      template: "Putra Michael Sitohang | %s",
      default: "Putra Michael Sitohang | Full-Stack Software Engineer",
    },
    description:
      "A passionate Full-Stack Software Engineer specializing in backend architectures, API integrations, and scalable modern web interfaces.",
    url: "https://your-domain.com",
    siteName: "Putra Michael Sitohang",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "putra michael sitohang",
    "putra",
    "michael sitohang",
    "frontend web developer",
    "frontend developer",
    "frontend engineer",
    "react",
    "nextjs",
    "fullstack",
    "full-stack engineer",
    "backend developer",
    "laravel developer",
    "vuejs developer",
    "react developer",
    "data software engineering",
    "indonesia",
    "portfolio",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Putra Michael Sitohang | %s",
      default: "Putra Michael Sitohang | Full-Stack Software Engineer",
    },
    description:
      "A passionate Full-Stack Software Engineer specializing in backend architectures, API integrations, and scalable modern web interfaces.",
    creator: "@ptramichsthg",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <LanguageProvider>
            <SmoothScrollProvider
              options={{
                smooth: true,
                mobile: {
                  smooth: true,
                },
                tablet: {
                  smooth: true,
                },
              }}
            >
              {children}
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
