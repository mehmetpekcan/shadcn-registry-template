import { promises as fs } from "fs"
import path from "path"

import { ui } from "../registry/registry-ui.ts"

const SITE_URL = "https://shadcn-component-template.vercel.app"
const FEED_TITLE = "Shadcn Component Template Registry"
const FEED_DESCRIPTION =
  "RSS feed for Shadcn Component Template UI components registry"

interface RegistryItem {
  name: string
  type: string
  title?: string
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files?: Array<{ path: string; target?: string; type: string }>
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function getItemLink(item: RegistryItem): string {
  return `${SITE_URL}/docs`
}

function generateItemXml(item: RegistryItem, pubDate: string): string {
  const title = item.title || item.name
  const description = item.description || `${title} component`
  const link = getItemLink(item)
  const guid = `${SITE_URL}/r/${item.name}.json`

  return `    <item>
      <title>${escapeXml(title)}</title>
      <description>${escapeXml(description)}</description>
      <link>${link}</link>
      <guid>${guid}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`
}

function generateRssFeed(items: RegistryItem[]): string {
  const now = new Date()
  const pubDate = now.toUTCString()
  const lastBuildDate = now.toUTCString()

  const itemsXml = items
    .map((item) => generateItemXml(item, pubDate))
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Shadcn Component Template RSS Generator</generator>
${itemsXml}
  </channel>
</rss>`
}

async function buildRss() {
  const allItems = [...ui] as RegistryItem[]

  console.log(`📰 Generating RSS feed for ${allItems.length} items...`)
  console.log(`   - UI components: ${ui.length}`)

  const rssFeed = generateRssFeed(allItems)

  const outputPath = path.join(process.cwd(), "public/rss.xml")
  await fs.writeFile(outputPath, rssFeed, "utf-8")

  console.log(`✅ RSS feed generated at ${outputPath}`)
}

try {
  await buildRss()
} catch (error) {
  console.error("Error building RSS feed:", error)
  process.exit(1)
}
