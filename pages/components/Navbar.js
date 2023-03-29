import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function navbarMain() {
  const router = useRouter();
  return (
    <Navbar bg="light" expand="lg" className="navbar-main">
      <Container fluid>
        <div className="logo">
          <Link href="/">
            <img src="images/adventz-logo.png" alt="aDventz Logo" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto info-nav">
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
                href="https://www.adventz.net/ar/index.php"
              >
                عربى
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto main-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                <span className="nav-block">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                <span className="nav-block">Products</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/services">
                <span className="nav-block">Services</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                <span className="nav-block">Portfolio</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://www.adventz.net/blog/"
                target="_blank"
              >
                <span className="nav-block">Blog</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/achievement">
                <span className="nav-block">Achievement</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/careers">
                <span className="nav-block">Careers</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                <span className="nav-block">Contact</span>
              </Link>
            </li>
          </ul>

          {/* <Nav className="me-auto">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <Link href="#link">Link</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
