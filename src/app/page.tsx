import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/features/home/section/Hero";
import Overview from "@/features/home/section/Overview";
import Pricing from "@/features/home/section/Pricing";
import Profile from "@/features/home/section/Profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Profile />
      <Pricing />
      <Footer />
    </>
  );
}
