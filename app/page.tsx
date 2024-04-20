import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopColllection from "@/components/TopColllection";
import Trending from "@/components/Trending";
import Wallet from "@/components/Wallet";

export default function Home() {
  return (
    <main className="px-20 bg-[#141944] pt-10">
      <Navbar />
      <Hero />
      <Wallet />
      <Trending />
      <TopColllection/>
    </main>
  );
}
