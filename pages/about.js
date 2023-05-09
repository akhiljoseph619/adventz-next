import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Advertising Company in Oman, Muscat | Adventz</title>
        <meta
          name="keywords"
          content="web design companies oman, Social media promotions Oman, web design muscat Oman, software development company Oman, website design services Oman, website design Oman,web design in oman"
        />
        <meta
          name="description"
          content="Leading Media Agency in Oman. Professional Website Design and Social Media Marketing Company. Offering quality media services that meet your needs."
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
                    About <span className="color-red">Us</span>
                  </h1>
                  <p>#CreativeAgency #OmanWebDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="about-who-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-about-who-grphics">
                <div className="about-who-grphics-cover">
                  <div className="about-who-grphics">
                    <img src="images/abt-who-we.png" alt="digital marketing" />
                  </div>
                  <div className="parallax-eff about-who-particle">
                    <div className="particle particle-01"></div>
                    <div className="particle particle-02"></div>
                  </div>
                  <div className="about-who-shape-cover">
                    <div className="about-who-shape about-who-shape-01">
                      <img
                        src="images/about-who-rec-shape.png"
                        alt="e commerce oman"
                      />
                    </div>
                    <div className="about-who-shape about-who-shape-02">
                      <div className="about-who-rect-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-about-who-con">
                <div className="about-who-intro">
                  <p className="sub-hd">WHO WE ARE</p>
                  <h3>
                    Adventz is a{' '}
                    <span className="color-red">design house;</span>
                    our products are creative, contemporary & artistic.
                  </h3>
                  <p>
                    Adventz is one of the most prominent digital media and
                    design houses in the Sultanate of Oman. With absolute
                    conviction in our work and total commitment to our clients'
                    success, we welcome every opportunity to excel!
                  </p>
                  <p>
                    Adventz was founded in 2009 with a singular goal in mind: to
                    offer local, regional and international clients a full menu
                    of services at par with global standards, leaving no stone
                    unturned to ensure that our clients stay ahead of the
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-we-do-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="about-we-do-cover">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="about-we-do-item">
                        <h3>We Stop At Nothing</h3>
                        <p>
                          Over the last few years, our pace of digital
                          transformation has accelerated far beyond what any of
                          us could have predicted, and there is no sign of it
                          slowing down. <br /> We are always ready to recognize,
                          accept, and implement digital trends in order to keep
                          ourselves and our clients ahead of the competition.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="about-we-do-item">
                        <h3>We Love To Explore</h3>
                        <p>
                          We explore the essence of digital transformation as a
                          vision to take this journey, its evolutions, benefits
                          and how it may impact various business processes,
                          industries and clients to give out the best and
                          result-oriented strategies
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="about-we-do-item">
                        <h3>We Take It Step-By-Step</h3>
                        <p>
                          We believe that it is critical to take things one step
                          at a time. Beginning with understanding the client and
                          their needs, conducting extensive research with
                          customer segmentation, providing them with favorable
                          solutions, and assisting them with future growth
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="about-we-do-item">
                        <h3>We Keep It Simple</h3>
                        <p>
                          Our approach is to keep it simple for all our clients.
                          We stay proactive, doing the work and follow-ups to
                          make it easy for our clients to engage with us and
                          address their concerns and queries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="about-we-do-intro">
                  <h2>We Believe In Hard Work And Dedication</h2>
                  <p>
                    We believe that hard work and dedication are essential
                    ingredients for business success. We work hard to find
                    solutions to problems and put in extra effort to achieve
                    great results.
                  </p>
                  <p>
                    Over the last few years, our efforts have aided in the
                    achievement of significant milestones.
                  </p>
                  <Link className="btn btn-explore btn-shine" href="/">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-ppl-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-about-ppl-grphics">
                <div className="about-ppl-grphics-cover">
                  <div className="about-ppl-grphics">
                    <img
                      src="images/abt-people.png"
                      alt="social media marketing"
                    />
                  </div>
                  <div className="parallax-eff about-ppl-particle">
                    <div className="particle particle-01"></div>
                    <div className="particle particle-02"></div>
                  </div>
                  <div className="about-ppl-shape-cover">
                    <div className="about-ppl-shape about-ppl-shape-01">
                      <img
                        src="images/about-ppl-rec-shape.png"
                        alt="social media marketing"
                      />
                    </div>
                    <div className="about-ppl-shape about-ppl-shape-02">
                      <div className="about-ppl-rect-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-about-ppl-con">
                <div className="about-ppl-intro">
                  <p className="sub-hd">our people</p>
                  <h3>
                    " Coming together is a beginning.{' '}
                    <span className="color-red">
                      Keeping together is progress.
                    </span>
                    Working together is success."
                  </h3>
                  <p className="ppl-author">- Henry Ford</p>
                  <p className="ppl-tag">
                    A behind-the-scenes look at the core team at Adventz
                    reinforces just that. We realize and celebrate our
                    differences and work in perfect harmony to bring your dreams
                    to fruition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="team-hd">
                  <h2>Core Team</h2>
                  <p>
                    Our team consists of highly qualified, experienced and
                    knowledgeable industry professionals that are passionate and
                    dedicated to our clients
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="team-item">
                  <figure>
                    <div className="team-shape-cover">
                      <div className="team-shape team-shape-01"></div>
                    </div>
                    <div className="team-particle">
                      <div className="particle particle-01"></div>
                    </div>
                    <div className="team-img">
                      <img src="images/team-01.jpg" alt="SMM" />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="team-item-hd">
                      <h3>Zahir Al Busaidi</h3>
                      <p>VP -Sadara Ventures</p>
                    </div>
                    <div className="team-scroll">
                      <p>
                        With significant experience and proven leadership in
                        development, planning and delivery of complex integrated
                        systems; he plays a key role in setting business
                        direction, leading the management team, developing and
                        directly managing the corporate performance framework
                        while paying special attention to talent acquisition,
                        development and engagement.
                      </p>
                    </div>
                  </figcaption>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <div className="team-item">
                  <figure>
                    <div className="team-shape-cover">
                      <div className="team-shape team-shape-01"></div>
                    </div>
                    <div className="team-particle">
                      <div className="particle particle-01"></div>
                    </div>
                    <div className="team-img">
                      <img
                        src="images/team-02.jpg"
                        alt="social media marketing oman"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="team-item-hd">
                      <h3>George P Rajan</h3>
                      <p>General Manager</p>
                    </div>
                    <div className="team-scroll">
                      <p>
                        George P Rajan, known for his witty management style
                        helms the team at ADVENTZ. With over 15+ years of
                        experience, he brings with him a calm and collected
                        approach to client management and the day to day
                        functions at the organization. He strongly believes in
                        this notion that relationships are more binding than
                        contracts and hence has been successful in forging long
                        lasting client relationships.
                      </p>
                    </div>
                  </figcaption>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <div className="team-item">
                  <figure>
                    <div className="team-shape-cover">
                      <div className="team-shape team-shape-01"></div>
                    </div>
                    <div className="team-particle">
                      <div className="particle particle-01"></div>
                    </div>
                    <div className="team-img">
                      <img
                        src="images/team-cmn.jpg"
                        alt="online advertising oman"
                      />
                    </div>
                  </figure>
                  <figcaption>
                    <div className="team-item-hd">
                      <h3>Al Zahra Al Sabqi</h3>
                      <p>HR Manager</p>
                    </div>
                    <div className="team-scroll">
                      <p>
                        Sadara Group's Head of Human Resources, Zahra, is a calm
                        and friendly individual with over five years of
                        exceptional experience. She attends to and handles
                        employee issues with the utmost care. Making certain
                        that employees are well cared for.
                      </p>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="circle-shape-left">
        <img src="images/ins-circle-left.png" alt="Digital Marketing" />
      </div>
    </>
  );
}
