import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li><h3>Terms of Use</h3></li>
              <li><h3>Privacy</h3></li>
              <li><h3>Blog</h3></li>
              <li><h3>FAQ</h3></li>
            </ul>
            <p>
              © 2023 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and 
              content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Streamit App</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt='App Store' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt='Google Play Store' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer