import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Contact() {
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
                    Contact <span className="color-red">Us</span>
                  </h1>
                  <p>#Creative Agency #Designing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="contact-sec">
          <div className="parallax-eff pencil-box-cover">
            <div className="layer" data-depth="0.2">
              <div className="pencil-box">
                <img src="images/pencil-box.png" alt="Creative Agency" />
              </div>
            </div>
          </div>
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="contact-form block-anim">
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
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
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
                          alt="Creative Agency oman"
                        />
                      </span>
                      + (968) - 2422 9315
                    </li>
                    <li>
                      <span className="con-icon">
                        <img
                          src="images/con-icon-01.png"
                          alt="Creative design Agency"
                        />
                      </span>
                      + (968) - 9126 9531{' '}
                    </li>
                    <li>
                      <span className="con-icon">
                        <img
                          src="images/con-icon-02.png"
                          alt="Creative marketing Agency"
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

        <section className="location-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="location-nav-cover">
                  <a
                    className="btn btn-location btn-shine"
                    href="https://goo.gl/maps/hj8hnUNtMm3q89Rm6"
                    target="_blank"
                  >
                    View Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
