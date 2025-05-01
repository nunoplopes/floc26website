import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";

export const metadata = {
  title: 'Home',
  description: 'Welcome to FLoC 2026 - The Federation of Logic Conference. Join us in Lisbon, Portugal for a premier event in logic and computer science.',
  openGraph: {
    title: 'FLoC 2026 - Home',
    description: 'Welcome to FLoC 2026 - The Federation of Logic Conference. Join us in Lisbon, Portugal for a premier event in logic and computer science.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <Speakers />
      <Events/>
    </main>
  );
}
