import "./Contact.css"
import React from 'react'
import { Icon } from '@iconify/react';

function Contact() {
  return (
    <div className="contactContainer" id="contact">
        <h1>Contact me</h1>
        <p>Get in touch with me anytime, <br />and I will respond as soon as I can.</p>
        <div className="contactBlock">
            <div className="contactWrapper">
                <div className="contact">
                    <span className="icon"> <Icon icon="mdi:phone" color="blue" width="20" /> </span>
                    <div className="contactInfo">
                        <span>Call</span>
                        <span>0790420302</span>
                    </div>
                </div>
                <div className="actionBtn"> <Icon icon="bxs:copy" color="blue" width="16" /> Copy</div>
            </div>
            <div className="contactWrapper">
                <div className="contact">
                    <span className="icon"> <Icon icon="ant-design:message-filled" color="blue" width="18" /> </span>
                    <div className="contactInfo">
                        <span>Message</span>
                        <span>0790420302</span>
                    </div>
                </div>
                <div className="actionBtn"> <Icon icon="bxs:copy" color="blue" width="16" /> Copy</div>
            </div>
            <div className="contactWrapper">
                <div className="contact">
                    <span className="icon"> <Icon icon="uiw:mail" color="blue" width="18" /> </span>
                    <div className="contactInfo">
                        <span>Email</span>
                        <span>myemail@gmail.com</span>
                    </div>
                </div>
                <div className="actionBtn">
                <Icon icon="mdi:email-send" color="blue" width="16" /><a href="mailto:myemail@gmail.com">  Send mail</a>
                </div>
            </div>
        </div>
        <div className="socials">
            <a href=""><Icon icon="mdi:facebook" color="white" width="22" /></a>
            <a href=""><Icon icon="fa6-brands:square-x-twitter" color="white" width="18" /></a>
            <a href=""><Icon icon="ant-design:instagram-filled" color="white" width="22" /></a>
        </div>
    </div>
  )
}

export default Contact