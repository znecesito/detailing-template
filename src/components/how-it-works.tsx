import client from "@/client"

export function HowItWorks() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Three simple steps to a cleaner ride.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {client.howItWorks.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xl font-bold text-primary">
                {step.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-pretty text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
