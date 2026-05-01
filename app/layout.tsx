import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "tests — Blazing Fast Minecraft Server Hosting",
  description: "Launch your Minecraft server in under 60 seconds with enterprise-grade hardware, 24/7 support, and one-click modpack installs. Perfect for survival, Skyblock, or custom worlds.",
  openGraph: {
    title: "tests — Blazing Fast Minecraft Server Hosting",
    description: "Launch your Minecraft server in under 60 seconds with enterprise-grade hardware, 24/7 support, and one-click modpack installs. Perfect for survival, Skyblock, or custom worlds.",
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
