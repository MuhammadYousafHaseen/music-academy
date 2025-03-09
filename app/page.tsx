import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between  bg-black/[0.96] antialiased bg-grid-white/[0.1]">
      {/* <h1 className="text-4xl font-bold text-center dark:text-white">Haseen Music Academy</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpComingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
