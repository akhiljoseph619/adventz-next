import Head from 'next/head';
import Link from 'next/link';
import ServicesNav from './components/ServicesNav';

export default function BrandingServices() {
  return (
    <>
      <Head>
        <title>
          Branding Services in Oman | Digital Marketing and Designing
        </title>
        <meta
          name="keywords"
          content="Logo design oman,Comany profile design,Brand assessment in oman, Rebranding in oman, Concept creation in oman, Portfolio nomenclature in oman, Corporate Identity in oman, Social Networking Profile Page Branding in oman, Corporate presentations & Email template in oman"
        />
        <meta
          name="description"
          content="Adventz is a super-efficient, B2B & B2C Branding and Advertising Agency. Call Us! Advertising Agency specialized in B2B & B2C Branding based in Muscat."
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
                    <span className="color-red">Branding Services In Oman</span>
                  </h1>
                  <p>#CreativeAgency #Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="service-intro-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="service-intro">
                  <p className="sub-hd">what we do</p>
                  <h3>
                    We'll join up all the pieces required to provide your
                    company with a consistent voice and visual identity
                  </h3>
                  <p>
                    We work seamlessly to translate brand insights into
                    thoughtful, distinctive and compelling brand designs and
                    copy that reflect your brand's essence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="serviceNav" className="ins-service-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <ServicesNav />
              </div>
            </div>
            <div className="row mx-n2 mx-lg-n4">
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-01.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-bnd-icon-01.png"
                          alt="Brand Identity"
                        />
                      </i>
                    </div>
                    <h3>Brand Identity Design Service</h3>
                    <p>
                      Your Brand is Your Identity ! Your Brand is your Business
                      ! <br /> <br /> We realize just how important your brand
                      is to your reputation and therefore, your business. We
                      create, protect and manage brand value through creative
                      thinking and visually appealing expressions that transform
                      organizations.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-02.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-bnd-icon-02.png"
                          alt="branding-services"
                        />
                      </i>
                    </div>
                    <h3>Custom Logo Design Services</h3>
                    <p>
                      Your logo is your signature. Be it a simple take on your
                      time to a three-dimensional video, we have you covered.
                      Striking themes, contemporary designs and intelligent
                      content underline the sensory impact of your brand. But
                      unless these are in line with your core values, your
                      mission and your purpose, these are just fluff. We help
                      you make sure that your identity is unique and is your
                      own.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-03.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img src="images/service-bnd-icon-03.png" alt="Icon" />
                      </i>
                    </div>
                    <h3>Business Card Design Services</h3>
                    <p>
                      The marketing of your business can either break you or
                      make you, Your business card is a key element for a
                      powerful brand. We are creators of immense value to your
                      business growth.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-04.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img src="images/service-bnd-icon-04.png" alt="Icon" />
                      </i>
                    </div>
                    <h3>Marketing Collateral Design</h3>
                    <p>
                      The collateral of your brand is often the first impression
                      of your product or service and first impressions really
                      count. We offer the design to fit the core values and
                      personality of your brand.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-05.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-bnd-icon-05.png"
                          alt="Packaging Design"
                        />
                      </i>
                    </div>
                    <h3>Product Packaging Design</h3>
                    <p>
                      They say do not judge the book by its cover, in the case
                      of packaged goods and services, this is not the reality.
                      We help you showcase your products in the most aesthetic,
                      cost-effective packs with high recall value.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img src="images/service-bnd-img-06.jpg" alt="Service" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-bnd-icon-06.png"
                          alt="Packaging Design"
                        />
                      </i>
                    </div>
                    <h3>Brand Style Guide Design</h3>
                    <p>
                      Any process without a framework and ground rules become a
                      messy playground. In order to protect the integrity of
                      your brand, we help you develop a set of guiding
                      principles for your brand voice and tone that will shine
                      the path in any branding exercise with clarity &
                      consistency.
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="service-footer-nav">
                  <Link className="btn btn-explore btn-shine" href="/branding">
                    Explore more
                  </Link>
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
