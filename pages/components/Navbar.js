import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function NavbarMain() {
  const [stickyClass, setStickyClass] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass('navbar-fixed') : setStickyClass('');
    }
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  const handleLinkClick = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      className={`navbar-main ${stickyClass}`}
      bg="light"
      expand="lg"
      expanded={expanded}
    >
      <Container fluid>
        <div className="logo">
          <Link href="/">
            <img src="images/adventz-logo.png" alt="aDventz Logo" />
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav info-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://wa.me/+96891269531"
                target="_blank"
              >
                <span className="nav-icon">
                  <img src="images/info-icon-01.png" alt="Whatsapp" />
                </span>
                Whatsapp only
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="tel:+96891269531">
                <span className="nav-icon">
                  <img src="images/info-icon-02.png" alt="Phone" />
                </span>
                +968 9126 9531
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="mailto:info@adventz.net">
                <span className="nav-icon">
                  <img src="images/info-icon-03.png" alt="Email" />
                </span>
                info@adventz.net
              </Link>
            </li>

            <li className="nav-item nav-lng-item">
              <Link
                className="nav-link nav-lng active-lng"
                href="https://arabic.adventz.net/"
              >
                عربى
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav main-nav">
            <li className="nav-item">
              <Link
                href="/about"
                className={
                  router.pathname == '/about' ? 'active nav-link' : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/E-Raffle-Products"
                className={
                  router.pathname == '/E-Raffle-Products'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/E-commerce-services"
                className={
                  router.pathname == '/E-commerce-services'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/portfolio"
                className={
                  router.pathname == '/portfolio'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://arabic.adventz.net/blog/"
                target="_blank"
                onClick={handleLinkClick}
              >
                <span className="nav-block">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/achievement"
                className={
                  router.pathname == '/achievement'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Achievement</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/careers"
                className={
                  router.pathname == '/careers' ? 'active nav-link' : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Careers</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact-us"
                className={
                  router.pathname == '/contact-us'
                    ? 'active nav-link'
                    : 'nav-link'
                }
                onClick={handleLinkClick}
              >
                <span className="nav-block">Contact</span>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
