import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ServicesNav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <ul className="service-tb-nav">
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/E-Commerce-Services'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/E-Commerce-Services#serviceNav"
        >
          <span className="nav-icon">
            <img src="images/service-nav-04.png" alt="e-commerce website" />
            <img
              className="hover"
              src="images/service-nav-hover-04.png"
              alt="E-Commerce Services"
            />
          </span>
          <span className="nav-label">
            E-Commerce
            <br /> Services
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/Branding-Services'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/Branding-Services#serviceNav"
        >
          <span className="nav-icon">
            <img src="images/service-nav-02.png" alt="E-Commerce Services" />
            <img
              className="hover"
              src="images/service-nav-hover-02.png"
              alt="Branding Services"
            />
          </span>
          <span className="nav-label">
            Branding
            <br /> Services
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/Website-Services'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/Website-Services#serviceNav"
        >
          <span className="nav-icon">
            <img src="images/service-nav-03.png" alt="Branding Service oman" />
            <img
              className="hover"
              src="images/service-nav-hover-03.png"
              alt="Website Services development"
            />
          </span>
          <span className="nav-label">
            Website
            <br /> Services
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/Marketing-Services'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/Marketing-Services#serviceNav"
        >
          <span className="nav-icon">
            <img src="images/service-nav-01.png" alt="marketing-services" />
            <img
              className="hover"
              src="images/service-nav-hover-01.png"
              alt="digital marketing-service"
            />
          </span>
          <span className="nav-label">
            Marketing
            <br /> Services
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/Mobile-App-Services'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/Mobile-App-Services#serviceNav"
        >
          <span className="nav-icon">
            <img src="images/service-nav-05.png" alt="digital Marketing" />
            <img
              className="hover"
              src="images/service-nav-hover-05.png"
              alt="seo marketing"
            />
          </span>
          <span className="nav-label">
            Mobile App
            <br /> Services
          </span>
        </Link>
      </li>
    </ul>
  );
}
