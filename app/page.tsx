import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import OwnerSection from "@/components/OwnerSection";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroVideo />
      <WhatWeDo />
      <FeaturedProjects />
      <OwnerSection />
    </main>
  );
}
