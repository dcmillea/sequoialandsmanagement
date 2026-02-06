import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Alpine",
    location: "Central Coast, CA",
    image: "/projects/1.jpg",
    description:
      "5.51 acres of Coast Live Oak woodland with boulder outcroppings and abundant wildlife. Cleanup and restoration removed hazardous waste and invasive plants while reducing extreme fuel loads.",
    tags: ["5.51 Acres", "Cleanup", "Invasives Removed", "Fuel Reduction", "Habitat Recovery"],
  },
  {
    title: "Meadow View",
    location: "Sequoia & Kings Canyon National Park",
    image: "/projects/2.jpg",
    description:
      "Two historic cabins, mature Sugar Pines, a tributary to Azalea Creek, and commanding meadow and backcountry views. Completed a first-of-its-kind land exchange with the U.S. National Park Service.",
    tags: ["Historic Cabins", "Land Exchange", "Sugar Pines", "Riparian"],
  },
  {
    title: "KNP Projects",
    location: "Sequoia & Kings Canyon National Park",
    image: "/projects/3.jpg",
    description:
      "Five projects within park boundaries focused on stewardship, preservation, and historic structure rehabilitation across sensitive forest and riparian landscapes.",
    tags: ["5 Projects", "Stewardship", "Preservation", "Rehabilitation"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-foreground sm:text-lg">
              A look at recent stewardship and restoration work across the lands
              we care for.
            </p>
          </div>

          <Button asChild variant="outline" className="border-border">
            <Link href="/projects" className="flex items-center gap-2">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="
                group overflow-hidden rounded-2xl border border-border bg-card shadow-sm
                transition hover:shadow-md
              "
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-evergreen" />
                  <span>{p.location}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-muted text-evergreen"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-evergreen hover:text-primary transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA band */}
        <div className="mt-14 rounded-2xl border border-border bg-muted p-8 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-foreground">
                Interested in conserving and caring for your land?
              </h3>
              <p className="mt-2 text-sm text-foreground">
                We’d love to learn about your property and discuss responsible
                stewardship options.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-green-900 text-primary-foreground hover:bg-green-900/90"
              >
                <Link href="/protect-your-land">Protect Your Land</Link>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
