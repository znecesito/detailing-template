import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from "@/components/how-it-works"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <Testimonials />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
