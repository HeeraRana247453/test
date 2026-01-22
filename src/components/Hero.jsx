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
                            {socialLinks.slice(0, 3).map(({ href, icon,alt }, key) =>
                                <a key={key} href={href} target="_blank" className="w-9 h-9 grid place-items-center rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up     bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset">
                                    {/* Ping dot only for Instagram */}
                                    {alt === 'Instagram' && (
                                        <span className="absolute -top-0 -left-0 flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                    )}
                                    {icon}
                                </a>
                            )}
                        </div>
                    </div>

                    <h1 className="hidden lg:block headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
                        Turning Complex Problems into Scalable Software Solutions                    
                    </h1>
                    {/* image for small device */}
                    <div className="block lg:hidden mb-6 mt-4">
                        <figure className="w-full max-w-[480px] mx-auto bg-gradient-to-t from-violet-400 via-25% via-violet-400/40 to-65% rounded-[20px] overflow-hidden reveal-up">
                            {/* <img src="/images/hero1.png"
                            width={656}
                            height={800} alt="Heera Rana"
                            className="w-full" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhnMXpnamU5NjhnNHB1bWNyOTZ3MTBmYmlwdXl3aGxtMDc4N25vbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EZr27ZbJwmjE9PGyLN/giphy.gif" /> */}
                            {/* <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3I0eGt5eTFpeGNpMGR5cjlsYm02cDRwc2h6dTM5ODJuajh3NmdyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/okFG5aJWqRGMYXoKTD/giphy.gif" /> */}
                            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnhmZDR2ejlieHZ2eml6ZXNqbXUwcDRoMG5vcXBsN2pkNTl4bnNnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif" />
                            {/* <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhlbTYxajVzcXl2bzJ0ZnNrdW00a2EwZzlvYzRrdG84OTBqbHJtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/66M6ZwJkTLYikvhrqZ/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhnMXpnamU5NjhnNHB1bWNyOTZ3MTBmYmlwdXl3aGxtMDc4N25vbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/78XCFBGOlS6keY1Bil/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhnMXpnamU5NjhnNHB1bWNyOTZ3MTBmYmlwdXl3aGxtMDc4N25vbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ua7vVw9awZKWwLSYpW/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhnMXpnamU5NjhnNHB1bWNyOTZ3MTBmYmlwdXl3aGxtMDc4N25vbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Qek0hd3NUGJPEBvvzK/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhnMXpnamU5NjhnNHB1bWNyOTZ3MTBmYmlwdXl3aGxtMDc4N25vbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/du3J3cXyzhj75IOgvA/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnJ1Z240cmtvM3g3djB0NDB2cnk1eW40YzR0OWN1djUwdDh4bHFxNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JqmupuTVZYaQX5s094/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NmFvNTd6YTBlc21uNGdyaHRxZzAzaXlqODZ4N2J4MWhyNjk2ZnQyZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uhkgRdrMSnqDBofJru/giphy.gif" /> */}
                            {/* <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXRxdzR2eGlrcnU4b2g5dzlwcDNteXdtZng5dnU3Z2l2ZWM0c3g0dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OLPQ6z2hlHmwFc4Hso/giphy.gif" /> */}
                        </figure>
                    </div>
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