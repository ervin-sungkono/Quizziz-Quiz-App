import { ReactNode } from "react"
import Section from "@/components/common/Section"
import { FaPeopleLine as PeopleIcon } from "react-icons/fa6";
import { MdQueryStats as StatsIcon } from "react-icons/md";
import { IoGameController as GameIcon } from "react-icons/io5";

interface WhyCardProps{
    icon: ReactNode,
    title: string,
    description: string
}

const WhyCard = ({ icon, title, description } : WhyCardProps) => {
    return(
        <div className="py-6 md:py-8 px-4 md:px-6 flex flex-col items-center gap-4 bg-sky-blue text-dark-blue dark:bg-darker-blue dark:text-white rounded-lg w-full sm:w-[360px] md:w-[298px] border hover:border-blue-400 hover:md:scale-105 transition-all duration-300 ease-in-out">
            {icon}
            <div className="flex flex-col gap-2 text-center">
                <h5 className="text-base md:text-lg font-semibold">{title}</h5>
                <p className="text-sm opacity-80">{description}</p>
            </div>
        </div>
    )
}

export default function WhySection(){
    const whyContents = [
        { 
            icon: <PeopleIcon size={64}/>, 
            title: "Knowledge for All Ages", 
            description: "Whether you're a young prodigy or a seasoned veteran, our quizzes cater to all age groups, making learning enjoyable for everyone."
        },
        { 
            icon: <StatsIcon size={64}/>, 
            title: "Track Your Progress", 
            description: "Keep an eye on your progress as you climb the ranks from a curious Novice to a Quiz Expert."
        },
        { 
            icon: <GameIcon size={64}/>, 
            title: "Different Quiz Modes", 
            description: "Choose one out of four different quiz modes and find out which challenges you the most."
        }
    ]

    return(
        <Section id="why-section" className="flex flex-col gap-6 md:gap-8">
            <div className="text-center flex flex-col gap-2">
                <h3 className="text-xl md:text-3xl font-bold">Why Quizziz?💭</h3>
                <p className="opacity-80 text-sm md:text-base">Some reasons why you should use Quizziz</p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
                {whyContents.map((whyItem, index) => (
                    <WhyCard key={index} {...whyItem}/>
                ))}
            </div>
        </Section>
    )
}