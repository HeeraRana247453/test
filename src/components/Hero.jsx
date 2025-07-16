import { socialLinks } from "../constants/SocialLinks"
import { resumeLink } from "../constants"
import {ButtonOutline, ButtonPrimary} from "./Button"

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/avatar-2.png"
                                width={40}
                                height={40} alt="Heera Rana Portrait"
                                className="img-cover" />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>

                        <div className="flex items-center gap-2 mt-auto">
                            {socialLinks.slice(0, 2).map(({ href, icon }, key) =>
                                <a key={key} href={href} target="_blank" className="w-9 h-9 grid place-items-center rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up     bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset">
                                    {icon}
                                </a>
                            )}
                        </div>
                    </div>

                    <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
                    Crafting Scalable, Future-Ready Websites that Drive Innovation                    </h1>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary href={`${resumeLink}`} label="Download CV" icon="download" classes="reveal-up" />

                        <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" classes="reveal-up" />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-violet-400 via-25% via-violet-400/40 to-65% rounded-[60px] overflow-hidden reveal-up">
                        <img src="/images/hero1.png"
                        width={656}
                        height={800} alt="Heera Rana"
                        className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero