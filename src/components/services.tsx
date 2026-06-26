import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import client from "@/client"

export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Services & Pricing
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Transparent pricing by vehicle size. No surprises, no hidden fees.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {client.services.map((tier, i) => {
            const featured = i === 1
            const prices = [
              { type: "Sedan", price: tier.pricing.sedan },
              { type: "SUV",   price: tier.pricing.suv },
              { type: "Truck", price: tier.pricing.truck },
            ]
            return (
              <Card
                key={tier.name}
                className={cn(
                  "relative flex flex-col",
                  featured &&
                    "mt-3 overflow-visible border-primary shadow-lg shadow-primary/10 lg:mt-0"
                )}
              >
                {featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 font-semibold">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-5">
                  <ul className="flex flex-col gap-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Separator />

                  <div className="mt-auto flex flex-col gap-2">
                    {prices.map((row) => (
                      <div
                        key={row.type}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{row.type}</span>
                        <span className="font-semibold text-foreground">
                          {row.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    render={<a href="#book" />}
                    nativeButton={false}
                    className="w-full font-semibold"
                    variant={featured ? "default" : "outline"}
                  >
                    Book {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
