import { socialLinks } from "../constants/SocialLinks"

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">

                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                        Contact me for collaboration
                    </h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                        Reach out today to discuss your project needs and start collaborating on something amazing!
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        {socialLinks.map(({ href, icon }, key) =>
                            <a key={key} href={href} target="_blank" className="w-12 h-12 grid place-items-center rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up     bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_6px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset">
                                {icon}
                            </a>
                        )}
                    </div>
                </div>

                <form action="https://getform.io/f/arooyvqb" method="POST" className="xl:pl-10 2xl:pl-20">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4 reveal-up">
                            <label htmlFor="name" className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                placeholder="eg: Heera Rana"
                                className="text-field"
                                required />
                        </div>

                        <div className="mb-4 reveal-up">
                            <label htmlFor="email" className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="eg: username123@gmail.com"
                                className="text-field"
                                required />
                        </div>
                    </div>

                    <div className="mb-4 reveal-up">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea name="message"
                            id="message"
                            placeholder="Hi!"
                            className="text-field resize-y min-h-32 max-h-80"
                            required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">Submit</button>
                </form>

            </div>
        </section>
    )
}

export default Contact