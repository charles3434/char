import React from 'react'
import facebookIcon from '../assets/facebook-icon.png'
import twittericon from '../assets/twitter.png'
import youtubeIcon from '../assets/youtube.png'
import instagramIcon from '../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        {}
           <div id="contact">
            <h1 className="contactPageTitle">Contact me</h1>
            <span className="contactDesc">please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="your name" required />
                <input type="email" className="email" placeholder="your email or your number" required/>
                <textarea className="msg" name="message" rows="5" placeholder="your message" required></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebookIcon} alt="facebook" className="link" />
                    <img src={twittericon} alt="twitter" className="link" />
                    <img src={youtubeIcon} alt="youtube" className="link" />
                    <img src={instagramIcon} alt="instagram" className="link" />
                </div>
            </form>

           </div>
    </section>
  )
}

export default Contact
