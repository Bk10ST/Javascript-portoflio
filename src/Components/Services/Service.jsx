import React from 'react'
import "./Service.css"
import pic1 from './figma.png'
import pic2 from './frame.jpg'

const Service = () => {
  return (
    <div>
      <h1 className='service title'>Service</h1>

      <div className="REACTBOX">
        <h3>1. Frontend Web development</h3>
        <p className='reactPara'>I can help you build a website using the following technologies: </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
        </ul>
        <img src={pic2} alt="" />
      </div>

      <div className="FIGMABOX">
        <h3>2. Figma Designing</h3>
        <p>I can help you build a UI / UX design using figma. 
          make your design more visually appling and give your user
          better user experience.
           </p>
           <img src={pic1} alt="" />
      </div>

      <div className="CVBOX">
        <h3>3. CV designing</h3>
        <p>

Greetings! I am, a passionate freelance CV designer dedicated to helping individuals like you put their best professional foot forward. In today's competitive job market, a standout CV is not just a document; it's your personal brand story, and I'm here to bring it to life.

As a seasoned freelance designer, I understand the unique power of a well-crafted CV. Your journey, skills, and aspirations deserve more than just a template – they deserve a personalized design that resonates with your target audience. Whether you're a seasoned professional seeking a career shift or a recent graduate stepping into the workforce, I specialize in creating CVs that not only showcase your qualifications but also tell your unique story.
           </p>
      </div>

    </div>
  )
}

export default Service