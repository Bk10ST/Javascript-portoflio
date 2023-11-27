import React from 'react'
import './About.css'
import Pic from './crop.jpg'
import PDF from './Sandesh Cv.pdf'

const About = ({contact}) => {
  return (
    <div className='section'>
      <h1 className="title">
        About Me
      </h1>

      <p className='text'>
        
Greetings! I am an aspiring React.js frontend developer and a passionate fresher in the dynamic realm of web development. 
Proficient in JavaScript, I have cultivated a strong foundation in crafting engaging and interactive user interfaces. Beyond coding, I am also a skilled Figma designer, bringing a holistic approach to my projects by seamlessly merging aesthetics with functionality. My journey in the ever-evolving tech landscape is driven by a relentless pursuit of knowledge, and I am excited to contribute my skills to innovative projects that challenge and inspire growth. As a dedicated professional, I am not only committed to mastering the complexities of React.js but also to leveraging my design sensibilities to create visually stunning and user-centric applications. Let's embark on a collaborative journey where creativity meets code, and together, we can bring ideas to life! 
      </p>

<div className="image">
<img src={Pic} alt="" />
</div>

<div className='button'>
  <ul>
    <li className='hire'>
      <a href="#contact">Hire Me</a>
    </li>
    <li className='cv'>
      <a href={PDF} target='blank'>&nbsp;  CV</a>
    </li>
  </ul>
</div>


    </div>
  )
}

export default About