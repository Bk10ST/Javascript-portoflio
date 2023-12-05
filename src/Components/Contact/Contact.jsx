import React from "react";
import "./Contact.css";
import phone from "./Frame 2.png";
import mail from "./Frame 3.png";
import youtube from "./Frame 4.png";
import facebook from "./Frame 5.png";
import instagram from "./Frame 6.png";
import linkedin from "./Frame 7.png";
import fiverr from './Frame 8.png'


const Contact = () => {
  return (
    <div>
      <div className="contactsection">
<div className="titttle">
<h1 className="CT">Contact</h1>
</div>

<div className="circle"></div>

<div className="circle2"></div>

<p className="text">
  Are you ready to transform your digital presence with a stunning and
  responsive user interface? Look no further! I'm a seasoned React
  Front-End Developer and skilled FIGMA Designer, ready to bring your
  ideas to life.
  <br />
  Services Offered:
  <ol>
    <li>React JS Development</li>
    <li>HTML, CSS, and JavaScript</li>
    <li>Bootstrap Integration</li>
    <li>FIGMA Design</li>
    <li>Responsive Web Design</li>
  </ol>
  Why Choose Me?
  <ol>
    <li>
      100% Refund Guarantee: Your satisfaction is my priority. If you're
      unhappy with my work, I offer a 100% refund.
    </li>
    <li>
      Quality Work: Experience top-notch quality in both development and
      design.
    </li>
    <li>
      24/7 Availability: I'm always here to address your queries and
      concerns.
    </li>
    <li>100% Customer Satisfaction: Your satisfaction is guaranteed.</li>
    <li>
      Reasonable Cost: Get exceptional services at a reasonable cost.
    </li>
    <li>On-Time Delivery: I ensure timely delivery of your project.</li>
  </ol>
  Contact Before Ordering: Reach out at 9808005497 to discuss your project
  details. Let's create something extraordinary together!
  <br />
  <br />
  <br />
  Thank you!
</p>


<img
  src={phone}
  alt=""
  style={{
    width: "90px",
    marginLeft: "780px",
    marginTop: "-1300px",
  }}
/>
<img
  src={mail}
  alt=""
  style={{
    width: "90px",
    marginTop: "-1000px",
    marginLeft: "-90px",
  }}
/>

<img
  src={fiverr}
  alt=""
  style={{
    width: "90px",
    marginTop: "-700px",
    marginLeft: "-90px",
  }}
/>

<div className="socialdev">
<a href="https://www.facebook.com/tony.tiruwa">
  <img
    src={facebook}
    alt=""
    style={{
      width: "90px",
    }}
    className="social"
  />
</a>

<a href="https://www.instagram.com/developersandesh/">
  <img
    src={instagram}
    alt=""
    style={{
      width: "90px",
      marginLeft: "30px",
    }}
    className="social"
  />
</a>
<a href="https://www.linkedin.com/in/sandesh-bk-051a96276/">
  <img
    src={linkedin}
    alt=""
    style={{
      width: "90px",
      marginLeft: "30px",
    }}
    className="social"
  />
</a>

<a href="https://www.youtube.com/channel/UCOgc5Bs0HW9x-qvgcF9iLng">
  <img
    src={youtube}
    alt=""
    style={{
      width: "90px",
      marginLeft: "30px",
    }}
    className="social"
  />
</a>
</div>

<div className="para">
<p style={{ color: "black" }} className="F9808005497">
  9808005497  
</p>
<p style={{ color: "black" }} className="Mgmail">
  bk10sandesh@gmail.com
</p>

<p style={{ color: "black" }} className="MFiverr">
<a href="https://www.fiverr.com/sandesh_bk">https://www.fiverr.com/sandesh_bk</a>
</p>
</div>
      </div>
      

    </div>
  );
};

export default Contact;
