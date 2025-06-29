import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Skills from "./components/Skills"
import Work from "./components/Work"

// Animation packages
import { ReactLenis } from 'lenis/react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// Register GSAP Plugin
gsap.registerPlugin(useGSAP,ScrollTrigger);


const App = () => {

  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub:true
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })
  })
  
  return (
    <ReactLenis root>

      {/* Glassy background */}
      <div className="fixed inset-0 z-[-10] bg-black/50 backdrop-blur-lg" />

      {/* RGB animated floating spots */}
      <div className="fixed top-[10%] left-[20%] w-[300px] h-[300px] bg-red-500 rounded-full opacity-25 blur-[100px] animate-float1 z-[-5]" />
      <div className="fixed top-[40%] left-[70%] w-[300px] h-[300px] bg-green-400 rounded-full opacity-25 blur-[100px] animate-float2 z-[-5]" />
      <div className="fixed top-[80%] left-[30%] w-[300px] h-[300px] bg-blue-500 rounded-full opacity-25 blur-[100px] animate-float3 z-[-5]" />


      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App