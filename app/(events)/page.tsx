import Hero from "@/components/Home/Hero";
import LatestEvents from "@/components/Home/LatestEvents";

export default function Home() {
  return (
    <main className="self-container">
      <Hero />
      <LatestEvents/>
    </main>
  );
}