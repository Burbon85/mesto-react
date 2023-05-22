import React from 'react';
import headerLogotip from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogotip} alt="Логотип" />
        </header>
    );
  }
  
  export default Header;