import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Login to tests - Manage Your Minecraft Servers",
  description: "Log in to your tests account to manage your Minecraft servers, access billing, and utilize support resources.",
}

export default function LoginPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Log in to manage your servers, view billing, and access support resources.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/signup">Sign Up</Link></Button>
          
        </div>
        
      </div>
    </section>
    </>
  )
}
