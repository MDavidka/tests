import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Minecraft Server Hosting Plans & Pricing | tests",
  description: "Browse flexible and affordable Minecraft server hosting plans. Compare features, RAM, player slots, and choose the perfect package for your world.",
}

export default function PricingPage() {
  return (
    <>
<section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Ship something people remember.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">No hidden fees, just powerful Minecraft hosting plans tailored to your needs. Scale up or down anytime.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/features">Compare Features</Link></Button>
          
        </div>
        
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Pricing built for every stage</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Whether you're starting small or building a massive community, we have a plan for you.</p>
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
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center space-y-4">
          
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">Got questions? We've got answers about our plans, billing, and upgrades.</p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-left text-base">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We accept major credit cards (Visa, MasterCard, American Express) and PayPal.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base">Can I upgrade or downgrade my plan?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Yes, you can easily upgrade or downgrade your server plan at any time through our control panel. Your resources will be adjusted immediately.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base">Is there a contract or commitment?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base">Do you offer refunds?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">We offer a 7-day money-back guarantee for new customers. Please review our terms of service for full details.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-base">Are there any hidden fees?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Absolutely not. The price you see is the price you pay. All essential features like DDoS protection and backups are included.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

<section className="relative w-full ">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">Our support team can help you choose the perfect plan for your Minecraft server.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="#">Get started</Link></Button>
          
        </div>
      </div>
    </section>
    </>
  )
}
