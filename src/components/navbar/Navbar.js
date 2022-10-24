import React, { useState } from 'react';
import './Navbar.css';
import { SiAnaconda } from 'react-icons/si';
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container navbar">
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}
        >
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
          <li>
            <a href="#features">امکانات</a>
          </li>
          <li>
            <a href="#download">دانلود</a>
          </li>
          <li>
            <a href="#subscribe">عضویت</a>
          </li>
          <li>
            <Button text={'اکنون ببینید'} btnClass={'btn-dark'} href={'#faq'} />
          </li>
        </ul>
      </menu>
      <div className="logo">
        <SiAnaconda color="#fff" size={33} />
        <p className="logo-text">
          رسانه مدیا<span>کو</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
