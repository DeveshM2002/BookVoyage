import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookVoyage</h2>
            <p className='fs-17'>Welcome to BookVoyage—your gateway to an immersive literary adventure! With BookVoyage, you can seamlessly explore a vast collection of books from every genre. Our platform empowers you to search for any book, dive into detailed descriptions, reviews, and author insights, and even discover hidden gems tailored to your taste.</p>
            <p className='fs-17'>Whether you're a casual reader or a book enthusiast, BookVoyage is designed to enhance your reading experience, making it easier than ever to embark on your next literary journey. Join us and let your imagination set sail with BookVoyage!






</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
