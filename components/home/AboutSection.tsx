import Section from "../common/Section";

export default function AboutSection(){
    return(
        <Section id="about-section" color="secondary">
            <div className="max-w-5xl flex flex-col gap-6 text-center mx-auto">
                <h3 className="text-xl md:text-3xl font-semibold">About Us</h3>
                <div className="flex flex-col gap-4">
                    <p className="text-sm md:text-base">
                        Welcome to Quizziz, the ultimate quiz app that takes your knowledge to new heights! Whether you&lsquo;re a trivia enthusiast or just love challenging yourself with brain-teasing questions, Quizziz is the perfect destination for you. Quizziz offers an array of exciting quiz modes to keep you entertained. Choose between the classic Multiple Choice or the intriguing True/False format to match your preferences. Additionally, take part in our daily quiz and prove your mettle as the quizmaster!
                    </p>
                    <p className="text-sm md:text-base">
                        Stay on top of your quiz prowess with our Statistic Page. Monitor your total questions answered, correct answer percentage, daily quizzes completed, and the total number of quizzes taken. Witness your knowledge grow as you conquer one quiz after another.
                    </p>
                </div>
            </div>
        </Section>
    )
}