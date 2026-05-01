import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "tests — Unleash Your Minecraft World. Powerful, Reliable, Lag-Free Hosting.",
  description: "tests provides lightning-fast, secure, and fully customizable Minecraft server hosting. From vanilla survival to modded adventures, we offer the performance and support you need to build your ultimate gaming experience. Get started in minutes and enjoy unparalleled uptime and control.",
  openGraph: {
    title: "tests — Unleash Your Minecraft World. Powerful, Reliable, Lag-Free Hosting.",
    description: "tests provides lightning-fast, secure, and fully customizable Minecraft server hosting. From vanilla survival to modded adventures, we offer the performance and support you need to build your ultimate gaming experience. Get started in minutes and enjoy unparalleled uptime and control.",
    siteName: "tests",
    type: "website",
  },
  icons: { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9R7CqLTLSLcjtegv3iIT1fGQGhDOovNjH50vmXcKg&s=10", apple: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9R7CqLTLSLcjtegv3iIT1fGQGhDOovNjH50vmXcKg&s=10" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
