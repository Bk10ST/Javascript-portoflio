import React from 'react';
import './Blog.css';
import Video1 from './Epsiode 1.mp4'; // Corrected file name
import Video2 from './epsiode4.mp4'; // Corrected file name
import laptop from './Laptop.jpg'
import Tab from './tab.jpg'
import Mobile from './Mobile.jpg'

const Blog = () => {
  return (
    <div>
      <h1 className='Design title'>Blog</h1>

 <h3 className='Lhead'>1. Responsive <br />
  web design for desktop</h3>

  <p className='Lpara'>
    Creating Desktop responsive web design . 
  </p>

<div className="box1">
  <img src={laptop} alt="" className='image1' />
</div>

<h3 className='Thead'>
  2. Tablet responsive design
</h3>

<p className="Tpara">
  Creating tablet responsive design .

</p>

<div className="box2">
  <img src={Tab} alt="" className="image2" />
</div>

<h3 className='Mhead'>1. Responsive <br />
  web design for Mobile</h3>

  <p className='Mpara'>
    Creating Mobile responsive web design . 
  </p>

<div className="box3">
  <img src={Mobile} alt="" className='image3' />
</div>

<div className="videos">

<div className="frame1" >
<div className="card" style={{width: '18rem' , 
backgroundColor: "black" , color: "white" , 
borderRadius: "20px",
marginLeft: "30px"
}}>
<video src={Video1} 
      className='video1'
      style={{
        width: "100%"
      }} controls></video>
        <div className="card-body" style={{
          borderRadius: "20px"
        }}>
          <h5 className="card-title">Epsiode 1 : design beautiful web</h5>
          <p className="card-text">Desingning beautiful web design with help of figma</p>
          <a href="https://www.instagram.com/developersandesh/" className="btn btn-primary">Instagram page</a>
        </div>
      </div>

</div>
      <div className="card" style={{width: '18rem' , 
    backgroundColor: "black" , color: "white",
    marginLeft: "150px"
    }}>
<video src={Video2} 
      className='video1'
      style={{
        width: "100%",
      }} controls></video>
        <div className="card-body">
          <h5 className="card-title">Epsiode 4:  Designing Beautiful we design</h5>
          <p className="card-text">Designing web by using figma</p>
          <a href="http://www.youtube.com/@DeveloperSandesh" className="btn btn-primary">Youtube page</a>
        </div>
      </div>     
</div>

    </div>
  );
};

export default Blog;
