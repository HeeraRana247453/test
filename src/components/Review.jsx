import { reviews } from "../constants"
import ReviewCard from "./ReviewCard"

// Animation packages
import { ReactLenis } from 'lenis/react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// Register GSAP Plugin
gsap.registerPlugin(useGSAP,ScrollTrigger);


const Review = () => {

    useGSAP(()=>{
        gsap.to('.scrub-slide',{
            scrollTrigger:{
                trigger:".scrub-slide",
                start:'-200% 80%',
                end:'400% 80%',
                scrub:true
            },
            x:'-1000'
        })
    });

  return (
    <section id="reviews" className="section overflow-hidden">
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                What our customers say? 
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content,name,imgSrc,company},key)=> 
                  <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company} classes="reveal-up" />
                )}
            </div>

        </div>
    </section>
  )
}

export default Review