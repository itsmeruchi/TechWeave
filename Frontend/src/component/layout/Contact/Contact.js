import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:35ruchijain@gmail.com">
        <Button>Contact: 35ruchijain@gmail.com</Button>
      </a>
      <p>Feel free to reach out to us through any of the provided channels. We're dedicated to providing exceptional service and look forward to assisting you.<br/>
       Warm regards,<br/>
The TechWeave Team<br/></p>
    </div>
  );
};

export default Contact;