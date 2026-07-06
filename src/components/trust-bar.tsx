"use client"

import { useEffect, useRef, useState } from "react"
import { Star, MessagesSquare, Clock, ShieldCheck } from "lucide-react"
import client from "@/client"

function CountUp({ end, decimals = 0, suffix = '', duration = 2000 }: {
  end: number; decimals?: number; suffix?: string; duration?: number
}) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(end)
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const t0 = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / duration)
        setVal(end * (1 - Math.pow(1 - t, 3)))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}{suffix}
    </span>
  )
}

export function TrustBar() {
  const stats = [
    {
      icon: Star,
      value: <CountUp end={client.trust.googleRating} decimals={1} />,
      label: "Google Rating",
      accent: true,
    },
    {
      icon: MessagesSquare,
      value: <CountUp end={client.trust.reviewCount} />,
      label: "Reviews",
    },
    {
      icon: Clock,
      value: <CountUp end={client.trust.yearsInBusiness} suffix=" yrs" />,
      label: "In Business",
    },
    {
      icon: ShieldCheck,
      value: <span>{client.trust.insured ? "Insured" : "Licensed"}</span>,
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
