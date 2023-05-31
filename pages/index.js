import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Carousel, Modal } from 'react-bootstrap';
import WhatWeSlider from './components/WhatWeSlider';
import TrustSection from './components/TrustSection';
import TestimonialSlider from './components/TestimonialSlider';
import BrandsSlider from './components/BrandsSlider';
import Contactform from './components/Contactform';

export default function Home() {
  // Bootstra carousel hover pause
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <>
        <Modal
          className="consultaion-modal"
          show={showModal}
          onHide={handleCloseModal}
        >
          <Modal.Body>
            <button className="btn-modal-close" onClick={handleCloseModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="contact-form">
              <div className="co-form-hd">
                <p>contact</p>
                <h2>
                  Let's talk about your{' '}
                  <span className="color-red">project</span>
                </h2>
              </div>
              <div className="co-form-body">
                <div id="alert" />
                <Contactform />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
      <section className="banner-sec">
        <div className="banner-bk-graphics">
          <div className="banner-bk-ptc banner-bk-ptc-01">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              className="banner-bk-ptc-svg"
            >
              <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
            </svg>
          </div>
        </div>
        <div className="container-xl">
          <div className="banner-cover">
            <div className="banner-gra-col">
              <div className="banner-graphic-cover">
                <Carousel
                  pause={!isHovering}
                  fade
                  controls={false}
                  indicators={false}
                >
                  <Carousel.Item>
                    <div className="banner-graphic">
                      <img
                        src="images/slider-img.png"
                        alt="Website Development Oman"
                      />
                    </div>
                    <div className="banner-shape-cover">
                      <div className="banner-shape banner-shape-01">
                        <img
                          src="images/banner-rec-shape-01.png"
                          alt="Website Development Oman"
                        />
                      </div>
                      <div className="banner-shape banner-shape-02">
                        <img
                          src="images/banner-rec-shape-02.png"
                          alt="Seo and digital marketing "
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="banner-graphic">
                      <a
                        href="https://www.google.com/partners/agency?id=6629473271"
                        target="_blank"
                      >
                        <img
                          src="images/slider-google-img.png"
                          alt="Website Development Oman"
                        />
                      </a>
                    </div>
                    <div className="banner-shape-cover">
                      <div className="banner-shape banner-shape-01">
                        <img
                          src="images/banner-rec-shape-google-01.png"
                          alt="Website Development Oman"
                        />
                      </div>
                      <div className="banner-shape banner-shape-02">
                        <img
                          src="images/banner-rec-shape-google-02.png"
                          alt="Seo and digital marketing "
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="banner-graphic">
                      <a href="">
                        <video
                          playsinline={true}
                          autoPlay={true}
                          loop={true}
                          muted={true}
                          poster="images/slider-google-img.jpg"
                        >
                          <source
                            src="videos/slider-google-vid.webm"
                            type="video/webm"
                          />
                        </video>
                      </a>
                    </div>
                    <div className="banner-shape-cover">
                      <div className="banner-shape banner-shape-01">
                        <img
                          src="images/banner-rec-shape-google-01.png"
                          alt="Website Development Oman"
                        />
                      </div>
                      <div className="banner-shape banner-shape-02">
                        <img
                          src="images/banner-rec-shape-google-02.png"
                          alt="Seo and digital marketing "
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>

                <div className="parallax-eff banner-particle">
                  <div className="particle particle-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <circle cx={16} cy={16} r={13.1} />
                    </svg>
                  </div>
                  <div className="particle particle-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="particle particle-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <circle cx={16} cy={16} r={13.1} />
                    </svg>
                  </div>
                  <div className="particle particle-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="particle-svg"
                    >
                      <path className="st0" d="M3.2 3.2H28.9V28.9H3.2z" />
                    </svg>
                  </div>
                  <div className="particle particle-05">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="particle-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                </div>
                <div className="banner-shape-cover">
                  <div className="banner-shape banner-shape-03">
                    <div className="banner-rect-shape"></div>
                  </div>
                  <div className="banner-shape banner-shape-04"></div>
                </div>
              </div>
            </div>
            <div className="banner-con-col">
              <Carousel
                pause={!isHovering}
                fade
                controls={false}
                indicators={false}
              >
                <Carousel.Item>
                  <div className="banner-content">
                    <h1>
                      Expand Your
                      <span className="color-black">Digital</span> Presence
                    </h1>
                    <p>
                      We create one-of-a-kind, custom-made experiences for our
                      clients through digital marketing & innovative concepts
                    </p>
                    <Link
                      className="btn btn-service btn-shine"
                      href="#services"
                    >
                      Explore Services
                    </Link>
                    <Link
                      className="btn btn-consultation btn-shine"
                      href=""
                      onClick={handleShowModal}
                    >
                      Get Free Consultation
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="banner-content">
                    <h1>
                      <span className="color-black">
                        Growth hacking through omnichannel
                      </span>{' '}
                      marketing
                    </h1>
                    <p>Synergizing marketing channels for exponential growth</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>

      <section className="what-we-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="what-we-hd">
                <p>What we do</p>
                <h2 id="services">
                  Elevating Brands through innovation in Digital Transformation.
                </h2>
              </div>
            </div>
            <div className="col-12">
              <WhatWeSlider />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="testimonial-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-lg-6">
              <TestimonialSlider />
            </div>
            <div className="col-12 col-lg-6">
              <div className="testi-graph">
                <div className="testi-center">
                  <img
                    src="images/tesi-profile.png"
                    alt="digital marketing agency Oman"
                  />
                </div>
                <div className="testi-line testi-line-01">
                  <div className="dot-pulse"></div>
                </div>
                <div className="testi-line testi-line-02">
                  <div className="dot-pulse"></div>
                  <div className="testi-profile">
                    <img
                      src="images/tesi-profile-01.png"
                      alt="Social Media Marketing"
                    />
                  </div>
                </div>
                <div className="testi-line testi-line-03">
                  <div className="dot-pulse"></div>
                  <div className="testi-profile profile-01">
                    <img
                      src="images/tesi-profile-02.png"
                      alt="digital services oman"
                    />
                  </div>
                  <div className="testi-profile testi-profile-03-02">
                    <img
                      src="images/tesi-profile-03.png"
                      alt="Online Marketing Company Oman"
                    />
                  </div>
                </div>
                <div className="testi-line testi-line-04">
                  <div className="dot-pulse"></div>
                  <div className="testi-profile">
                    <img
                      src="images/tesi-profile-04.png"
                      alt="Online Marketing"
                    />
                  </div>
                </div>
                <div className="testi-line testi-line-05"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="brands-hd">
                <h2>Brands We've worked with</h2>
              </div>
            </div>
            <div className="col-12">
              <BrandsSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-sec">
        <div className="parallax-eff pencil-box-cover">
          <div className="layer" data-depth="0.2">
            <div className="pencil-box">
              <img src="images/pencil-box.png" alt="digital marketing " />
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contact-form">
                <div className="co-form-hd">
                  <p>contact</p>
                  <h2>
                    Let's talk about your{' '}
                    <span className="color-red">project</span>
                  </h2>
                </div>
                <div className="co-form-body">
                  <div id="alert" />
                  <Contactform />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="contact-add-cover">
                <div className="address-cover">
                  <div className="col-address">
                    <h3>Oman</h3>
                    <p>
                      Ghala <br />
                      Sultanate of Oman
                    </p>
                  </div>
                  <div className="col-address">
                    <h3>Qatar</h3>
                    <p></p>
                  </div>
                </div>
                <ul className="contact-connect">
                  <li>
                    <span className="con-icon">
                      <img
                        src="images/con-icon-01.png"
                        alt="seo services muscat"
                      />
                    </span>
                    + (968) - 2422 9315
                  </li>
                  <li>
                    <span className="con-icon">
                      <img
                        src="images/con-icon-01.png"
                        alt="search engine optimization"
                      />
                    </span>
                    + (968) - 9126 9531{' '}
                  </li>
                  <li>
                    <span className="con-icon">
                      <img
                        src="images/con-icon-02.png"
                        alt="IT Companies Oman"
                      />
                    </span>
                    <a href="mailto:info@adventz.net">info@adventz.net</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
