import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PortfoliosNav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <ul className="portfolio-nav">
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio-web' ? 'active nav-link' : 'nav-link'
          }
          href="/portfolio-web#portfolio-Nav"
        >
          Web
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio-branding'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/portfolio-branding#portfolio-Nav"
        >
          Branding
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio-apps'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/portfolio-apps#portfolio-Nav"
        >
          Mobile Apps
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio-videos'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/portfolio-videos#portfolio-Nav"
        >
          Videos
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio-other'
              ? 'active nav-link'
              : 'nav-link'
          }
          href="/portfolio-other#portfolio-Nav"
        >
          PR / Other Creatives
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            router.pathname == '/portfolio' ? 'active nav-link' : 'nav-link'
          }
          href="/portfolio#portfolio-Nav"
        >
          All
        </Link>
      </li>
    </ul>
  );
}
