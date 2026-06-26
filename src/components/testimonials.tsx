import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import client from "@/client"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            What Customers Say
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Real reviews from verified Google customers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {client.testimonials.map((review) => (
            <Card key={review.author} className="flex flex-col">
              <CardHeader>
                <Stars count={review.rating} />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="flex-1 text-pretty text-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border pt-3 text-sm">
                  <span className="font-semibold text-foreground">
                    {review.author}
                  </span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
