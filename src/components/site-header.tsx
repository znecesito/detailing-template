import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import client from "@/client"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {client.businessName}
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={client.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:flex"
          >
            <Phone className="size-4 text-primary" />
            {client.phone}
          </a>
          <Button render={<a href="#book" />} size="sm" className="font-semibold">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
