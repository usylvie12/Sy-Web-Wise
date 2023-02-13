import React from "react";
import "./contact.css";

import { Container } from "reactstrap";

const Contact = () => {
  return (
    <section>
      <Container className="contact my-5">
     
      <div className="leftSide px-5">

       <h2>Let's Chat </h2>
              <p>
                Whether you have a question , want to start aproject 
              </p>
              <p>or simply want to connect</p>
              <p>Feel free to send us a message in the contact form</p>

      </div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    
      </Container>
    </section>
  );
};

export default Contact;
