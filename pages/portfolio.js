import Link from "next/link";
import { useRouter } from "next/router";

export default function Portfolio() {
  return (
    <>
      <section className="ins-banner-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="ins-banner-cover">
                <div className="ins-banner-graphics">
                  <div className="ins-banner-ptc ins-banner-ptc-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path className="st0" d="M3.2 3.2H28.9V28.9H3.2z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                </div>
                <div className="ins-banner-hd">
                  <h1>
                    <span className="color-red">Our</span> Portfolio
                  </h1>
                  <p>#CreativeAgency #LogoDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="portfolio-nav-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="portfolio-hd">
                  <p>Featured projects</p>
                  <h2>Latest Works</h2>
                </div>
              </div>
              <div className="col-12">
                <ul className="portfolio-nav">
                  <li className="nav-item active">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="web"
                    >
                      Web
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="branding"
                    >
                      Branding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="mobile"
                    >
                      Mobile Apps
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="videos"
                    >
                      Videos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="other"
                    >
                      PR / Other Creatives
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link filter-button"
                      href="javascript:;"
                      data-filter="all"
                    >
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-body-sec">
          <div className="container-fluid px-1  px-lg-2 px-xl-3">
            <div className="row mx-n1 mx-lg-2 mx-xl-n3">
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-thumb-05.jpg"
                      alt="Adventz design"
                    />
                  </figure>
                  <figcaption>
                    <p>GAC Motor Oman</p>
                    <a href="https://gacmotoroman.com/" target="_blank">
                      www.gacmotoroman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/adventz-web-new01.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Royal Hospital Oman</p>
                    <a href="https://royalhospital.med.om/" target="_blank">
                      www.royalhospital.med.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/adventz-web-new02.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Green Energy Oman</p>
                    <a href="https://geo.om/" target="_blank">
                      www.geo.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-06.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Tanmia</p>
                    <a href="https://www.tanmia.om/" target="_blank">
                      www.tanmia.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/adventz-web-new04.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Best Choice Ceramics</p>
                    <a href="https://bcc.om/" target="_blank">
                      www.bcc.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-logo-01.jpg"
                      alt="Adventz oman "
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-logo-02.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-adventz02.jpg" alt="branding oman" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-thumb-04.jpg"
                      alt="Adventz web development"
                    />
                  </figure>
                  <figcaption>
                    <p>Oman Banks Association</p>
                    <a href="https://omanbanksassociation.com/" target="_blank">
                      www.omanbanksassociation.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-pr-01.jpg" alt="Adventz web" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-04.jpg" alt="Adventz team" />
                  </figure>
                  <figcaption>
                    <p>Oman Cement Company</p>
                    <a href="https://occ.om/" target="_blank">
                      www.occ.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/web-tmp02.jpg" alt="Adventz marketing" />
                  </figure>
                  <figcaption>
                    <p>Oliban</p>
                    <a href="https://oliban.om/" target="_blank">
                      www.oliban.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/brand-adventznew2.jpg"
                      alt="Adventz services"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-car.jpg" alt="Adventz service" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-brochure-01.jpg"
                      alt="Adventz smo"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-alsuwadi.jpg"
                      alt="Adventz seo"
                    />
                  </figure>
                  <figcaption>
                    <p>Al Suwadi Power</p>
                    <a href="https://alsuwadipower.com/" target="_blank">
                      www.alsuwadipower.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/adventz-web-new05.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>TMTEC</p>
                    <a href="https://www.tmtecoman.com/" target="_blank">
                      www.tmtecoman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter mobile">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/mobile-app3.jpg"
                      alt="Adventz web hosting"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/port-folio-braning-logo03.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-03.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Sabco Oman</p>
                    <a href="http://sabcooman.com/" target="_blank">
                      www.sabcooman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-maysan.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Maysan Properties</p>
                    <a href="https://www.maysanproperties.com/" target="_blank">
                      www.maysanproperties.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-brochure-02.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-alkhonji.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Alkhonji Group</p>
                    <a href="https://www.alkhonjigroup.com/" target="_blank">
                      www.alkhonjigroup.com
                    </a>
                  </figcaption>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-logo-03.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter mobile">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/mobile-app2.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo04.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-01.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter mobile">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-mob-app04.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-02.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter mobile">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/mobile-app4.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-03.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-04.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-09.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-adventznew1.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-10.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-05.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-06.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo05.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-pr02.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-brand-brochure-03.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo01.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo03.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-iv.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>International Volunteers</p>
                    <a href="https://ivoman.com/" target="_blank">
                      www.ivoman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-02.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Mustafa Sultan Enterprises LLC</p>
                    <a href="https://www.mustafasultan.com/" target="_blank">
                      www.mustafasultan.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-pr01.jpg" alt="Adventz brand" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-othercreative.jpg"
                      alt="Adventz marketing"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-13.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Educal</p>
                    <a href="https://educal-int.com/" target="_blank">
                      www.educal-int.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-video01.jpg"
                      alt="Adventz proud"
                    />
                  </figure>
                  <figcaption>
                    <p>#ProudOmani</p>
                    <a
                      href="https://www.youtube.com/watch?v=QS-DfvrepI8"
                      target="_blank"
                    >
                      #ProudOmani #Nadhira Al Harthy
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo02.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-pr03.jpg" alt="Adventz seo" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo06.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-video02.jpg" alt="Adventz smo" />
                  </figure>
                  <figcaption>
                    <a
                      href="https://www.youtube.com/watch?v=JkSc-r7kD7U"
                      target="_blank"
                    >
                      <p>#OmanTraditionalCulture</p>
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-006.jpg"
                      alt="Adventz google partner"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-005.jpg"
                      alt="Adventz ads"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-08.jpg"
                      alt="Adventz google ads"
                    />
                  </figure>
                  <figcaption>
                    <p>MEDC Oman</p>
                    <a href="https://medcoman.com/" target="_blank">
                      www.medcoman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-08.jpg"
                      alt="Adventz digital"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-branding-07.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-alhashar.jpg"
                      alt="Adventz digital marketing"
                    />
                  </figure>
                  <figcaption>
                    <p>Alhashargroup</p>
                    <a href="http://alhashargroup.com/" target="_blank">
                      www.alhashargroup.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/portfolio-hutch.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Hutchison Ports Sohar</p>
                    <a href="https://www.oict.com.om/" target="_blank">
                      www.oict.com.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-002.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-omifco.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Omifco</p>
                    <a href="http://www.omifco.com/" target="_blank">
                      www.omifco.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-003.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-004.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-07.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Indianschool Sohar</p>
                    <a href="https://indianschoolsohar.com/" target="_blank">
                      www.indianschoolsohar.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-14.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>mhd oman</p>
                    <a href="http://www.mhdoman.com/" target="_blank">
                      www.mhdoman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-branding-001.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-othercreative01.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-adventz01.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-sgrf.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Oman Investment Authority</p>
                    <a href="https://sgrf.gov.om/" target="_blank">
                      www.sgrf.gov.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-towellproperty.jpg"
                      alt="Adventz"
                    />
                  </figure>
                  <figcaption>
                    <p>Towell Property</p>
                    <a
                      href="https://search.towellproperty.com/"
                      target="_blank"
                    >
                      www.search.towellproperty.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/adventz-web-new03.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Rezone Property</p>
                    <a href="https://www.rezoneproperty.com/" target="_blank">
                      www.rezoneproperty.com
                    </a>
                  </figcaption>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-othercreative-01.jpg"
                      alt="Adventz smo"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-othercreative-02.jpg"
                      alt="Adventz seo "
                    />
                  </figure>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-10.jpg"
                      alt="Adventz mobile app"
                    />
                  </figure>
                  <figcaption>
                    <p>Mumtalakat alkhonji Property</p>
                    <a href="https://mumtalakat-alkhonji.com/" target="_blank">
                      www.mumtalakat-alkhonji.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/portfolio-others008.jpg"
                      alt="Adventz app development"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/gallery-web-11.jpg"
                      alt="Adventz marketing"
                    />
                  </figure>
                  <figcaption>
                    <p>National College of Automotive Technology</p>
                    <a href="https://ncat.edu.om/" target="_blank">
                      www.ncat.edu.om
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-mfc.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Muscat Finance</p>
                    <a href="https://mfcoman.com/" target="_blank">
                      www.mfcoman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img
                      src="images/other-creative-perfume.jpg"
                      alt="Adventz"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-omanrefco.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Oman Refreshment Company</p>
                    <a href="https://pepsioman.com/" target="_blank">
                      www.pepsioman.com
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-sgrf.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Oman Investment Authority</p>
                    <a href="https://oia.gov.om/" target="_blank">
                      www.oia.gov.om
                    </a>
                  </figcaption>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/creative3.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/img-nationalday.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <a
                      href="https://www.youtube.com/watch?v=ht6R8RKapck"
                      target="_blank"
                    >
                      <p>#49th#NationalDayCelebrations#Oman</p>
                    </a>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter branding">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-oliban-new1.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo-new1.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo-new.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter other">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/brand-smo-new2.jpg" alt="Adventz" />
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <a
                      href="https://www.youtube.com/watch?v=udOytDQwRpM"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="images/portfolio-video03.jpg"
                        alt="Adventz"
                      />{" "}
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <a
                      href="https://www.youtube.com/watch?v=dytQCzuL15c"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="images/portfolio-video04.jpg"
                        alt="Adventz"
                      />{" "}
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter videos">
                <div className="portfolio-item">
                  <figure>
                    <a
                      href="https://www.youtube.com/watch?v=CPo-L9fE5vc"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src="images/portfolio-video05.jpg"
                        alt="Adventz"
                      />{" "}
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="circle-shape-left">
        <img src="images/ins-circle-left.png" alt="Affiliate marketing" />
      </div>
    </>
  );
}
