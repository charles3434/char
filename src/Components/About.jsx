import React from 'react';
import profile from '../assets/Ggg.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>What I Do</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Toyyib Agboola profile illustration" loading="lazy" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a frontend developer from Osun State, Nigeria, with hands-on experience building responsive web applications using HTML, CSS, JavaScript, and React. I’ve worked on projects with startup teams, learning to create user-friendly interfaces that bring ideas to life.</p>
            <p>My passion for frontend development drives me to craft clean, modern designs.I’m excited to grow my skills and deliver innovative solutions for clients and users.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;