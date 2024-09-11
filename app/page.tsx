import Footer from "@/components/common/Footer";
import AppartmentIcon from "@/components/common/icons/AppartmentIcon";
import ArrowRight from "@/components/common/icons/ArrowRight";
import MailIcon from "@/components/common/icons/MailIcon";
import PhoneIcon from "@/components/common/icons/PhoneIcon";
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
      <div className="border"></div>
      <section className="container mx-auto px-20 py-10 flex gap-24">
          <div className="w-1/2 flex flex-col gap-16">
              <header>
                <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
                <p className="text-2xl">Questions? Comments? Feedback? We’d love to hear from you</p>
              </header>

              <div className="flex flex-col gap-6 text-xl">
                <div className="flex gap-6 items-center">
                  <span>
                    <AppartmentIcon />
                  </span>
                  Swapify HQ, Tallinn, Estonia
                </div>

                <div className="flex gap-6 items-center">
                  <span>
                    <PhoneIcon />
                  </span>
                  +372 123 4567
                </div>

                <div className="flex gap-6 items-center">
                  <span>
                    <MailIcon />
                  </span>
                  support@swapify.com
                </div>
              </div>
          </div>
          <div className="w-1/2">

          <form action="" className="w-full flex flex-col gap-4">
              <div className="w-full">
                  <label className="text-lg text-[#181D17]">Name</label>
                  <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your name" />
              </div>

              <div className="w-full">
                  <label className="text-lg text-[#181D17]">Email</label>
                  <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your email address" />
              </div>

              <div className="w-full">
                  <label className="text-lg text-[#181D17]">Phone Number</label>
                  <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your Phone number" />
              </div>

                <div className="w-full flex flex-col">
                <label className="text-lg text-[#181D17]">Message</label>
                <textarea name="" id="" placeholder="Enter your message" className="h-[139px] border border-[#5F5F53] rounded-lg p-3 py-3"></textarea>

                </div>

                <button className="bg-[#50644C] py-3 px-6 rounded-xl text-white flex justify-center items-center gap-3 text-lg">Send message
        <ArrowRight />
      </button>
          </form>

          </div>
      </section>
      

      <Footer />
    </main>
  );
}
