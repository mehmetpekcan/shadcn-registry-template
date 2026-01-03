import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "your-component",
    type: "registry:ui",
    title: "Your Component",
    description:
      "A placeholder component. Replace this with your custom shadcn component.",
    files: [
      {
        path: "ui/your-component.tsx",
        target: "components/ui/your-component.tsx",
        type: "registry:ui",
      },
    ],
  },
]
