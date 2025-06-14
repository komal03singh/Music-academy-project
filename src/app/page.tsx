import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  );
}
