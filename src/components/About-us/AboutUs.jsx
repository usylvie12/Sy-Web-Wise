import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";

import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content m-5">
              <h2> Technologies we use</h2>
              <p>
             

Tech stack is the skeleton of all mobile or web solution architecture
                
              </p>

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
