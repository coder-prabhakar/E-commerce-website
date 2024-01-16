import "./Header.css"
import {useState} from "react";

function Header({navbarActive}) {

  const [menuBtn, menuBtnActive] = useState("uil uil-bars");

  function menuBtnClicked(){
    navbarActive();
    if(menuBtn === "uil uil-bars"){
      menuBtnActive("uil uil-times")
    } else {
      menuBtnActive("uil uil-bars")
    }
  }

  return (
    <div className='Header'>
      <div className="webName">
        <p>Store</p>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Enter your product name..." />
        <button><i class="uil uil-search"></i></button>
      </div>
      <div className="header-icons">
        <div className="menu-btn icon" ><i class={menuBtn} onClick={menuBtnClicked}></i></div>
        <div className="home-btn icon"><i class="uil uil-estate"></i></div>
        <div className="cart-btn icon"><i class="uil uil-heart-alt"></i><span>3</span></div>
        <div className="order-btn icon"><i class="uil uil-shopping-bag"></i><span>0</span></div>
        <div className="profile-btn icon"><i class="uil uil-user"></i></div>
      </div>
    </div>
  )
}

export default Header
