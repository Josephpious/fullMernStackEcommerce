import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:jkpiousty@gmail.com">
        <Button>Contact: jkpiousty@gmail.com</Button>
        <Button>Phone: +8613132774142</Button>
      </a>
    </div>
  );
};

export default Contact;
