import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
  { src: "/hero/1.jpg", alt: "Redwood forest canopy" },
  { src: "/hero/2.jpg", alt: "Mountain valley landscape" },
  { src: "/hero/3.jpg", alt: "River through protected land" },
];

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        {/* Text */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Preserving land, restoring ecosystems, and safeguarding nature for
            the future.
          </h1>
          <p className="mt-4 text-base text-foreground sm:text-lg">
            <Link href="/" className="text-green-900 hover:underline">
              Sequoia Lands Management
            </Link>{" "}
            helps property owners conserve, restore, and responsibly manage land
            through long-term planning and local expertise.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-green-900 text-primary-foreground hover:bg-green-900/90"
            >
              <Link href="/protect-your-land">Protect Your Land</Link>
            </Button>
            <Button asChild variant="outline" className="border-border">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Carousel
            opts={{ loop: true }}
            className="relative mx-auto max-w-5xl"
          >
            <CarouselContent>
              {heroImages.map((img) => (
                <CarouselItem key={img.src}>
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 900px"
                      />
                      {/* subtle gradient for polish */}
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="left-3 bg-white text-foreground border border-border hover:bg-white hover:text-primary shadow-sm" />
            <CarouselNext className="right-3 bg-white text-foreground border border-border hover:bg-white hover:text-primary shadow-sm" />
          </Carousel>

          {/* Tiny caption row (optional, nice touch) */}
          <div className="mx-auto mt-3 max-w-5xl text-center text-xs text-muted-foreground">
            Land conservation • habitat restoration • responsible stewardship
          </div>
        </div>
      </div>
    </section>
  );
}
