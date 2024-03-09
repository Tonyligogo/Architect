import "./Header.css"
import Logo1 from "../../../src/images/logo.png"

function Header() {
  return (
    <header>
        <div className="logo"> <img src={Logo1} alt="" /> </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#myWork">My Work</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#myValues">My Values</a></li>
                <li><a href="#contact" className="primary">Contact Me</a></li>
                <li><button className="primary">Log In</button></li>
            </ul>
    </header>
  )
}

export default Header