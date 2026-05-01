import type { Metadata } from "next"

export const siteConfig = {
  "name": "tests",
  "tagline": "Blazing Fast Minecraft Server Hosting",
  "description": "Launch your Minecraft server in under 60 seconds with enterprise-grade hardware, 24/7 support, and one-click modpack installs. Perfect for survival, Skyblock, or custom worlds.",
  "audience": "Minecraft players, server admins, content creators, and gaming communities",
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
      "label": "Dashboard",
      "href": "/dashboard"
    },
    {
      "label": "Support",
      "href": "/support"
    }
  ],
  "primaryCta": {
    "label": "Get Started Free",
    "href": "/dashboard"
  },
  "secondaryCta": {
    "label": "View Plans",
    "href": "/pricing"
  },
  "footerCta": {
    "label": "Start Your Server",
    "href": "/dashboard"
  },
  "socialLinks": [
    {
      "label": "Discord",
      "href": "https://discord.gg/minecraftservers"
    },
    {
      "label": "Twitter",
      "href": "https://twitter.com/tests_servers"
    }
  ],
  "contact": {
    "email": "support@tests.com",
    "phone": "+1 (555) 123-4567"
  },
  "themePreset": "saas",
  "integrations": [
    {
      "kind": "database",
      "name": "Turso",
      "provider": "turso",
      "reason": "Store user accounts, server configurations, billing info, and usage metrics",
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
