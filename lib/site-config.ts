import type { Metadata } from "next"

export const siteConfig = {
  "name": "tests",
  "tagline": "Unleash Your Minecraft World. Powerful, Reliable, Lag-Free Hosting.",
  "description": "tests provides lightning-fast, secure, and fully customizable Minecraft server hosting. From vanilla survival to modded adventures, we offer the performance and support you need to build your ultimate gaming experience. Get started in minutes and enjoy unparalleled uptime and control.",
  "audience": "Minecraft players, server administrators, gaming communities, modpack enthusiasts, content creators.",
  "category": null,
  "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9R7CqLTLSLcjtegv3iIT1fGQGhDOovNjH50vmXcKg&s=10",
  "logoInitials": "T",
  "navLinks": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "Features",
      "href": "/features"
    },
    {
      "label": "Pricing",
      "href": "/pricing"
    },
    {
      "label": "Support",
      "href": "/support"
    },
    {
      "label": "Login",
      "href": "/login"
    },
    {
      "label": "Dashboard",
      "href": "/dashboard"
    }
  ],
  "primaryCta": {
    "label": "Start Your Server",
    "href": "/pricing"
  },
  "secondaryCta": {
    "label": "Explore Features",
    "href": "/features"
  },
  "footerCta": {
    "label": "Ready to Build? Get Started Today!",
    "href": "/pricing"
  },
  "socialLinks": [
    {
      "label": "Twitter",
      "href": "#"
    },
    {
      "label": "Discord",
      "href": "#"
    },
    {
      "label": "YouTube",
      "href": "#"
    }
  ],
  "contact": {
    "email": "support@tests.com",
    "phone": "+1 (800) 555-0199",
    "address": "123 Crafting Table Lane, Blockville, MC 12345"
  },
  "themePreset": "saas",
  "integrations": [
    {
      "kind": "database",
      "name": "Turso",
      "provider": "turso",
      "reason": "User accounts, server configurations, order management, billing data.",
      "envVars": [
        "TURSO_DATABASE_URL",
        "TURSO_AUTH_TOKEN"
      ]
    }
  ],
  "needsDatabase": true,
  "databaseProvider": "turso"
} as const

export type SiteConfig = typeof siteConfig

export function pageMetadata(input: { title: string; description: string }): Metadata {
  return {
    title: `${input.title} — ${siteConfig.name}`,
    description: input.description,
  }
}
