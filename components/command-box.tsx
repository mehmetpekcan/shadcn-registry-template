"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface CommandBoxProps {
  command: string;
}

export function CommandBox({ command }: CommandBoxProps) {
  const [copied, setCopied] = React.useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="group relative flex w-full max-w-2xl items-center px-4">
      <div className="flex h-12 w-full items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100/80 px-5 backdrop-blur-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700">
        <span className="select-none font-mono text-sm text-zinc-500">$</span>
        <code className="no-scrollbar flex-1 overflow-x-auto whitespace-nowrap text-left font-mono text-sm text-zinc-700 dark:text-zinc-300">
          {command}
        </code>
        <button
          onClick={copyCommand}
          className={cn(
            "shrink-0 rounded-md p-1 text-zinc-500 transition-colors hover:text-zinc-700 dark:hover:text-zinc-300",
            copied && "text-green-500 hover:text-green-500"
          )}
          aria-label="Copy command"
        >
          {copied ? (
            <CheckIcon className="size-4" />
          ) : (
            <CopyIcon className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}
