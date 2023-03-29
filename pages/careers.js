import Link from "next/link";
import { useRouter } from "next/router";

export default function Careers() {
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
                  <h1>Careers</h1>
                  <p>#CreativeAgency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="career-intro-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-career-grphics">
                <div className="career-grphics-cover">
                  <div className="career-grphics">
                    <img src="images/career-img.png" alt="Career" />
                  </div>
                  <div className="parallax-eff career-particle">
                    <div className="particle particle-01">
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
                    <div className="particle particle-02">
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
                  </div>
                  <div className="career-shape-cover">
                    <div className="career-shape career-shape-01">
                      <img
                        src="images/career-rec-shape.png"
                        alt="web designer oman"
                      />
                    </div>
                    <div className="career-shape career-shape-02">
                      <div className="career-rect-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-career-con">
                <div className="career-intro">
                  <p className="sub-hd">lets work together</p>
                  <h3>
                    At Adventz, work is worship; it is also our passion and
                    love.
                  </h3>
                  <p>
                    We handpick our employees for not just their knowledge and
                    experience but their zeal to make a difference.
                  </p>
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
