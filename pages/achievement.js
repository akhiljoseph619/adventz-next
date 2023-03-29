import Link from "next/link";
import { useRouter } from "next/router";

export default function Achievement() {
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
                    <span className="color-red">Achievement</span>
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
                    Introducing our innovative product line that will transform
                    your business.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="productsNav" className="ins-service-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <ul className="service-tb-nav pro-tb-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      href="E-Raffle-Products.php#productsNav"
                    >
                      <span className="nav-icon">
                        <img
                          src="images/pro-nav-01.png"
                          alt="e-commerce website"
                        />
                        <img
                          className="hover"
                          src="images/pro-nav-hover-01.png"
                          alt="E-Raffle Products"
                        />
                      </span>
                      <span className="nav-label">E-Raffle Products</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="Alert-Monitoring-System.php#productsNav"
                    >
                      <span className="nav-icon">
                        <img
                          src="images/pro-nav-02.png"
                          alt="E-Commerce Services"
                        />
                        <img
                          className="hover"
                          src="images/pro-nav-hover-02.png"
                          alt="Monitoring Alert System"
                        />
                      </span>
                      <span className="nav-label">Alert Monitoring System</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ecommerce-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-ecom-grphics">
                <div className="ecom-grphics-cover">
                  <div className="ecom-grphics">
                    <img
                      src="images/e-raffle-img.png"
                      alt="E-RaffleProduction"
                    />
                  </div>
                  <div className="parallax-eff ecom-particle">
                    <div className="particle particle-01"></div>
                    <div className="particle particle-02"></div>
                  </div>
                  <div className="ecom-shape-cover">
                    <div className="ecom-shape ecom-shape-01">
                      <img
                        src="images/e-raffle-rec-shape.png"
                        alt="E-Commerce Marketing"
                      />
                    </div>
                    <div className="ecom-shape ecom-shape-02">
                      <div className="ecom-rect-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-ecom-con">
                <div className="ecom-intro">
                  <p className="sub-hd">e-Raffle</p>
                  <h3>
                    Conducting raffle draws more efficiently, easily, and
                    seamlessly.
                  </h3>
                  <p>
                    Traditional raffles are extremely popular and, in many
                    cases, quite successful. However, your organization can
                    substantially benefit from taking advantage of modern
                    technology that can increase the profitability of your
                    campaigns while requiring less administrative work in
                    preparing and maintaining the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pro-item-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="product-item-cover">
                  <figure>
                    <img
                      src="images/e-raffle-img.jpg"
                      alt="creative website service"
                    />
                  </figure>
                  <div className="product-it-body">
                    <h3>
                      Why limit yourself to the traditional methods of
                      conducting Raffle Draws in this ever-changing digital
                      world?
                    </h3>
                    <p>
                      Introducing our unique "E-Raffle" solution, which will
                      revolutionize conducting raffle draws more efficiently,
                      easily, and seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="raff-system-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="raff-system-hd">
                  <p className="sub-hd">Purpose</p>
                  <h2>Why switch to an e-Raffle system?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="raff-system-item-cover">
                  <div className="raff-system-item">
                    <figure>
                      <i>
                        <img
                          src="images/raff-system-icon-01.png"
                          alt="Ecommerce Marketing Strategies"
                        />
                      </i>
                    </figure>
                    <div className="raff-system-body">
                      <h3>Less Effort</h3>
                    </div>
                  </div>
                  <div className="raff-system-item">
                    <figure>
                      <i>
                        <img
                          src="images/raff-system-icon-02.png"
                          alt="digital Marketing Strategie"
                        />
                      </i>
                    </figure>
                    <div className="raff-system-body">
                      <h3>Quick Sharing</h3>
                    </div>
                  </div>
                  <div className="raff-system-item">
                    <figure>
                      <i>
                        <img
                          src="images/raff-system-icon-03.png"
                          alt="digital business goals"
                        />
                      </i>
                    </figure>
                    <div className="raff-system-body">
                      <h3>Automated & Reliable</h3>
                    </div>
                  </div>
                  <div className="raff-system-item">
                    <figure>
                      <i>
                        <img
                          src="images/raff-system-icon-04.png"
                          alt="business goals"
                        />
                      </i>
                    </figure>
                    <div className="raff-system-body">
                      <h3>Cost-effective</h3>
                    </div>
                  </div>
                  <div className="raff-system-item">
                    <figure>
                      <i>
                        <img
                          src="images/raff-system-icon-05.png"
                          alt="business goals"
                        />
                      </i>
                    </figure>
                    <div className="raff-system-body">
                      <h3>One-time investment</h3>
                    </div>
                  </div>
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
