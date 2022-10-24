import React from 'react';
import './Download.css';
import { FaApple, FaWindows } from 'react-icons/fa';
import { GrAndroid } from 'react-icons/gr';
import { IconContext } from 'react-icons';

const Download = () => {
  return (
    <section id="download">
      <div className="container download" data-aos="fade-down">
        <h2>دانلود اپلیکیشن مدیاکو</h2>
        <p className="u-text-small u-text-light">
          برای تجربه بهتر کاربری می توانید اپلیکیشن دیاکو را از استورهای معتبر
          دانلود نمایید
        </p>
        <IconContext.Provider value={{ size: '15' }}>
          <div className="download-icons">
            <div className="download-icon">
              <GrAndroid /> <p>اندورید</p>
            </div>
            <div className="download-icon">
              <FaApple /> <p>اپل</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>ویندوز</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
