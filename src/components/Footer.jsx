import { sitemap, socials } from "../constants";
import { ButtonPrimary } from "./Button";

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let's work together today!
                        </h2>
                        <ButtonPrimary
                            href="mailto:heerarana526@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20 reveal-up">
                        <div>
                            <p className="mb-2">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) =>
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) =>
                                    <li key={key}>
                                        <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>



                </div>

                <div className="flex items-center justify-between pt-10 pb-8">
                    <a href="" className="">
                        <img src="/images/logo.png" width={100} height={80} alt="Logo" />
                    </a>
                    <p className="text-zinc-500 text-sm">
                        &copy; 2025 <span className="text-zinc-200">heerarana</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;