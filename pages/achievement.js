import Head from 'next/head';

export default function Achievement() {
  return (
    <>
      <Head>
        <title>Our Achievements | Digital Marketing Company, Adventz</title>
        <meta
          name="keywords"
          content="web design companies oman, Social media promotions Oman, web design muscat Oman, software development company Oman, website design services Oman, website design Oman,web design in oman"
        />
        <meta
          name="description"
          content="Leading Media Agency in Oman. Advertising and Social Media Marketing Company. Offering quality media services that meet your needs. Explore our Achievements"
        />
      </Head>

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
                    <span className="color-red">Our</span> Achievement
                  </h1>
                  <p>#CreativeAgency #Designing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="blog-intro-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="blog-intro">
                  <p className="sub-hd">
                    We're proud of our awards and our team behind achieving them
                  </p>
                  <h3>
                    Our accomplishments are a testament to
                    <span className="color-red">
                      our hard work and dedication
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ins-service-sec">
          <div className="container-xl">
            <div className="row mx-n2 mx-lg-n2">
              <div className="col-12 col-sm-6 col-md-4 px-2 px-lg-3">
                <div className="blog-item">
                  <figure>
                    <img src="images/award01.jpg" alt="Google Partner oman" />
                  </figure>
                  <figcaption>
                    <div className="blog-item-body">
                      <h3>Google Partner Badge 2021</h3>
                    </div>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 px-2 px-lg-3">
                <div className="blog-item">
                  <figure>
                    <img
                      src="images/award02.jpg"
                      alt="Digital Marketing Service"
                    />
                  </figure>
                  <figcaption>
                    <div className="blog-item-body">
                      <h3>
                        'Digital Marketing Service Provider Customer
                        Satisfaction & Happiness Oman 2020' at the Global
                        Banking & Finance Award 2020
                      </h3>
                    </div>
                  </figcaption>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 px-2 px-lg-3">
                <div className="blog-item">
                  <figure>
                    <img src="images/award03.jpg" alt="Web Design oman" />
                  </figure>
                  <figcaption>
                    <div className="blog-item-body">
                      <h3>
                        Best Web Design Gold Award in the category Advertising &
                        Media 2016
                      </h3>
                    </div>
                  </figcaption>
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
