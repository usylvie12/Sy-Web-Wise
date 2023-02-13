import React from "react";
import { Container, Row, Col } from "reactstrap";
import serviceImg1 from "../../assests/images/Software-Dev.jpg";
import serviceImg2 from "../../assests/images/website.png";
import serviceImg3 from "../../assests/images/mobile-app.jpg";
import "./services.css";
import ServiceCard from "./ServiceCard";

const coursesData = [
  {
    id: "01",
    title: "Aplication & Software development",
    desc: "we help you improve efficiency of your business with custom software developed to meet your unique requirements.",
    imgUrl: serviceImg1,
  },

  {
    id: "02",
    title: "Website Design & Development",
    desc: " Our use of technologies helps us build websites with more efficiency to convert your unique business requirement into a reality",
    imgUrl: serviceImg2,
  },

  {
    id: "03",
    title: "Mobile App Development",
    desc: "We offer high-end custom app development services to power digital transformation. We deliver highly scalable applications that fit your goals.",
    imgUrl: serviceImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Services</h2>
                <p>
                  
                </p>
              </div>

             
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <ServiceCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
