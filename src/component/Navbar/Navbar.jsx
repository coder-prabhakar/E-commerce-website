import "./Navbar.css"
import { useState } from "react";


function Navbar({classNavbar}) {

  const [menCateg,menCategShow] = useState("navItem");
  const [womenCateg,womenCategShow] = useState("navItem");
  const [fashionCateg,fashionCategShow] = useState("navItem");
  const [elecCateg,elecCategShow] = useState("navItem");

  function productCategoryShow(category) {
    switch(category){
      case "men":
        if(menCateg === "navItem"){
          menCategShow("navItem categListShow")
        } else {
          menCategShow("navItem")
        }
        break;
      case "women":
        if(womenCateg === "navItem"){
          womenCategShow("navItem categListShow")
        } else {
          womenCategShow("navItem")
        }
        break;
      case "fashion":
        if(fashionCateg === "navItem"){
          fashionCategShow("navItem categListShow")
        } else {
          fashionCategShow("navItem")
        }
        break;
      case "electronics":
        if(elecCateg === "navItem"){
          elecCategShow("navItem categListShow")
        } else {
          elecCategShow("navItem")
        }
        break;
      default:
        alert("this category is not available");
    }
  }

  return (
    <div className={classNavbar}>
      <div className='navItem'>
        <div><p>Best Sellers</p></div>
      </div>
      <div className='navItem'>
        <div><p>Today's Deals</p></div>
      </div>
      <div className={menCateg}>
        <div onClick={() => { productCategoryShow("men") }}><p>Men</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Belts</p>
          <p>Shoes</p>
          <p>Jeans</p>
          <p>Shirts</p>
          <p>Jackets</p>
          <p>Sandals</p>
          <p>Sunglasses</p>
        </div>
      </div>
      <div className={womenCateg}>
        <div onClick={() => { productCategoryShow("women") }}><p>Women</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Bags</p>
          <p>Gown</p>
          <p>Tops</p>
          <p>Jeans</p>
          <p>Sarees</p>
          <p>Kurtis</p>
          <p>Suits</p>
          <p>Lehanga</p>
        </div>
      </div>
      <div className={fashionCateg}>
        <div onClick={() => { productCategoryShow("fashion") }}><p>Fashion</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Watches</p>
          <p>Jewellery</p>
          <p>Sunglasses</p>
          <p>Women Bags</p>
        </div>
      </div>
      <div className={elecCateg}>
        <div onClick={() => { productCategoryShow("electronics") }}><p>Electronics</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Mobile</p>
          <p>Laptop</p>
          <p>Camera</p>
          <p>Speaker</p>
          <p>Smart Watches</p>
        </div>
      </div>
      <div className='navItem'>
        <div><p>Books</p></div>
      </div>
    </div>
  )
}

export default Navbar