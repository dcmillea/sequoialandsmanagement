import { TreePine, Leaf, Mountain } from "lucide-react";

const items = [
  {
    title: "Preservation",
    description:
      "We protect land from degradation while maintaining its natural integrity and ecological balance.",
    icon: TreePine,
  },
  {
    title: "Restoration",
    description:
      "We restore ecosystems through thoughtful land care, habitat improvement, and environmental stewardship.",
    icon: Leaf,
  },
  {
    title: "Stewardship",
    description:
      "We responsibly manage land long-term, ensuring it remains healthy, resilient, and protected.",
    icon: Mountain,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-base text-foreground sm:text-lg">
            Our work focuses on preserving and restoring land through
            responsible, long-term stewardship.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                bg-card
                border border-border
                p-8
                shadow-sm
                transition
                hover:shadow-md
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-muted
                "
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
