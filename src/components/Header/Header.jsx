import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find The Book Of Your Choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Unlock a world of endless stories—search for any book, dive into detailed insights, and let your literary journey begin with just a click in our dynamic book library project! BookVoyage</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header