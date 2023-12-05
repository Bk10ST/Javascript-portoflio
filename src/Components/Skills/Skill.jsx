import React, { useState } from "react";
import "./Skill.css";
import ReactPic from "./react.png";
import jsPic from "./js.png";
import htmlPic from "./html.png";
import cssPic from "./css.png";
import figmaPic from "./fig.png";
import { motion } from "framer-motion";

const Skill = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [rotation1, setRotation1] = useState({ x: 0, y: 0 });
  const [rotation2, setRotation2] = useState({ x: 0, y: 0 });
  const [rotation3 , setRotation3]= useState({x: 0 , y: 0});
  const [rotation4 , setRotation4]= useState({x: 0 , y: 0});



  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const angleX = ((clientY - (top + height / 3)) / (height / 3)) * 60;
    const angleY = ((clientX - (left + width / 3)) / (width / 3)) * -60;

    setRotation({ x: angleX, y: angleY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  
  const handleMouseMove1 = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const angleX = ((clientY - (top + height / 3)) / (height / 3)) * 60;
    const angleY = ((clientX - (left + width / 3)) / (width / 3)) * -60;

    setRotation1({ x: angleX, y: angleY });
  };

  const handleMouseLeave1 = () => {
    setRotation1({ x: 0, y: 0 });
  };

  const handleMouseMove2 = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const angleX = ((clientY - (top + height / 3)) / (height / 3)) * 60;
    const angleY = ((clientX - (left + width / 3)) / (width / 3)) * -60;

    setRotation2({ x: angleX, y: angleY });
  };

  const handleMouseLeave2 = () => {
    setRotation2({ x: 0, y: 0 });
  };

  

  const handleMouseMove3 = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const angleX = ((clientY - (top + height / 3)) / (height / 3)) * 60;
    const angleY = ((clientX - (left + width / 3)) / (width / 3)) * -60;

    setRotation3({ x: angleX, y: angleY });
  };

  const handleMouseLeave3 = () => {
    setRotation3({ x: 0, y: 0 });
  };


  const handleMouseMove4 = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
  
    // Increase the factor for a more aggressive rotation
    const angleX = ((clientY - (top + height / 3)) / (height / 3)) * 60;
    const angleY = ((clientX - (left + width / 3)) / (width / 3)) * -60;
  
    setRotation4({ x: angleX, y: angleY });
  };
  
  const handleMouseLeave4 = () => {
    setRotation4({ x: 0, y: 0 });
  };


  return (
    <div>
      <h1 className="skill title">SKILL</h1>

      <div className="reactskill" id="code">
        <motion.div
          className="card"
          style={{
            width: "15rem",
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "20px",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          // whileHover={{
          // scaleX: 1.2 ,
          // scaleY: 1.1 ,
          // scaleZ: 1.0
          // }}

          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          id="codee"
        >
          <motion.img
            src={ReactPic}
            className="card-motion.img-top"
            alt="..."
            style={{
              width: "60%",
              marginLeft: "45px",
              marginTop: "20px",
            }}
          />
          <motion.div className="card-body">
            <motion.h5 className="card-title">React</motion.h5>
            <motion.p className="card-text">
              I can create frontend of a website using React{" "}
            </motion.p>
            {/* <a href="#" className="btn btn-primary">Order</a> */}
          </motion.div>
        </motion.div>

{/* javascript */}
        <motion.div
          className="card"
          style={{
            width: "15rem",
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "20px",
            transform: `rotateX(${rotation1.x}deg) rotateY(${rotation1.y}deg)`,
          }}
          id="jas"
          onMouseMove={handleMouseMove1}
          onMouseLeave={handleMouseLeave1}
        >
          <motion.img
            src={jsPic}
            className="card-motion.img-top"
            alt="..."
            style={{
              width: "60%",
              marginLeft: "45px",
              marginTop: "20px",
            }}
          />
          <motion.div className="card-body">
            <motion.h5 className="card-title">Javascript</motion.h5>
            <motion.p className="card-text">
              I am proficient in Javascript{" "}
            </motion.p>
            {/* <a href="#" className="btn btn-primary">Order</a> */}
          </motion.div>
        </motion.div>

        {/* html */}

        <motion.div
          className="card"
          style={{
            width: "15rem",
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "20px",
            transform: `rotateX(${rotation3.x}deg) rotateY(${rotation3.y}deg)`,
          }}
          id="httml"
          onMouseMove={handleMouseMove3}
          onMouseLeave={handleMouseLeave3}
        >
          <motion.img
            src={htmlPic}
            className="card-motion.img-top"
            alt="..."
            style={{
              width: "40%",
              marginLeft: "55px",
              marginTop: "20px",
            }}
          />
          <motion.div className="card-body">
            <motion.h5 className="card-title">HTML</motion.h5>
            <motion.p className="card-text">
              I am also proficient in html{" "}
            </motion.p>
            {/* <a href="#" className="btn btn-primary">Order</a> */}
          </motion.div>
        </motion.div>
{/* css */}
        <motion.div
          className="card"
          style={{
            width: "15rem",
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "20px",
            transform: `rotateX(${rotation4.x}deg) rotateY(${rotation4.y}deg)`,
          }}
          id="Csss"
          onMouseMove={handleMouseMove4}
          onMouseLeave={handleMouseLeave4}
        >
          <motion.img
            src={cssPic}
            className="card-motion.img-top"
            alt="..."
            style={{
              width: "50%",
              marginLeft: "45px",
              marginTop: "20px",
            }}
          />
          <motion.div className="card-body">
            <motion.h5 className="card-title">CSS</motion.h5>
            <motion.p className="card-text">
              I can make beautiful design using CSS.{" "}
            </motion.p>
            {/* <a href="#" className="btn btn-primary">Order</a> */}
          </motion.div>
        </motion.div>

        {/* figma */}

        <motion.div
          className="card"
          style={{
            width: "15rem",
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "20px",
            transform: `rotateX(${rotation2.x}deg) rotateY(${rotation2.y}deg)`,
          }}
          id="figm"
          onMouseMove={handleMouseMove2}
          onMouseLeave={handleMouseLeave2}
        >
          <motion.img
            src={figmaPic}
            className="card-motion.img-top"
            alt="..."
            style={{
              width: "60%",
              marginLeft: "45px",
              marginTop: "20px",
            }}
          />
          <motion.div className="card-body">
            <motion.h5 className="card-title">Figma</motion.h5>
            <motion.p className="card-text">
              I can create a better UI/UX design using figma{" "}
            </motion.p>
            {/* <a href="#" className="btn btn-primary">Order</a> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
