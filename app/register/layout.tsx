import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Putra Michael Sitohang | Register CMS",
  description: "Daftar untuk mengakses Dashboard CMS Portfolio Putra Michael Sitohang.",
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
