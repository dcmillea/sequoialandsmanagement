import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import OwnerSection from "@/components/OwnerSection";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <OwnerSection />
    </main>
  );
}
