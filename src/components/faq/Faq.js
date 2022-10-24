import React from 'react';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from './Question';
import { questions } from './data.js';

const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات رایج</h2>
          <p className="u-text-small u-text-dark">
            در این بخش اصلی ترین امکانات اپلیکیشن کاربردی را نمایش می دهد که
            توسط آن کاربر می تواند از تمام امکانات استفاده نماید
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
