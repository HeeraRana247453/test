import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";
import { gsap } from "gsap";

// 3D Flip Effect on Hover
const flipCard = (card, rotate) => {
  gsap.to(card, {
    rotateY: rotate,
    duration: 0.9,
    ease: "power2.out",
  });
};

const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our customers say?</h2>

        {/* Parent div needs perspective for 3D effect */}
        <div className="reviews-container grid grid-cols-1 sm:grid-cols-2  gap-4"
          style={{ perspective: "1000px" }} // Enables 3D effect
        >
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <div key={key} className="review-card-wrapper"
              onMouseEnter={(e) => flipCard(e.currentTarget, 360)} // Flip on hover
              onMouseLeave={(e) => flipCard(e.currentTarget, 0)} // Reset on leave
              style={{
                transformStyle: "preserve-3d", // Important for 3D rotation
                transition: "transform 0.8s ease-out", // Smooth transition
              }}
            >
              <ReviewCard content={content} name={name} imgSrc={imgSrc} company={company} classes="review-card"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
