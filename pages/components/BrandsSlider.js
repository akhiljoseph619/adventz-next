import React from 'react';
import Link from 'next/link';
var $ = require('jquery');
if (typeof window !== 'undefined') {
  // Client-side-only code
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const brandsResponsive = {
  0: {
    items: 2,
  },
  480: {
    items: 2,
  },
  768: {
    items: 3,
  },
  992: {
    items: 4,
  },
  1200: {
    items: 5,
  },
};

export default function BrandsSlider() {
  return (
    <div className="brands-carousel">
      <OwlCarousel
        className="owl-theme"
        nav={true}
        dots={false}
        navText={false}
        responsive={brandsResponsive}
      >
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.lexusoman.com/" target="_blank">
                <img src="images/brands-logo-01.jpg" alt="lexus oman" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.alahliarsa.com/" target="_blank">
                <img
                  src="images/brands-logo-06.jpg"
                  alt="Al ahlia car insurance"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="http://yokohamaoman.com/" target="_blank">
                <img
                  src="images/brands-logo-13.jpg"
                  alt="yokohama tyres oman"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://gacmotoroman.com/" target="_blank">
                <img src="images/brands-logo-11.jpg" alt="gac motor oman" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.unfpa.org/" target="_blank">
                <img
                  src="images/brands-logo-03.jpg"
                  alt="United Nations Population Fund"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="http://mhdoman.com/" target="_blank">
                <img
                  src="images/brands-logo-04.jpg"
                  alt="Mohsin Haider Darwish LLC"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://medcoman.com/" target="_blank">
                <img
                  src="images/brands-logo-05.jpg"
                  alt="Muscat Electricity Distribution Company"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.oict.com.om/" target="_blank">
                <img
                  src="images/brands-logo-07.jpg"
                  alt="Hutchison Ports Sohar"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://occ.om/" target="_blank">
                <img
                  src="images/brands-logo-08.jpg"
                  alt="Oman Cement Company"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="http://www.wjtowell.com/" target="_blank">
                <img
                  src="images/brands-logo-14.jpg"
                  alt="Towell Group of Companies"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.mustafasultan.com/" target="_blank">
                <img
                  src="images/brands-logo-15.jpg"
                  alt="Mustafa Sultan Enterprises L.L.C"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.alkhonjigroup.com/" target="_blank">
                <img src="images/brands-logo-16.jpg" alt="Al Khonji Group" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.tanmia.om/" target="_blank">
                <img src="images/brands-logo-10.jpg" alt="Tanmia oman" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://khimji.com/" target="_blank">
                <img
                  src="images/brands-logo-12.jpg"
                  alt="Khimji Ramdas group"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.maysanproperties.com/" target="_blank">
                <img src="images/brands-logo-17.jpg" alt="Maysan Properties" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="http://www.abuhanigroup.com/" target="_blank">
                <img src="images/brands-logo-09.jpg" alt="Abuhani Group oman" />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="http://omifco.com/" target="_blank">
                <img
                  src="images/brands-logo-18.jpg"
                  alt="Oman India Fertiliser Company"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.shameloman.com/" target="_blank">
                <img
                  src="images/brands-logo-19.jpg"
                  alt="Shamel International Oman"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="brands-item">
            <div className="brands-bdr">
              <Link href="https://www.smnpower.com/" target="_blank">
                <img
                  src="images/brands-logo-20.jpg"
                  alt="SMN Power Holding Oman"
                />
              </Link>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
