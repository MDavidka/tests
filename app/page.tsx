import Link from "next/link"
import { Check, Quote, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "tests - High-Performance Minecraft Server Hosting",
  description: "Experience lag-free, powerful, and customizable Minecraft server hosting. Instant setup, full mod support, and 24/7 expert support.",
}

export default function HomePage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,_hsl(var(--primary)/0.08),_transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">Experience unparalleled speed, stability, and control. Host your dream Minecraft world with tests, where lag is a myth and possibilities are endless.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg"><Link href="/pricing">Start Your Server</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="#dashboard-demo">View Demo Dashboard</Link></Button>
          </div>
        </div>
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="relative rounded-[1.5rem] border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-1.5 border-b px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-xs text-muted-foreground">dashboard.preview</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">MRR growth</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">+38%</p>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Active teams</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">12k</p>
              </div>
              <div className="rounded-xl border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Avg response</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">&lt;200ms</p>
              </div>
            </div>
            <div className="border-t px-6 py-4 text-xs text-muted-foreground">Live, customizable, and ready in minutes.</div>
          </div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">Trusted by teams everywhere</p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Forge</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Fabric</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">PaperMC</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Spigot</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">Bukkit</div>
          <div className="text-base font-semibold tracking-tight text-muted-foreground/70 transition hover:text-foreground">CurseForge</div>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams who care about the details</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">From instant setup to advanced mod support, tests provides everything you need for an epic Minecraft journey.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Rocket className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Instant Setup</CardTitle>
              <CardDescription className="text-base">Get your server online in minutes, not hours. Our automated system handles everything.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Blazing Fast Performance</CardTitle>
              <CardDescription className="text-base">Powered by NVMe SSDs and high-end CPUs, ensuring zero lag and smooth gameplay.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-1 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">Full Mod &amp; Plugin Support</CardTitle>
              <CardDescription className="text-base">Easily install Forge, Fabric, Spigot, Paper, Bukkit, and any modpack you desire.</CardDescription>
            </CardHeader>
            
          </Card>
          <Card className="lg:col-span-2 relative overflow-hidden border-border/60">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></div>
              <CardTitle className="text-xl">DDoS Protection Included</CardTitle>
              <CardDescription className="text-base">Stay online and secure with enterprise-grade DDoS mitigation built into every plan.</CardDescription>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        
        <dl className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">10,000+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Active Servers</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">99.99%</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Uptime Guarantee</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">500TB+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Data Transferred Monthly</dt>
          </div>
          <div className="px-2 text-center sm:px-6">
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">100k+</dd>
            <dt className="mt-2 text-sm text-muted-foreground">Happy Players</dt>
          </div>
        </dl>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">Loved by people who care about quality</h2>
        <figure className="mt-12 rounded-3xl border bg-card p-8 sm:p-12">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-pretty text-2xl font-medium leading-relaxed sm:text-3xl">"Switching to tests was the best decision for our community server. The performance is incredible, and support is always on point!"</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Avatar><AvatarFallback>AP</AvatarFallback></Avatar>
            <div>
              <p className="font-semibold">Alex P.</p>
              <p className="text-sm text-muted-foreground">Community Admin</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Choose from our flexible hosting plans, designed for every type of Minecraft player and community.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Beginner's Realm</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$5.99</span>
                <span className="text-sm text-muted-foreground">month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />2GB RAM</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />10 Player Slots</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Basic DDoS Protection</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Instant Setup</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/pricingbeginner">Choose Plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most popular</Badge></div>
            <CardHeader>
              <CardTitle className="text-xl">Explorer's Haven</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$12.99</span>
                <span className="text-sm text-muted-foreground">month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />6GB RAM</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />50 Player Slots</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Advanced DDoS Protection</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Full Mod Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Daily Backups</li>
              </ul>
              <Button asChild variant="default" className="mt-6 w-full"><Link href="/pricingexplorer">Choose Plan</Link></Button>
            </CardContent>
          </Card>
          <Card className="relative ">
            
            <CardHeader>
              <CardTitle className="text-xl">Legendary World</CardTitle>
              <CardDescription></CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">$24.99</span>
                <span className="text-sm text-muted-foreground">month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />16GB RAM</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Unlimited Player Slots</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Enterprise DDoS Protection</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Dedicated IP Address</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Priority Support</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />Automated Modpack Installs</li>
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full"><Link href="/pricinglegendary">Choose Plan</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Join thousands of satisfied players and elevate your Minecraft experience today.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
