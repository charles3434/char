import React from 'react'
import bed from '../assets/bed.png'
import book from '../assets/book.png'
 import next from '../assets/next.png'






function Portfolio() {
  return (
    <section id="works">
        <h2 className="workstitle">My portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest detail and making sure that my work is pxell perfect  and I am excited to bring my skills and experience to help bussinesses achieve their goals and create a strong online presence-</span>

        <div className="worksImgs">
          <img src={bed} alt="" className="worksImg" /> 
          <img src={book} alt="" className="worksImg" />
          < img src={next} alt="" className="worksImg" />
       
        </div>
        
        <button className="workBtn">See more</button>
        
    </section>
  )
}

export default Portfolio
