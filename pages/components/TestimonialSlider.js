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
                    src="images/testi-user-02.png"
                    alt="web developers oman"
                  />
                </div>
                <div className="testi-prfile-body">
                  <h3>Dr. Naziya</h3>
                  <p>Owner, Ayush Ayurveda Clinic & Al Shifa Hijama Centre</p>
                </div>
              </div>
              <div className="testi-item-body">
                <p>
                  I am beyond grateful for the incredible work that Adventz did
                  for my business, Ayush Ayurveda Clinic. Before we started
                  working with them, we were struggling to gain traction on
                  social media. Our followers and engagement were stagnant, and
                  we were unsure of how to expand our reach.
                </p>
                <p>
                  But as soon as we began working with Adventz, we saw a
                  significant difference. Their strategies were tailored to our
                  specific needs and audience, and they helped us to not only
                  increase our followers but also to engage with our local
                  Arabic audience in a more meaningful way.
                </p>
                <p>
                  Through their targeted content creation, and social media
                  management, our clinic saw a massive expansion in our online
                  presence. Our followers grew significantly, and our engagement
                  skyrocketed. We even saw an increase in patient bookings as a
                  direct result of our improved online presence.
                </p>
              </div>
            </div>
          </div>
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
