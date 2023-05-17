import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function error() {
  return (
    <>
      <Head>
        <title>404 Error</title>
        <meta
          name="keywords"
          content="web design company in oman, web design &amp; development company in oman, adventz muscat oman"
        />
        <meta
          name="description"
          content="Adventz is a premier Digital Marketing Agency in Oman that specializes in strategizing your digital presence to scale your business. Get In Touch."
        />
      </Head>

      <main className="ins-content-sec">
        <section>
          <Container fluid="xl">
            <Row>
              <Col xs={12}>
                <div className="error-page">
                  <div className="error-hd">
                    <h1>404</h1>
                    <div className="error-txt">Oops! Page not found.</div>
                  </div>
                  <div className="error-body">
                    <p>We can't find the page you're looking for</p>
                  </div>
                  <div className="error-nav">
                    <Link className="btn btn-shine btn-go-home" href="/">
                      Go Back Home
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <div className="circle-shape-left">
        <img src="images/ins-circle-left.png" alt="Affiliate marketing" />
      </div>
    </>
  );
}
