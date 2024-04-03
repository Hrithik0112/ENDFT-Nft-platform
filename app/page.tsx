import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="px-20 bg-[#141944] pt-10">
      <Navbar />
      <Hero />
    </main>
  );
}
