import Image from "next/image"
import client from "@/client"

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            A look at the results we deliver, one vehicle at a time.
          </p>
        </div>

        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] lg:columns-3">
          {client.gallery.map((src, i) => (
            <div
              key={src}
              className="mb-4 overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={src}
                alt={`Detailing work photo ${i + 1}`}
                width={600}
                height={i % 3 === 0 ? 800 : i % 3 === 1 ? 500 : 650}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
