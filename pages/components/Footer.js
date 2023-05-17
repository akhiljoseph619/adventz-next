import Link from 'next/link';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'react-bootstrap-icons';
import ScrollToTopButton from './ScrollToTopButton';

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <section className="footer-sec">
        <Container fluid="xl">
          <Row>
            <Col xs={12}>
              <div className="footer-scroll">
                <Marquee pauseOnHover="true">
                  <ul className="scroll-list">
                    <li>
                      <Link href="/web-design-oman">Oman Web Design</Link>
                    </li>
                    <li>
                      <Link href="/web-development-services">
                        Oman Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/responsive-web-design">
                        Responsive web design
                      </Link>
                    </li>
                    <li>
                      <Link href="/cms-web-design">Cms web design</Link>
                    </li>
                    <li>
                      <Link href="/php8-mysql-programming">
                        PHP 8 &amp; Mysql programming
                      </Link>
                    </li>
                    <li>
                      <Link href="/website-redesign">Website re-design</Link>
                    </li>
                    <li>
                      <Link href="/custom-cms-web-design">
                        Custom cms web design
                      </Link>
                    </li>
                    <li>
                      <Link href="/html5-css3-web-designing">
                        HTML 5 &amp; CSS3 web designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/advertising-oman">Advertising Oman</Link>
                    </li>
                    <li>
                      <Link href="/best-web-design-company-in-oman">
                        Best web design company in oman
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-design-in-oman">Web design in oman</Link>
                    </li>
                    <li>
                      <Link href="/e-commerce-website-oman">
                        E-commerce website oman
                      </Link>
                    </li>
                    <li>
                      <Link href="/online-marketing-company-oman">
                        Online Marketing Company Oman
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-in-oman">SEO in Oman</Link>
                    </li>
                    <li>
                      <Link href="/seo-services-oman">SEO Services Oman</Link>
                    </li>
                  </ul>
                </Marquee>
              </div>
            </Col>
          </Row>

          <Row>
            <div className="col-12 col-ft-service">
              <Row>
                <Col xs={12}>
                  <div className="footer-hd">
                    <h3>Service Cloud</h3>
                  </div>
                </Col>

                <Col xs={12} sm={6}>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link href="/">Email Marketing </Link>
                      </li>

                      <li>
                        <Link href="/" target="_blank">
                          SEO Experts
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="https://www.webdesigncompanyinoman.net/"
                          target="_blank"
                        >
                          Web design Company in Oman
                        </Link>
                      </li>

                      <li>
                        <Link href="https://www.chatbot.com/" target="_blank">
                          Chatbots
                        </Link>
                      </li>

                      <li>
                        <Link href="/">SEO</Link>
                      </li>

                      <li>
                        <Link href="/">App Development</Link>
                      </li>

                      <li>
                        <Link
                          href="http://webdesigninoman.com/"
                          target="_blank"
                        >
                          Web design oman
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="https://www.webportaloman.co/"
                          target="_blank"
                        >
                          Webportal Oman
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col xs={12} sm={6}>
                  <div className="footer-links">
                    <ul>
                      <li>
                        <Link
                          href="https://www.webdesigncompanyoman.com/"
                          target="_blank"
                        >
                          Web design Company Oman
                        </Link>
                      </li>

                      <li>
                        <Link href="/">Branding</Link>
                      </li>

                      <li>
                        <Link href="/">Copywriting & Content</Link>
                      </li>

                      <li>
                        <Link href="/">Oman web design</Link>
                      </li>

                      <li>
                        <Link href="/">Oman web development</Link>
                      </li>

                      <li>
                        <Link href="/">Oman logo design</Link>
                      </li>

                      <li>
                        <Link href="/">Marketing Stratergy</Link>
                      </li>

                      <li>
                        <Link
                          href="https://www.adventz.net/blog/"
                          target="_blank"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="col-12 col-ft-tech">
              <div className="footer-hd">
                <h3>Technologies</h3>
              </div>

              <div className="footer-links">
                <ul>
                  <li>
                    <Link href="https://nodejs.org/en/" target="_blank">
                      Node
                    </Link>
                  </li>

                  <li>
                    <Link href="https://reactjs.org/" target="_blank">
                      React
                    </Link>
                  </li>

                  <li>
                    <Link href="https://angular.io/" target="_blank">
                      Angular
                    </Link>
                  </li>

                  <li>
                    <Link href="https://vuejs.org/" target="_blank">
                      Vue.js
                    </Link>
                  </li>

                  <li>
                    <Link href="https://reactnative.dev/" target="_blank">
                      React Native
                    </Link>
                  </li>

                  <li>
                    <Link href="https://symfony.com/" target="_blank">
                      Symfony
                    </Link>
                  </li>

                  <li>
                    <Link href="https://laravel.com/" target="_blank">
                      Laravel
                    </Link>
                  </li>

                  <li>
                    <Link href="https://ai.google/" target="_blank">
                      Ai
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-ft-connect">
              <div className="footer-hd">
                <h3>Awarded Agency</h3>
              </div>

              <div className="awards-cover">
                <div className="awards-list">
                  <div className="award-item">
                    <img src="images/award-logo-01.png" alt="Award Logo" />
                  </div>

                  <div className="award-item">
                    <img src="images/award-logo-02.png" alt="Award Logo" />
                  </div>

                  <div className="award-item">
                    <img src="images/award-logo-03.png" alt="Award Logo" />
                  </div>
                </div>

                <div className="awards-content">
                  <p>
                    We have worked on numerous successful projects over the
                    years that yielded us with nominations and awards on these
                    platforms.
                  </p>
                </div>
              </div>

              <div className="connect-cover">
                <div className="connect-cell">
                  <div className="footer-hd">
                    <h3>Connect with us</h3>
                  </div>

                  <ul className="connect-list">
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://in.linkedin.com/company/adventz"
                        target="_blank"
                        title="linkedin-in"
                      >
                        <Linkedin />
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://twitter.com/adventzagency"
                        target="_blank"
                        title="Twitter"
                      >
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://www.instagram.com/adventzagency"
                        target="_blank"
                        title="Instagram"
                      >
                        <Instagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://www.facebook.com/adventzagency/"
                        target="_blank"
                        title="Facebook"
                      >
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://www.tiktok.com/@adventz?lang=en"
                        target="_blank"
                        title="TickTok"
                      >
                        <img src="images/ticktok-icon.png" alt="TickTok" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        data-toggle="tooltip"
                        href="https://www.youtube.com/channel/UCQQp_CFlKfn4-WsWvtUpMAQ/featured"
                        target="_blank"
                        title="Youtube"
                      >
                        <Youtube />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="connect-cell">
                  <div className="googler-partner">
                    <Link
                      href="https://www.google.com/partners/agency?id=6629473271"
                      target="_blank"
                    >
                      <img
                        src="https://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg"
                        alt="Google Partner"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <Col xs={12}>
              <div className="footer-search">
                <form action="/search-results">
                  <div className="input-group">
                    <input type="search" className="form-control" name="q" />
                    <div type="search" className="input-group-append">
                      <input
                        name="submit"
                        type="submit"
                        value="Search"
                        className="btn btn-search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <div className="footer-logo-cover">
                <div className="footer-logo">
                  <img
                    src="images/adventz-footer-logo.png"
                    alt="aDventz Logo"
                  />
                </div>
                <div className="footer-logo-body">
                  <p>&copy; 2023 Adventz. All rights reserved</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <ul className="bottom-links">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <ScrollToTopButton />
    </>
  );
}
