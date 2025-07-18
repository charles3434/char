import React from 'react'
import bg from '../assets/Ggg.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="heroContent">
        <span className="Hello">Hello</span>
        <span className="heroText">I'm Charles <span className="heroName"></span> <br />I'm a web developer</span>
        <p className="heroPara">I develop all kind of web-site,I train student<br/>who want to become a developer and also mobile app developer</p>

      </div>
      <img src={bg} alt="profile"className="bg"/>
    </div>
  )
}

export default Hero
