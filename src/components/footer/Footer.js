import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>پیوندهای مفید</h4>
          <div className="footer-link">
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>پیوندهای مفید</h4>
          <div className="footer-link">
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
            <a href="#">&bull;موسسه</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>تماس با ما</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkedAlt />
              &nbsp;آدرس : رشت خیابان گلسار
            </p>
            <p>
              <FaPhoneAlt />
              &nbsp;شماره تماس : 01333234
            </p>
            <p>
              <FaFax />
              &nbsp;شماره نمابر : 01333234
            </p>
            <p>
              <FaEnvelope />
              &nbsp;پست الترونیک : abc@acd.com
            </p>
            <p>
              <FaGlobe />
              &nbsp;آدرس سایت : www.npisoftware.ir
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={Logo} />
          <p>طراحی و توسعه npisoftware.ir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
