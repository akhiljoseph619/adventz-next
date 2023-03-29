import Link from "next/link";
import { useRouter } from "next/router";

export default function Services() {
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
                    <span className="color-red">Services</span>
                  </h1>
                  <p>#E-Raffle</p>
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
                    For businesses, digital is personal, which is why we
                    prioritize your business goals while developing a
                    personalized solution for you.
                  </h3>
                  <p>
                    Get a feature-loaded & user-friendly e-commerce website for
                    selling multiple products people need.
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
                <ul className="service-tb-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="nav-icon">
                        <img
                          src="images/service-nav-04.png"
                          alt="e-commerce website"
                        />
                        <img
                          className="hover"
                          src="images/service-nav-hover-04.png"
                          alt="E-Commerce Services"
                        />
                      </span>
                      <span className="nav-label">E-Commerce Services</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-icon">
                        <img
                          src="images/service-nav-02.png"
                          alt="E-Commerce Services"
                        />
                        <img
                          className="hover"
                          src="images/service-nav-hover-02.png"
                          alt="Branding Services"
                        />
                      </span>
                      <span className="nav-label">Branding Services</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-icon">
                        <img
                          src="images/service-nav-03.png"
                          alt="Branding Service oman"
                        />
                        <img
                          className="hover"
                          src="images/service-nav-hover-03.png"
                          alt="Website Services development"
                        />
                      </span>
                      <span className="nav-label">Website Services </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-icon">
                        <img
                          src="images/service-nav-01.png"
                          alt="marketing-services"
                        />
                        <img
                          className="hover"
                          src="images/service-nav-hover-01.png"
                          alt="digital marketing-service"
                        />
                      </span>
                      <span className="nav-label">Marketing Services</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="nav-icon">
                        <img
                          src="images/service-nav-05.png"
                          alt="digital Marketing"
                        />
                        <img
                          className="hover"
                          src="images/service-nav-hover-05.png"
                          alt="seo marketing"
                        />
                      </span>
                      <span className="nav-label">Mobile App Services</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mx-n2 mx-lg-n4">
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-01.jpg"
                        alt="Mobile App Services"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-01.png"
                          alt="social media marketing-service"
                        />
                      </i>
                    </div>
                    <h3>Coupon & Cart System</h3>
                    <p>
                      Adventz helps to generate your free Coupons on the
                      E-commerce theme. Coupons are a great way to offer
                      discounts and rewards to your customers, and can help
                      promote sales across through your web/mob platform.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-02.jpg"
                        alt="smo Service"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-02.png"
                          alt="Icon"
                        />
                      </i>
                    </div>
                    <h3>E-commerce Marketing</h3>
                    <p>
                      The number of internet users is rising rapidly in the
                      world & online sales are the perfect way to explore this
                      potential market. Adventz offers a user-friendly platform
                      interface for customers' needs.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-03.jpg"
                        alt="google ads Service"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-03.png"
                          alt="facebook marketing"
                        />
                      </i>
                    </div>
                    <h3>Payment Gateway Integration</h3>
                    <p>
                      We provide flexible e-commerce platforms with intelligent
                      design, clear navigation & easy check out process,
                      integrated with the utmost secure payment gateways that
                      put you and your buyers at ease, increasing customer
                      conversion & retention rates. Our associated services,
                      including social media integration & online marketing
                      tools, provide a wholesome solution, ensuring that the
                      personality of your brand is reflected in every aspect of
                      your e-commerce.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-04.jpg"
                        alt="facebook marketing Service"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-04.png"
                          alt="social media marketing"
                        />
                      </i>
                    </div>
                    <h3>Shipping API Integration</h3>
                    <p>
                      We are the top shipping API integration solution providers
                      with long-standing experience of dealing with the most
                      respected logistics and shipping firms from all across the
                      globe. <br /> We provide highly industry-specific,
                      customized, and scalable API integration services for
                      websites and mobile apps through our skilled developer
                      team.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-05.jpg"
                        alt="smo Service"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-05.png"
                          alt="smo marketing"
                        />
                      </i>
                    </div>
                    <h3>Business-to-Consumer</h3>
                    <p>
                      E-commerce websites that bring to life your idea for any
                      online business. Whether your needs are simple or complex,
                      our team, backed by the ingenious thinking & a strong hold
                      on the current & most up-to date technologies, will work
                      out solutions that are — Practical & user friendly,
                      Efficient & consistent, Stable & scalable, Secure &
                      reliable, Search engine optimized.
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-md-6 px-2 px-lg-4">
                <div className="service-item">
                  <figure>
                    <div className="service-img">
                      <img
                        src="images/service-ecommerce-img-06.jpg"
                        alt="Services"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="service-icon">
                      <i>
                        <img
                          src="images/service-e_com-icon-06.png"
                          alt="Affiliate marketing service"
                        />
                      </i>
                    </div>
                    <h3>Affiliates Programs</h3>
                    <p>
                      Affiliate marketing has grown in popularity over the last
                      few years across the globe and is known to provide
                      exceptional benefits to both advertisers and publishers.{" "}
                      <br /> We're an affiliate marketing network that connects
                      brands looking to promote their products and services with
                      publishers looking for interesting and high-quality
                      content.
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="service-footer-nav">
                  <a
                    className="btn btn-explore btn-shine"
                    href="e-commerce.php"
                  >
                    Explore more
                  </a>
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
