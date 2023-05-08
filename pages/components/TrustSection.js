import React from 'react';

const CounterUpPage = () => {
  return (
    <section className="trust-sec">
      <div className="parallax-eff trust-bush-cover">
        <div className="layer" data-depth="0.2">
          <div className="bush-img">
            <img src="images/plant.png" alt="E-commerce-services" />
          </div>
        </div>
      </div>
      <div className="trust-shape-rt">
        <img src="images/trust-shape.png" alt="Website hosing service muscat" />
      </div>
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="trust-hd">
              <h2>Join the thousands that already trust us</h2>
            </div>
          </div>
          <div className="col-12">
            <div id="trust-counter" className="trust-cover">
              <div className="trust-col">
                <div className="trust-item">
                  <figure>
                    <i>
                      <img src="images/trust-icon-01.png" alt="smo oman" />
                    </i>
                  </figure>
                  <figcaption>
                    <h3>
                      <span className="counter-value" data-count="14">
                        14
                      </span>
                      <sup> </sup>
                    </h3>
                    <p>years of experience</p>
                  </figcaption>
                </div>
              </div>
              <div className="trust-col">
                <div className="trust-item">
                  <figure>
                    <i>
                      <img
                        src="images/trust-icon-02.png"
                        alt="social media marketing "
                      />
                    </i>
                  </figure>
                  <figcaption>
                    <h3>
                      <span className="counter-value" data-count="400">
                        400
                      </span>
                      K
                    </h3>
                    <p>Spent Annually on Media Buying</p>
                  </figcaption>
                </div>
              </div>
              <div className="trust-col">
                <div className="trust-item">
                  <figure>
                    <i>
                      <img
                        src="images/trust-icon-03.png"
                        alt="happy clients oman"
                      />
                    </i>
                  </figure>
                  <figcaption>
                    <h3>
                      <span className="counter-value" data-count="2500">
                        2500
                      </span>
                      <sup>+</sup>
                    </h3>
                    <p>Projects</p>
                  </figcaption>
                </div>
              </div>
              <div className="trust-col">
                <div className="trust-item">
                  <figure>
                    <i>
                      <img
                        src="images/trust-icon-04.png"
                        alt="google ads services oman"
                      />
                    </i>
                  </figure>
                  <figcaption>
                    <h3>
                      <span className="counter-value" data-count="70">
                        0
                      </span>
                      <sup>+</sup>
                    </h3>
                    <p>Awards</p>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

module.exports = CounterUpPage;
