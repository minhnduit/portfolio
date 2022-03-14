import React from 'react';
import "./Footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SiZalo} from 'react-icons/si';
const Footer = () => {
  return (
    <footer>
    <div>
     <div className="container header__container">
<h1>Duy Minh</h1></div>
<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Skills</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">My Career</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
<div className="footer_socials">
 <a href="https://www.facebook.com/profile.php?id=100063464345841" rel="noreferrer" target="_blank"><FaFacebookF/></a>
  <a href="https://www.instagram.com/23.dees/" rel="noreferrer" target="_blank"><FiInstagram/></a>
  <a href="https://zalo.me/0783627272" rel="noreferrer" target="_blank"><SiZalo/></a>
</div>
    </div></footer>  
  )
}

export default Footer;