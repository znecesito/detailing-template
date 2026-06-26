import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import client from "@/client"

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Everything you need to know before you book.
          </p>
        </div>

        <Accordion className="mt-10">
          {client.faq.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
