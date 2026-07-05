import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Putra Michael Sitohang | Login CMS",
  description: "Masuk untuk mengakses Dashboard CMS Portfolio Putra Michael Sitohang.",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
