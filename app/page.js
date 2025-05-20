import About from "@/components/About";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Events/>
      <Speakers />
      <SponsorsSection/>
    </main>
  );
}
