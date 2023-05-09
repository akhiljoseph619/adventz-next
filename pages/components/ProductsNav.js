import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProductssNav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <ul className="service-tb-nav pro-tb-nav">
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/E-Raffle-Products'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/E-Raffle-Products#productsNav"
        >
          <span class="nav-icon">
            <img src="images/pro-nav-01.png" alt="e-commerce website" />
            <img
              class="hover"
              src="images/pro-nav-hover-01.png"
              alt="E-Raffle Products"
            />
          </span>
          <span className="nav-label">
            E-Raffle <br /> Products
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/Alert-Monitoring-System'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/Alert-Monitoring-System#productsNav"
        >
          <span class="nav-icon">
            <img src="images/pro-nav-02.png" alt="E-Commerce Services" />
            <img
              class="hover"
              src="images/pro-nav-hover-02.png"
              alt="Monitoring Alert System"
            />
          </span>
          <span className="nav-label">
            Alert Monitoring <br /> System
          </span>
        </Link>
      </li>
    </ul>
  );
}
