import { registryItemSchema, type Registry } from "shadcn/schema"
import { z } from "zod"

import { blocks } from "@/registry/registry-blocks"
import { examples } from "@/registry/registry-examples"
import { ui } from "@/registry/registry-ui"

export const registry = {
  name: "shadcn/component-template",
  homepage: "https://shadcn-component-template.vercel.app",
  items: z.array(registryItemSchema).parse([...ui, ...blocks, ...examples]),
} satisfies Registry
