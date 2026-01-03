import { forwardRef, HTMLAttributes } from "react"

export interface YourComponentProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * 🚀 YOUR COMPONENT TEMPLATE
 *
 * This is a placeholder component. Replace this with your actual component implementation.
 *
 * Steps to customize:
 * 1. Rename this file to match your component name
 * 2. Update the component logic and props
 * 3. Update registry/registry-ui.ts with your component details
 * 4. Run `pnpm registry:build` to rebuild the registry
 *
 * For more information, visit the documentation.
 */
const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          padding: "2rem",
          border: "2px dashed #666",
          borderRadius: "0.5rem",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.02)",
        }}
        {...props}
      >
        <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
          🧩 Your Component Here
        </p>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.875rem", opacity: 0.7 }}>
          Replace this placeholder with your custom shadcn component
        </p>
      </div>
    )
  }
)

YourComponent.displayName = "YourComponent"

export { YourComponent }
