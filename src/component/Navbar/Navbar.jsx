import "./Navbar.css"
function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navItem'>
        <div><p>Best Sellers</p></div>
      </div>
      <div className='navItem'>
        <div><p>Today's Deals</p></div>
      </div>
      <div className='navItem'>
        <div><p>Men</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Belts</p>
          <p>Jeans</p>
          <p>Shirts</p>
          <p>Tshirts</p>
          <p>Jackets</p>
          <p>Sandals</p>
          <p>Trousers</p>
          <p>Sunglasses</p>
          <p>Casual Shoes</p>
          <p>Sports Shoes</p>
        </div>
      </div>
      <div className='navItem'>
        <div><p>Women</p><i class="uil uil-angle-down"></i></div>
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
      <div className='navItem'>
        <div><p>Books</p></div>
      </div>
      <div className='navItem'>
        <div><p>Fashion</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Watches</p>
          <p>Jewellery</p>
          <p>Sunglasses</p>
          <p>Women Bags</p>
        </div>
      </div>
      <div className='navItem'>
        <div><p>Electronics</p><i class="uil uil-angle-down"></i></div>
        <div>
          <p>Mobile</p>
          <p>Laptop</p>
          <p>Camera</p>
          <p>Speaker</p>
          <p>Smart Watches</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
