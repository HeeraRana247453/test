import { aboutItems } from "../constants"

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    <strong>Welcome!, I’m Heera Rana</strong><br/>
                    A passionate web developer with expertise in both front-end and back-end technologies. I create dynamic, user-friendly websites and applications. With a strong focus on both design and performance, I’m committed to delivering seamless digital experiences. I’m eager to bring my skills and fresh ideas to a collaborative team, while continuously growing as a developer.                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) =>
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                    <span className="text-violet-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        )}
                        <img src="/images/favicon.png" alt="Logo" width={35} height={20} className="ml-auto md:w-[40px] md:h-[35px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About