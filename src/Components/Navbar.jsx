import React, { useState } from 'react'
import logo from  '../assets/logo.png'
import contactImg from '../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../assets/menu.png'
const Navbar=() => {
  const [showMenu, setShowMmenu] = useState(false)
  
  return (
    <nav className="navbar">
        <img src={logo} className="logo"/>
        <div className="desktopmenu">
           <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About me</Link>
           <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItnem">Portfolio</Link>
           <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() =>{
          document.getElementById("contact").scrollIntoView({behvior: 'smooth'});
        }}>

           <img src={contactImg} alt="" className="destopMenuImg"/>contact me</button>

           <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? "flex" : "none"}}>
           <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMmenu(showMenu)}>Home</Link>
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMmenu(!showMenu)}>About me</Link>
           <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItnem"  onClick={()=>setShowMmenu(!showMenu)}>Portfolio</Link>
           <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMmenu(!showMenu)}>Contact</Link>
            
        </div>
         
    </nav>
  )
}



export default Navbar
