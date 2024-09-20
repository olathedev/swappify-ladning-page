import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import GetInTouch from "@/components/GetInTouch";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";
import NewsLetterModal from "@/components/NewsLetterModal";
import TechPatners from "@/components/TechPatners";
import Hero from "@/components/ui/Hero";
import Notification from "@/components/ui/Notification";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full md:h-[950px] bg-hero-bg bg-center bg-cover">
        <div className="w-full h-full bg-white bg-opacity-80">
          <NavBar />
          <Notification />
          <Hero />
        </div>
      </div>

      <HowItWorks />
      <JoinUs />
      <TechPatners />
      <div className="border"></div>
      <GetInTouch />


      <Footer />

    </main>
  );
}
