import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./footer.css";



const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="8" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
               Sy Web Wise
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

         

          <Col lg="4" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Kigali, Rwanda</p>
            <p> Phone: +250722505084 </p>
            <p>Email: u.sylvie13@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
