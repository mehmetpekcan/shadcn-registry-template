import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-transparent">
      <Link href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
        <span className="flex size-2 rounded-full bg-blue-500" title="New" />
        Built with shadcn registry <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
