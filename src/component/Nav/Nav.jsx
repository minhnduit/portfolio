import React,{useState} from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {BsTelephone} from "react-icons/bs";
const Nav = () => {
  const [activelyNav,setActivelyNav] = useState('#');
  return (
    <div><nav>
      <a href="#"  onClick={()=> setActivelyNav('#')} 
      className={activelyNav === '#' ? 'active': ''}><AiOutlineHome/></a>

      <a href="#about" onClick={()=> setActivelyNav('#about')} 
      className={activelyNav === '#about' ? 'active': ''}><AiOutlineUser/></a>

      <a href="#experience" onClick={()=> setActivelyNav('#experience')} 
      className={activelyNav === '#experience' ? 'active': ''}><BiBook/></a>

      <a href="#contact" onClick={()=> setActivelyNav('#contact')} 
      className={activelyNav === '#contact' ? 'active': ''}><BsTelephone/></a>
      </nav>
    </div>
  )
}

export default Nav;