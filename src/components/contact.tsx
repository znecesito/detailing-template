'use client'

import { useActionState, useState } from 'react'
import { MapPin, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { PhoneLink } from '@/components/phone-link'
import { submitBooking } from '@/app/actions'
import client from '@/client'

export function Contact() {
  const [state, formAction, pending] = useActionState(submitBooking, { success: false })
  const [vehicle, setVehicle] = useState('')

  return (
    <section id="book" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Book Your Appointment
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Tell us about your vehicle and we&apos;ll confirm your slot within
            the hour.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              {state.success ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Request received!
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. We&apos;ll call you shortly at
                    the number you provided to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form action={formAction}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Full name</FieldLabel>
                      <Input id="name" name="name" placeholder="Jane Doe" required />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="vehicle">Vehicle type</FieldLabel>
                      {/* hidden input so formData includes the vehicle value */}
                      <input type="hidden" name="vehicle" value={vehicle} />
                      <Select onValueChange={setVehicle}>
                        <SelectTrigger id="vehicle" className="w-full">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="date">Preferred date</FieldLabel>
                      <Input id="date" name="date" type="date" required />
                    </Field>

                    {state.error && (
                      <p className="text-sm text-destructive">{state.error}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-semibold"
                      disabled={pending}
                    >
                      {pending ? 'Sending…' : 'Request Appointment'}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            {client.googleMapsEmbedUrl && !client.googleMapsEmbedUrl.includes('placeholder') ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border sm:aspect-auto sm:flex-1">
                <iframe
                  src={client.googleMapsEmbedUrl}
                  className="h-full min-h-64 w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="relative flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border bg-muted text-center sm:aspect-auto sm:min-h-64 sm:flex-1">
                <MapPin className="size-8 text-primary" />
                <p className="font-medium text-foreground">Map goes here</p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Add googleMapsEmbedUrl to client.ts
                </p>
              </div>
            )}

            <Card>
              <CardContent className="flex flex-col gap-3 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{client.serviceArea}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-foreground">
                  <PhoneLink className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
