import React from 'react'
import portfolio1 from '../assets/flyo.png'
import portfolio2 from '../assets/data.png'
 import portfolio3 from '../assets/port.png'
// import portfolio4 from '../assets/portfolio-4.png'
// import portfolio5 from '../assets/portfolio-5.png'
// import portfolio6 from '../assets/portfolio-6.png'





function Portfolio() {
  return (
    <section id="works">
        <h2 className="workstitle">My portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest detail and making sure that my work is pxell perfect  and I am excited to bring my skills and experience to help bussinesses achieve their goals and create a strong online presence-</span>

        <div className="worksImgs">
          <img src={portfolio1} alt="" className="worksImg" /> 
          <img src={portfolio2} alt="" className="worksImg" />
          < img src={portfolio3} alt="" className="worksImg" />
       
        </div>
        
        <button className="workBtn">See more</button>
        
    </section>
  )
}

export default Portfolio
