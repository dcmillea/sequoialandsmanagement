import Link from "next/link";
import { Button } from "@/components/ui/button";

const areas = [
  {
    name: "Northern Redwood Coast",
    description:
      "Coastal forests, steep watersheds, and sensitive habitat corridors. We support stewardship and restoration that respects natural systems and local land character.",
    locations: ["Eureka", "Arcata", "Trinidad", "Fortuna", "Humboldt County"],
  },
  {
    name: "Sierra Foothills & Highlands",
    description:
      "Forest health and long-term land care across foothill and mountain properties. We focus on resilience, restoration, and responsible stewardship practices.",
    locations: [
      "Auburn",
      "Grass Valley",
      "Nevada City",
      "Placerville",
      "El Dorado County",
    ],
  },
  {
    name: "Central Valley & Oak Rangelands",
    description:
      "Working lands and open space management with an emphasis on protecting natural integrity, improving habitat, and supporting healthy landscapes over time.",
    locations: ["Davis", "Woodland", "Vacaville", "Winters", "Yolo County"],
  },
  {
    name: "Central Coast Watersheds",
    description:
      "Creeks, riparian zones, and coastal ecosystems. We help plan and implement restoration work that supports long-term land health and conservation.",
    locations: [
      "San Luis Obispo",
      "Paso Robles",
      "Morro Bay",
      "Atascadero",
      "SLO County",
    ],
  },
];

function AreaBand({
  index,
  name,
  description,
  locations,
}: {
  index: number;
  name: string;
  description: string;
  locations: string[];
}) {
  const isAlt = index % 2 === 1;

  return (
    <section className={isAlt ? "bg-muted" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Title + copy */}
          <div>
            <p className="text-sm font-medium text-evergreen">
              Area {index + 1}
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Request a consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <Link href="/projects">See related projects</Link>
              </Button>
            </div>
          </div>

          {/* Right: Locations card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              Communities & regions we serve
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Examples of nearby areas (not a complete list).
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {locations.map((loc) => (
                <div
                  key={loc}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                >
                  {loc}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              If your property is outside these regions, reach out — we may
              still be able to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AreasWeServePage() {
  return (
    <main className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Areas We Serve
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We work across select regions to provide thoughtful land
              stewardship, preservation, and restoration support.
            </p>
          </div>
        </div>
      </section>

      {/* Big Area Sections */}
      {areas.map((a, idx) => (
        <AreaBand
          key={a.name}
          index={idx}
          name={a.name}
          description={a.description}
          locations={a.locations}
        />
      ))}

      {/* Bottom CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-border bg-muted p-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Not sure if we cover your area?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Tell us where your property is located and what you’re looking to
              accomplish. We’ll let you know the best next step.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline" className="border-border">
                <Link href="/protect-your-land">Protect Your Land</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
