import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "react-bootstrap";

export default function serviceCarousel() {
  return (
    <section>
      <Container xxl>
        <div className="row">
          <div className="col-12">
            <OwlCarousel
              items={3}
              margin={8}
              autoplay={true}
              className="owl-carousel owl-theme"
            >
              <div className="item">111</div>
              <div className="item">222</div>
              <div className="item">333</div>
              <div className="item">444</div>
              <div className="item">555</div>
              <div className="item">666</div>
              <div className="item">777</div>
            </OwlCarousel>
          </div>
        </div>
      </Container>
    </section>
  );
}
