import { Phone, Clock, MapPin, AtSign } from "lucide-react"
import client from "@/client"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              {client.businessName}
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              {client.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <a
              href={client.phoneHref}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" />
              {client.phone}
            </a>
            <a
              href={`https://instagram.com/${client.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <AtSign className="size-4 text-primary" />
              @{client.instagramHandle}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">Hours</h3>
            {client.hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Clock className="size-4 shrink-0 text-primary" />
                <span className="font-medium text-foreground">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">Service Area</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{client.serviceArea}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {client.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
