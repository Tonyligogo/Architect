import Header from "../src/components/header/Header"
import "./App.css"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import MyValues from "./components/myValues/MyValues";
import MyWork from "./components/myWork/MyWork";
import { Icon } from '@iconify/react';

function App() {

  const slideLeft = ()=>{
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 700
  }
  const slideRight = ()=>{
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft + 700
  }

  return (
    <div className="App">
     <Header/>
     <section className="heroSection">
      <Hero/>
     </section>
     <section className="myWorkSectionContainer">
        <div className="myWorkSectionHeading">
          <div className="myWorkHeading">
            <h2>My Work</h2>
            <p>Some of My Best Designs</p>
          </div>
          <div className="slideBtns">
            <span onClick={slideLeft} > <Icon icon="mingcute:left-line" color="#849cfc" width="14" /> </span>
            <span onClick={slideRight} > <Icon icon="mingcute:right-line" color="#849cfc" width="14" /> </span>
          </div>
        </div>
        <div className="myWorkSection" id="slide">
          <MyWork type="house1"/>
          <MyWork type="house2"/>
          <MyWork type="house3"/>
          <MyWork type="house1"/>
          <MyWork type="house2"/>
          <MyWork type="house3"/>
        </div>
     </section>
     <section>
      <MyValues/>
      <Contact/>
     </section>
    </div>
  );
}

export default App;
