import React from 'react';
import "./Header.css"
import CTA from './CTA';
import ME from '../../assets/minh5.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Duy Minh</h1>
      <h5 className="text-light">Fullstack Engineer</h5>
      <CTA />
    </div>
  )
}

export default Header;