import Head from 'next/head';
import Link from 'next/link';
import PortfoliosNav from './components/PortfolioNav';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Our Portfolio | Digital Marketing Agency Oman</title>
        <meta
          name="keywords"
          content="web design companies oman, Social media promotions Oman, web design muscat Oman, software development company Oman, website design services Oman, website design Oman,web design in oman"
        />
        <meta
          name="description"
          content="Leading Digital Marketing Agency in Oman. Professional Website Design and Marketing Company. Offering quality Media services that meet your needs. Explore more."
        />
      </Head>

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
                <div id="portfolio-Nav" className="portfolio-hd">
                  <p>Featured projects</p>
                  <h2>Latest Works</h2>
                </div>
              </div>
              <div className="col-12">
                <PortfoliosNav />
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
                    <Link href="https://gacmotoroman.com/" target="_blank">
                      www.gacmotoroman.com
                    </Link>
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
                    <Link href="https://royalhospital.med.om/" target="_blank">
                      www.royalhospital.med.om
                    </Link>
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
                    <Link href="https://geo.om/" target="_blank">
                      www.geo.om
                    </Link>
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
                    <Link href="https://www.tanmia.om/" target="_blank">
                      www.tanmia.om
                    </Link>
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
                    <Link href="https://bcc.om/" target="_blank">
                      www.bcc.om
                    </Link>
                  </figcaption>
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
                    <Link
                      href="https://omanbanksassociation.com/"
                      target="_blank"
                    >
                      www.omanbanksassociation.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-04.jpg" alt="Adventz team" />
                  </figure>
                  <figcaption>
                    <p>Oman Cement Company</p>
                    <Link href="https://occ.om/" target="_blank">
                      www.occ.om
                    </Link>
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
                    <Link href="https://oliban.om/" target="_blank">
                      www.oliban.om
                    </Link>
                  </figcaption>
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
                    <Link href="https://alsuwadipower.com/" target="_blank">
                      www.alsuwadipower.com
                    </Link>
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
                    <Link href="https://www.tmtecoman.com/" target="_blank">
                      www.tmtecoman.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-03.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Sabco Oman</p>
                    <Link href="http://sabcooman.com/" target="_blank">
                      www.sabcooman.com
                    </Link>
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
                    <Link
                      href="https://www.maysanproperties.com/"
                      target="_blank"
                    >
                      www.maysanproperties.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1 px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-alkhonji.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Alkhonji Group</p>
                    <Link href="https://www.alkhonjigroup.com/" target="_blank">
                      www.alkhonjigroup.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-iv.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>International Volunteers</p>
                    <Link href="https://ivoman.com/" target="_blank">
                      www.ivoman.com
                    </Link>
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
                    <Link href="https://www.mustafasultan.com/" target="_blank">
                      www.mustafasultan.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-13.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Educal</p>
                    <Link href="https://educal-int.com/" target="_blank">
                      www.educal-int.com
                    </Link>
                  </figcaption>
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
                    <Link href="https://medcoman.com/" target="_blank">
                      www.medcoman.com
                    </Link>
                  </figcaption>
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
                    <Link href="http://alhashargroup.com/" target="_blank">
                      www.alhashargroup.com
                    </Link>
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
                    <Link href="https://www.oict.com.om/" target="_blank">
                      www.oict.com.om
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-omifco.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Omifco</p>
                    <Link href="http://www.omifco.com/" target="_blank">
                      www.omifco.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-07.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Indianschool Sohar</p>
                    <Link href="https://indianschoolsohar.com/" target="_blank">
                      www.indianschoolsohar.com
                    </Link>
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
                    <Link href="http://www.mhdoman.com/" target="_blank">
                      www.mhdoman.com
                    </Link>
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
                    <Link href="https://sgrf.gov.om/" target="_blank">
                      www.sgrf.gov.om
                    </Link>
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
                    <Link
                      href="https://search.towellproperty.com/"
                      target="_blank"
                    >
                      www.search.towellproperty.com
                    </Link>
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
                    <Link
                      href="https://www.rezoneproperty.com/"
                      target="_blank"
                    >
                      www.rezoneproperty.com
                    </Link>
                  </figcaption>
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
                    <Link
                      href="https://mumtalakat-alkhonji.com/"
                      target="_blank"
                    >
                      www.mumtalakat-alkhonji.com
                    </Link>
                  </figcaption>
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
                    <Link href="https://ncat.edu.om/" target="_blank">
                      www.ncat.edu.om
                    </Link>
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
                    <Link href="https://mfcoman.com/" target="_blank">
                      www.mfcoman.com
                    </Link>
                  </figcaption>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-3 px-1  px-lg-2 px-xl-3 filter web">
                <div className="portfolio-item">
                  <figure>
                    <img src="images/gallery-web-omanrefco.jpg" alt="Adventz" />
                  </figure>
                  <figcaption>
                    <p>Oman Refreshment Company</p>
                    <Link href="https://pepsioman.com/" target="_blank">
                      www.pepsioman.com
                    </Link>
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
