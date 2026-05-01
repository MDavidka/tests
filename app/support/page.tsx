import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "tests Support - 24/7 Expert Help for Your Minecraft Server",
  description: "Get instant help for your Minecraft server. Browse FAQs, submit a support ticket, or contact our 24/7 expert team for assistance.",
}

export default function SupportPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">Our expert team is available 24/7 to ensure your Minecraft server runs smoothly. Get answers quickly.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Submit a Ticket</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          <p className="text-pretty text-muted-foreground">Browse our frequently asked questions to find solutions instantly.</p>
        </div>
        <dl className="lg:col-span-2 divide-y rounded-2xl border bg-card">
          <div className="px-6 py-5">
            <dt className="font-semibold">How do I connect to my server?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">After purchase, you'll receive your server IP and port in your control panel. Simply paste it into Minecraft's multiplayer menu.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Can I upload my existing world?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, you can easily upload your existing Minecraft world files via SFTP or our control panel's file manager.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">What if my server lags?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Check your server's resource usage in the control panel. If issues persist, our support team can help diagnose and optimize.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">Do you support custom JAR files?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Yes, you can upload and run any custom JAR file, allowing for unique server setups beyond standard versions and modpacks.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">How do I update my server version?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Our control panel allows for one-click updates to the latest Minecraft versions or specific snapshots.</dd>
          </div>
          <div className="px-6 py-5">
            <dt className="font-semibold">What is your average response time?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">Our average response time for support tickets is under 15 minutes, 24/7.</dd>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about your project</h2>
          <p className="text-pretty text-muted-foreground">Fill out the form below, and one of our support specialists will get back to you promptly.</p>
          
        </div>
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="What can we help with?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us more..." rows={6} required />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">Send message</Button>
      </form>
        </div>
      </div>
    </section>
    </>
  )
}
