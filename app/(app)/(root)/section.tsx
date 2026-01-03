"use client"

import { YourComponent } from "@/registry/new-york-v4/ui/your-component"

export function ComponentSection() {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="text-center max-w-md">
        <p className="text-muted-foreground text-sm mb-2">
          This is a placeholder component. Replace it with your own:
        </p>
      </div>
      <YourComponent className="w-full max-w-md" />
      <p className="text-muted-foreground text-xs text-center max-w-sm">
        Edit{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
          registry/new-york-v4/ui/your-component.tsx
        </code>{" "}
        to get started
      </p>
    </div>
  )
}
