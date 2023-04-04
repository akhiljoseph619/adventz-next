import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const whatWeResponsive = {
  0: {
    items: 1,
    slideBy: 1,
  },
  576: {
    items: 1,
    slideBy: 1,
  },
  768: {
    items: 2,
    slideBy: 2,
  },
  992: {
    items: 3,
    slideBy: 3,
  },
};

export default function WhatWeSlider() {
  return (
    <div className="what-we-carousel">
      <OwlCarousel
        className="owl-theme"
        nav={true}
        dots={false}
        navText={false}
        responsive={whatWeResponsive}
      >
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-05.png"
                  alt="Web Development oman"
                />
              </i>
            </figure>
            <figcaption>
              <h3>E-Commerce Services</h3>
              <div className="what-we-scroll">
                <h4>
                  We Provide Premium Quality Custom <br />
                  E-Commerce Solution
                </h4>
                <ul>
                  <li>Coupon & Cart System</li>
                  <li>E-commerce marketing</li>
                  <li>Payment Gateway Integration</li>
                  <li>Shipping API Integration</li>
                  <li>Business-to-Consumer</li>
                  <li>Affiliates Programs</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="E-commerce-services.php"
              >
                Explore E-Commerce Services
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-02.png"
                  alt=" e commerce website services"
                />
              </i>
            </figure>
            <figcaption>
              <h3>Branding Services</h3>
              <div className="what-we-scroll">
                <h4>Helping brands become bigger, brighter and bolder</h4>
                <ul>
                  <li>Brand Strategy</li>
                  <li>Custom Logo Design Services</li>
                  <li>Marketing Collateral Design</li>
                  <li>Product Packaging Design</li>
                  <li>Brand Guidelines</li>
                  <li>Brand Advertising</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="branding-services.php"
              >
                Explore Branding Services
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-03.png"
                  alt="branding services oman"
                />
              </i>
            </figure>
            <figcaption>
              <h3>Website Services</h3>
              <div className="what-we-scroll">
                <h4>
                  With an eye for detail and a user-centred design approach
                </h4>
                <ul>
                  <li>Domain Name Registration</li>
                  <li>Website Design+Development Services</li>
                  <li>Copywriting & Content</li>
                  <li>Website Hosting Services</li>
                  <li>Website Optimization Services</li>
                  <li>Website Maintenance Services</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="website-services.php"
              >
                Explore Website Services
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-01.png"
                  alt="website service oman"
                />
              </i>
            </figure>
            <figcaption>
              <h3>Marketing Services</h3>
              <div className="what-we-scroll">
                <h4>Applying best practice principles to engage users</h4>
                <ul>
                  <li>SEO-Search Engine Optimization Services</li>
                  <li>Google Advertising Services</li>
                  <li>Social Media Marketing Services</li>
                  <li>Content Marketing Services</li>
                  <li>E-mail Marketing</li>
                  <li>Video Production Services</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="marketing-services.php"
              >
                Explore Marketing Services
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-04.png"
                  alt="digital marketing services"
                />
              </i>
            </figure>
            <figcaption>
              <h3>Mobile App Services</h3>
              <div className="what-we-scroll">
                <h4>We build scalable and smart mobile app solutions</h4>
                <ul>
                  <li>Prototyping</li>
                  <li>Native App Development</li>
                  <li>Ionic Development Services</li>
                  <li>Android App Development Services</li>
                  <li>Hybrid Application Development Services</li>
                  <li>iPad App Development Services</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="mobile-app-services.php"
              >
                Explore Mobile App Services
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="what-we-item">
            <figure>
              <i>
                <img
                  src="images/service-icon-05.png"
                  alt="mobile app development services oman"
                />
              </i>
            </figure>
            <figcaption>
              <h3>E-Commerce Services</h3>
              <div className="what-we-scroll">
                <h4>
                  We Provide Premium Quality Custom <br />
                  E-Commerce Solution
                </h4>
                <ul>
                  <li>Coupon & Cart System</li>
                  <li>E-commerce marketing</li>
                  <li>Payment Gateway Integration</li>
                  <li>Shipping API Integration</li>
                  <li>Business-to-Consumer</li>
                  <li>Affiliates Programs</li>
                </ul>
              </div>
            </figcaption>
            <div className="what-we-footer">
              <a
                className="btn btn-explore btn-shine"
                href="E-commerce-services.php"
              >
                Explore E-Commerce Services
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
