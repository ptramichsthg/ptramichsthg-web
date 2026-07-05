import type { Metadata } from "next"
import AdminLayoutWrapper from "@/components/admin/AdminLayout"

export const metadata: Metadata = {
  title: "Putra Michael Sitohang | Admin Dashboard",
  description: "Dashboard CMS untuk mengelola konten Portfolio.",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
}
