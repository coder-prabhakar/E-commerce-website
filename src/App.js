import './App.css';
import { useState } from "react";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';

function App() {

  const [classNavbar,classNavbarActive] = useState("Navbar");

  function navbarActive(){
    if(classNavbar === "Navbar"){
      classNavbarActive("Navbar NavbarActive")
    } else {
      classNavbarActive("Navbar")
    }
  }

  return (
    <div className="App">
     <Header navbarActive={navbarActive}/>
     <Navbar classNavbar={classNavbar}/>
     <Home />
    </div>
  );
}

export default App;