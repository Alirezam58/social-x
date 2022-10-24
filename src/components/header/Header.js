import React, { useEffect } from 'react';
import './Header.css';
import phoneHeader from '../../assets/phone-header-bg.png';
import { BsMouse } from 'react-icons/bs';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h2>
            <span>فعال ترین سیستم</span>
            <span>پیام رسان چند سکویی</span>
            <span>رسانه مدیا کو</span>
          </h2>
          <p className="u-text-light u-text-small">
            شیوه ای نوین و مطئمن در ارتباطات بین سازمانی، گروه های کاری و شخصی
            بطور مداوم و شبانه روزی
          </p>
          <div className="header-cta">
            <Button text={'اکنون ببینید'} btnClass={'btn-dark'} href={'#'} />
            <Button text={'بیشتر بدانید'} btnClass={'btn-orange'} href={'#'} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="Phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
