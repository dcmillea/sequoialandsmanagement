import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  slug: string;
  title: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "creekside-habitat-restoration",
    title: "Creekside Habitat Restoration",
    location: "Central Coast, CA",
    image: "/projects/1.jpg",
    description:
      "Native planting, erosion control, and stewardship planning to support healthy habitat.",
    tags: ["Restoration", "Habitat", "Stewardship"],
    featured: true,
  },
  {
    slug: "forest-health-fuels-reduction",
    title: "Forest Health & Fuels Reduction",
    location: "Foothills Region",
    image: "/projects/2.jpg",
    description:
      "Resilience work designed to reduce risk and support long-term forest recovery.",
    tags: ["Forest Health", "Resilience"],
  },
  {
    slug: "open-space-preservation-plan",
    title: "Open Space Preservation Plan",
    location: "Northern California",
    image: "/projects/3.jpg",
    description:
      "A long-term preservation strategy to protect sensitive areas and wildlife corridors.",
    tags: ["Preservation", "Planning"],
  },
  {
    slug: "riparian-recovery",
    title: "Riparian Recovery",
    location: "Coastal Watershed",
    image: "/projects/4.jpg",
    description:
      "Waterway restoration and bank stabilization to improve habitat and water quality.",
    tags: ["Restoration", "Waterways"],
  },
  {
    slug: "invasive-removal-native-replanting",
    title: "Invasive Removal & Native Replanting",
    location: "Valley Region",
    image: "/projects/5.jpg",
    description:
      "Removing invasive species and replanting native vegetation for stronger ecosystems.",
    tags: ["Restoration", "Native Plants"],
  },
  {
    slug: "meadow-rehabilitation",
    title: "Meadow Rehabilitation",
    location: "Mountain Foothills",
    image: "/projects/6.jpg",
    description:
      "Meadow and soil health improvements to support biodiversity and resilience.",
    tags: ["Stewardship", "Soil Health"],
  },
];

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);

  return (
    <main className="bg-background">
      {/* Top header band */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              A collection of stewardship and restoration work focused on
              preserving land and protecting its natural integrity.
            </p>
          </div>

          {/* Featured project */}
          {featured && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>

                <div className="p-8 sm:p-10">
                  <Badge className="bg-muted text-evergreen hover:bg-muted">
                    Featured
                  </Badge>

                  <h2 className="mt-4 text-2xl font-semibold text-foreground">
                    {featured.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-evergreen" />
                    <span>{featured.location}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-muted text-evergreen"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link
                        href={`/projects/${featured.slug}`}
                        className="flex items-center gap-2"
                      >
                        View project <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                All projects
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse stewardship work by location, focus area, and restoration
                type.
              </p>
            </div>

            <Button asChild variant="outline" className="border-border">
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
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
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-evergreen" />
                    <span>{p.location}</span>
                  </div>

                  <h4 className="mt-3 text-lg font-semibold text-foreground">
                    {p.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-muted text-evergreen"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-evergreen group-hover:text-primary transition-colors">
                    View project <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
