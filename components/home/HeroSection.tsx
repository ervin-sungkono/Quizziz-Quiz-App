import Image from "next/image"
import Section from "@/components/common/Section"
import Button from "@/components/common/buttons/Button"

export default function HeroSection(){
    return(
        <Section id="hero-section" size="large" className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="hero-img min-w-[260px] w-10/12 md:w-5/12">
                <Image 
                    src={"/hero_img.png"} 
                    alt="Hero Image"
                    width={507}
                    height={413}
                    quality={100}
                    priority
                />
            </div>
            <div className="flex flex-col items-center md:items-start gap-6 md:w-7/12">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-start whitespace-nowrap">Test Your Knowledge,<br/>Compete With Others</h2>
                    <p className="text-sm md:text-base text-center md:text-start opacity-80">Quizziz helps you improve your knowledge while earning points to compete in a leaderboard system.</p>
                </div>
                <div className="flex gap-4">
                    <Button>Get Started</Button>
                    <Button outline>Quizziz Demo</Button>
                </div>
            </div>
        </Section>
    )
}