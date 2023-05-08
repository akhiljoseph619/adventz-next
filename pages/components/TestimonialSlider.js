import React from 'react';
var $ = require('jquery');
if (typeof window !== 'undefined') {
  // Client-side-only code
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function TestimonialSlider() {
  return (
    <div className="testimonial-cover">
      <div className="testimonial-hd">
        <p>Testimonials</p>
        <h2>
          We are trusted by our <span className="color-red">clients</span>
        </h2>
      </div>
      <div className="testi-carousel">
        <OwlCarousel
          id="carousel-testimonial"
          className="owl-carousel owl-theme"
          items={1}
          autoplay={true}
          loop
        >
          <div className="item">
            <div className="testi-item">
              <div className="testi-prfile-cover">
                <div className="testi-prfile-pic">
                  <img
                    src="images/testi-user-01.jpg"
                    alt="web developers oman"
                  />
                </div>
                <div className="testi-prfile-body">
                  <h3>Moza Al Rahbi</h3>
                  <p>TMTEC - Followup Manager</p>
                </div>
              </div>
              <div className="testi-item-body">
                <p>
                  I'd like to share with you my feedback on your services that
                  offered to us. <br /> <br />
                  You have really a great team, making amazing things together.
                  I really love and appreciate the way that you reply to us
                  quickly. Delivering the required ideas in the best possible
                  ways is the factor which allow us continue working together
                  and maintain a long relationship.
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
