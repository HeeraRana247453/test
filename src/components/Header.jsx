import { useState } from "react"
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src="/images/logo.png" width={150} height={150} alt="Heera Rana" />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden    backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),_0_1px_0px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset" onClick={() => setNavOpen((navOpen) => !navOpen)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>
            </div>
        </header>
    )
}

export default Header