"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { MoveHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SudsAnimation } from "@/components/suds-animation"
import client from "@/client"

export function Hero() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")       setPosition(p => Math.max(0, p - 5))
    else if (e.key === "ArrowRight") setPosition(p => Math.min(100, p + 5))
    else if (e.key === "Home")       setPosition(0)
    else if (e.key === "End")        setPosition(100)
    else return
    e.preventDefault()
  }, [])

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:pt-16">

        {/* Text + signature animation (desktop: side-by-side) */}
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:flex-1 lg:text-left">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase animate-in fade-in-0 slide-in-from-bottom-6 [animation-duration:700ms] [animation-fill-mode:both] motion-reduce:animate-none">
              Premium Detailing
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl animate-in fade-in-0 slide-in-from-bottom-6 [animation-duration:700ms] [animation-delay:150ms] [animation-fill-mode:both] motion-reduce:animate-none">
              {client.hero.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg lg:mx-0 animate-in fade-in-0 slide-in-from-bottom-6 [animation-duration:700ms] [animation-delay:300ms] [animation-fill-mode:both] motion-reduce:animate-none">
              {client.hero.subheadline} Drag the slider to see the transformation.
            </p>
          </div>

          {/* Signature animation — desktop only */}
          <div className="hidden lg:block lg:w-[260px] lg:shrink-0 animate-in fade-in-0 [animation-duration:1000ms] [animation-delay:350ms] [animation-fill-mode:both] motion-reduce:animate-none">
            <SudsAnimation />
          </div>
        </div>

        {/* Before/after slider */}
        <div
          ref={containerRef}
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% after`}
          className="relative mt-8 aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl border border-border select-none sm:aspect-[2/1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 animate-in fade-in-0 slide-in-from-bottom-4 [animation-duration:800ms] [animation-delay:500ms] [animation-fill-mode:both] motion-reduce:animate-none"
          onPointerDown={(e) => {
            draggingRef.current = true
            ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
            setFromClientX(e.clientX)
          }}
          onPointerMove={(e) => {
            if (draggingRef.current) setFromClientX(e.clientX)
          }}
          onPointerUp={() => (draggingRef.current = false)}
          onPointerLeave={() => (draggingRef.current = false)}
          onKeyDown={handleKeyDown}
        >
          {/* After (base layer) */}
          <Image
            src={client.hero.afterImage}
            alt="Car after professional detailing"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
            <span className="absolute top-3 right-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              After
            </span>
          </div>

          {/* Before (clipped overlay) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={client.hero.beforeImage}
              alt="Car before detailing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
            <span className="absolute top-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground">
              Before
            </span>
          </div>

          {/* Drag handle */}
          <div
            className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-primary"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <MoveHorizontal className="size-5" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-4 [animation-duration:700ms] [animation-delay:650ms] [animation-fill-mode:both] motion-reduce:animate-none">
          <Button
            render={<a href="#book" />}
            nativeButton={false}
            size="lg"
            className="w-full font-semibold sm:w-auto"
          >
            {client.hero.ctaLabel}
          </Button>
          <Button
            render={<a href="#services" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="w-full font-semibold sm:w-auto"
          >
            View Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
