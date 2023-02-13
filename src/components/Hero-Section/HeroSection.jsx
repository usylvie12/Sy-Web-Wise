import React from "react";
import { Container, Row, Col } from "reactstrap";
import webDev from "../../assests/images/web-development.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Software & Websites <br /> Development  <br /> that exceeds your expectations
              </h2>
              <p className="mb-5">
              Perfect Development solutions for growing startups  <br /> and established businesses
               <br />and outdated software
              </p>
            </div>
           
          </Col>

          <Col lg="6" md="6">
            <img src={webDev} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
