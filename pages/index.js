import WhatWeSlider from './components/WhatWeSlider';
import TrustSection from './components/TrustSection';
import TestimonialSlider from './components/TestimonialSlider';

export default function Home() {
  return (
    <>
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
                <div
                  id="carouselBanner"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
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
                    </div>

                    <a
                      href="https://www.google.com/partners/agency?id=6629473271"
                      target="_blank"
                    >
                      <div className="carousel-item">
                        <div className="banner-graphic">
                          <img
                            src="images/slider-google-img.png"
                            alt="Website Development Oman"
                          />
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
                      </div>
                    </a>
                  </div>
                </div>

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
              <div className="banner-content">
                <h1>
                  Expand Your <span className="color-black">Digital</span>{' '}
                  Presence
                </h1>
                <p>
                  We create one-of-a-kind, custom-made experiences for our
                  clients through digital marketing & innovative concepts
                </p>
                <a
                  className="btn btn-consultation btn-shine"
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#enquiryModal"
                >
                  Speak to Us
                </a>
              </div>
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
              <div className="brands-carousel">
                <div id="carousel-brands" className="owl-carousel owl-theme">
                  <a href="https://www.lexusoman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-01.jpg"
                            alt="lexus oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.alahliarsa.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-06.jpg"
                            alt="Al ahlia car insurance"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://yokohamaoman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-13.jpg"
                            alt="yokohama tyres oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://gacmotoroman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-11.jpg"
                            alt="gac motor oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.unfpa.org/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-03.jpg"
                            alt="United Nations Population Fund"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://mhdoman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-04.jpg"
                            alt="Mohsin Haider Darwish LLC"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://medcoman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-05.jpg"
                            alt="Muscat Electricity Distribution Company"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.oict.com.om/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-07.jpg"
                            alt="Hutchison Ports Sohar"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://occ.om/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-08.jpg"
                            alt="Oman Cement Company"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://www.wjtowell.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-14.jpg"
                            alt="Towell Group of Companies"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.mustafasultan.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-15.jpg"
                            alt="Mustafa Sultan Enterprises L.L.C"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.alkhonjigroup.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-16.jpg"
                            alt="Al Khonji Group"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.tanmia.om/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-10.jpg"
                            alt="Tanmia oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://khimji.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-12.jpg"
                            alt="Khimji Ramdas group"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.maysanproperties.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-17.jpg"
                            alt="Maysan Properties "
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://www.abuhanigroup.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-09.jpg"
                            alt="Abuhani Group oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://omifco.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-18.jpg"
                            alt="Oman India Fertiliser Company"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.shameloman.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-19.jpg"
                            alt="Shamel International Oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.smnpower.com/" target="_blank">
                    <div className="item">
                      <div className="brands-item">
                        <div className="brands-bdr">
                          <img
                            src="images/brands-logo-20.jpg"
                            alt="SMN Power Holding Oman"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
                  <form method="GET" onsubmit="return contact_submit(this)">
                    <div className="form-group">
                      <div className="input-field">
                        <input
                          className="form-control"
                          name="phone"
                          placeholder="Your Phone Number with Country Code"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-field">
                        <input
                          className="form-control"
                          placeholder="Your Email Address"
                          type="email"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-field">
                        <input
                          name="requirement"
                          className="form-control"
                          placeholder="Requirement"
                          required=""
                        />
                      </div>
                    </div>
                    <button className="btn btn-quote cont_send">
                      Get Free Consultation
                    </button>
                  </form>
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
