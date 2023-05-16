import Head from 'next/head';
import Link from 'next/link';

export default function SEOServicesOman() {
  return (
    <>
      <Head>
        <title>Search Engine Optimization | SEO Company Oman, Muscat</title>
        <meta
          name="keywords"
          content="SEO services  oman, SEO services in oman, seo in oman, search engine optimisation oman,seo benefits,seo process, seo first position"
        />
        <meta
          name="description"
          content="Oman Based SEO Marketing Agency. 100% Transparency. Improving Your Online Visibility, Increasing Engagement, & Driving More Conversions. Get In Touch Today!"
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
                <div class="ins-banner-hd">
                  <h1>
                    <span class="color-red">SEO Services In Oman</span>
                  </h1>
                  <p>#SEO #SeoServices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="ins-content-sec">
        <section class="seo-con-sec">
          <div class="container-xl">
            <div class="row">
              <div class="col-12">
                <div class="seo-con-cover">
                  <p class="sub-hd">SEO services oman</p>
                  <h3>
                    WE'RE NUMBER ONE IN <span class="color-red">GOOGLE</span>{' '}
                    AND YOU COULD BE TOO.{' '}
                  </h3>
                  <p>
                    Between 70%-80% of all web site traffic comes from the
                    search engines so that our objective is to generate drastic
                    changes in organic traffic and keyword based traffic to your
                    website, also achieve top rankings on major search engines
                    like{' '}
                    <Link href="https://www.google.com.om/" target="_blank">
                      Google
                    </Link>
                    ,{' '}
                    <Link href="http://maktoob.yahoo.com/" target="_blank">
                      Yahoo
                    </Link>{' '}
                    and{' '}
                    <Link href="http://uae.msn.com/" target="_blank">
                      MSN
                    </Link>{' '}
                    and to give a very good ROI (return on investment) to your
                    website.
                  </p>
                  <h3>We Achieve First-Page Positions</h3>
                  <p>
                    Our own Google positions are evidence of our search engine
                    optimization excellence! Let us achieve the same for you.
                    Google positions change constantly.
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
