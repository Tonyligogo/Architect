import "./Hero.css"
import HeroImage from "../../images/hero-image.png"
import { Icon } from '@iconify/react';

function Hero() {
  return (
    <div className="hero" id="home">
        <div className="leftHero">
            <h1>Discover <br /> Most Suitable <br /> Property</h1>
            <small className="desc">Find a variety of properties that suit you very easily <br /> Forget all difficulties in finding a residence for you</small>
            <div className="search">
                <Icon icon="mdi:location" color="#3f5dd6" width="28"/>
                <input type="text" />
                <button className="primary">Search</button>
            </div>
            <div className="numbers">
                <p> <span>9,000 <span className="plus">+</span> </span> <small>Premium Product</small> </p>
                <p> <span>2,000 <span className="plus">+</span> </span> <small>Happy Customer</small> </p>
                <p> <span>28 <span className="plus">+</span> </span> <small>Awards Winning</small> </p>
            </div>
        </div>
        <div className="rightHero">
            <div className="heroImg">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero