import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Services } from "@/components/sections/Services";
import { CoreValues } from "@/components/sections/CoreValues";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Media } from "@/components/sections/Media";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Media />
        <AboutUs />
        <Services />
        <CoreValues />
        <FeaturedProjects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
