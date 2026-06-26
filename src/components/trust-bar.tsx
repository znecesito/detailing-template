import { Star, MessagesSquare, Clock, ShieldCheck } from "lucide-react"
import client from "@/client"

export function TrustBar() {
  const stats = [
    {
      icon: Star,
      value: client.trust.googleRating.toFixed(1),
      label: "Google Rating",
      accent: true,
    },
    {
      icon: MessagesSquare,
      value: String(client.trust.reviewCount),
      label: "Reviews",
    },
    {
      icon: Clock,
      value: `${client.trust.yearsInBusiness} yrs`,
      label: "In Business",
    },
    {
      icon: ShieldCheck,
      value: client.trust.insured ? "Insured" : "Licensed",
      label: client.trust.insured ? "& Licensed" : "",
    },
  ]

  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-2 sm:grid-cols-4">
        {stats.map(({ icon: Icon, value, label, accent }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 px-2 py-5 text-center"
          >
            <Icon
              className={
                accent
                  ? "size-5 fill-primary text-primary"
                  : "size-5 text-primary"
              }
            />
            <span className="text-lg font-bold text-foreground sm:text-xl">
              {value}
            </span>
            <span className="text-xs text-muted-foreground sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
