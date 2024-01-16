import React from 'react'
import "./Home.css"
import img1 from "./../../img/img-second.png";

function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <div className="home-img">
        <img src={img1} alt="home-img" />
      </div>
    </div>
  )
}

export default Home
