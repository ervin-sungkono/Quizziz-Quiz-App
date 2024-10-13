import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HeroSection"
import WhySection from "@/components/home/WhySection"
import DefaultLayout from "@/components/layout/DefaultLayout"

export default function HomePage() {
  return (
    <DefaultLayout>
        <HeroSection/>
        <AboutSection/>
        <WhySection/>
    </DefaultLayout>
  )
}
