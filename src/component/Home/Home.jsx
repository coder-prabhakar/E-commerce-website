import React from 'react'
import "./Home.css"
import slider1 from "./../../img/img-second.png";
import slider2 from "./../../img/img-third.png";
import slider3 from "./../../img/img-fifth.png";
import slider4 from "./../../img/img-first.png";
import slider5 from "./../../img/img-fourth.png";
import Slider from "./../Slider/Slider";

function Home() {
  return (
    <div>
      <Slider sliderImg={[slider1,slider2,slider3,slider4,slider5,slider1]} />
    </div> 
  )
}

export default Home;