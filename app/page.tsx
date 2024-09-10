import NavBar from "@/components/common/NavBar";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";
import TechPatners from "@/components/TechPatners";
import Hero from "@/components/ui/Hero";
import Notification from "@/components/ui/Notification";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full h-[950px] bg-gray-100">
        <NavBar />
        <Notification />
        <Hero />
      </div>

      <HowItWorks />
      <JoinUs />
      <TechPatners />
      <section className="container mx-auto px-20 py-20">

      </section>
    </main>
  );
}
