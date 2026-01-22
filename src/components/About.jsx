import { aboutItems } from "../constants"

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up backdrop-blur-xl shadow-[inset_0_1px_9px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset">
                <div align="center">
                    <img src="https://readme-typing-svg.demolab.com/?lines=Full+Stack+Developer;MERN+%7C+WordPress+%7C+Cloud;Open+Source+Contributor;Building+Scalable+Products&color=pink&center=true&width=350&height=65"/>
                </div>
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    <strong>Welcome!, I’m Heera Rana</strong><br/>
A passionate full-stack web developer with expertise in React.js, Node.js, Express, MongoDB, PHP, MySQL, Redux Toolkit, Tailwind CSS, Socket.io, and Cloudinary API. <br/>
I specialize in building scalable and high-performance web applications with a strong focus on backend development, real-time communication, and seamless user experiences.<br/>
I love turning ideas into fully functional web solutions. I have experience integrating payment gateways, authentication systems, and API-driven services, ensuring efficiency and security.<br/>
I’m constantly learning and evolving, eager to contribute to innovative projects and collaborate with like-minded developers.                   </p>
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