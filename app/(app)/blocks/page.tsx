import Link from "next/link"

export const dynamic = "force-static"
export const revalidate = false

export default async function BlocksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <p className="text-muted-foreground">No blocks available.</p>
      <Link href="/" className="text-primary underline">
        Go back home
      </Link>
    </div>
  )
}
