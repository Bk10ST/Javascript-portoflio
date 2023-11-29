import React from "react";
import "./Nav.css";
import Home from "../Home/Home";
import About from '../About/About'
import Blog from '../Blog/Blog'
import Service from '../Services/Service'
import Skill from '../Skills/Skill'
import Contact from '../Contact/Contact'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home"
                  aria-current="page"
                  href="#Homesection"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="code1" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="code1" href="#Mydesign">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="code1" href="#Service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="code1" href="#Skill">
                  Skills
                </a>
              </li>
              <li className="nav-item" id="Contact">
                <a className="nav-link active" id="code" href="#contact">
                  &nbsp; Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
     <section id="Homesection">
     <Home  />
     </section>

     <section id="about" >
        <About  className="contact"/>
     </section>

     <section id="MyBlog">
        <Blog />
     </section>

     <section id="Service">
        <Service />
     </section>

    <section id="Skill">
        <Skill />
    </section>

    <section id="contact">
        <Contact />
    </section>

    </div>
  );
};

export default Nav;
