import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dfndsngqw/image/upload/v1733768460/products/yxl10y5qohy0pzxtllfj.webp"
              alt="Founder"
            />
            <Typography>Ruchi Jain</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <p>
            Experience the TechWeave difference, where technology meets craftsmanship. Explore our curated selection of laptops, smartphones, and cameras, designed to elevate your tech game. Celebrate tradition with our unique handicraft collection, blending artisanal charm with modern design. At TechWeave, quality and innovation redefine your shopping experience. Join us today!
            </p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Social platforms</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;