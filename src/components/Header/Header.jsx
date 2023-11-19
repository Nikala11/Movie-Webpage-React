import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./Images/logo.png' alt='Streamit' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"}>
              <li><a href='#home'>Home</a></li>
              <li><a href='#series'>Series</a></li>
              <li><a href='#movies'>Movies</a></li>
              <li><a href='#pages'>Pages</a></li>
              <li><a href='#pricing'>Pricing</a></li>
              <li><a href='#contract'>Contact</a></li>
            </ul>
            <button class='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Us</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header