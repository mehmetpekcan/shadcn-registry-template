"use client"

import * as React from "react"

import { CopyButton } from "@/components/copy-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  children: React.ReactNode
}

export function ComponentPreview({
  code,
  children,
  className,
  ...props
}: ComponentPreviewProps) {
  const [highlightedCode, setHighlightedCode] = React.useState<string | null>(
    null
  )

  React.useEffect(() => {
    async function highlight() {
      const { codeToHtml } = await import("shiki")
      const html = await codeToHtml(code, {
        lang: "tsx",
        themes: {
          dark: "github-dark",
          light: "github-light",
        },
        defaultColor: false,
      })
      setHighlightedCode(html)
    }
    highlight()
  }, [code])

  return (
    <div
      className={cn(
        "overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-800",
        className
      )}
      {...props}
    >
      <Tabs defaultValue="preview" className="gap-0">
        <div className="flex items-center justify-between bg-zinc-100 px-1 py-1 dark:bg-zinc-800">
          <TabsList className="h-8 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="h-7 rounded-sm px-3 text-sm data-[state=active]:bg-white data-[state=active]:shadow-none dark:data-[state=active]:bg-zinc-900"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="h-7 rounded-sm px-3 text-sm data-[state=active]:bg-white data-[state=active]:shadow-none dark:data-[state=active]:bg-zinc-900"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <CopyButton
            value={code}
            className="static mr-1 size-7 bg-transparent"
          />
        </div>
        <TabsContent
          value="preview"
          className="m-0 bg-white p-4 dark:bg-zinc-950"
        >
          <div className="flex min-h-[200px] items-center justify-center">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code" className="m-0 bg-zinc-50 dark:bg-zinc-900">
          <div className="no-scrollbar max-h-[400px] overflow-auto">
            {highlightedCode ? (
              <div
                className="p-4 text-sm [&_pre]:bg-transparent! [&_code]:block [&_span]:text-(--shiki-light) dark:[&_span]:text-(--shiki-dark)"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            ) : (
              <pre className="p-4">
                <code className="text-sm text-zinc-700 dark:text-zinc-300">
                  {code}
                </code>
              </pre>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
