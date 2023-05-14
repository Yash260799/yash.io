import React from 'react'
import PropTypes from 'prop-types'
import logo1 from '../images/icons8-facebook-48.png'
import logo2 from '../images/icons8-twitter-48.png'
import logo3 from '../images/icons8-instagram-48.png'
import logo4 from '../images/icons8-linkedin-circled-48.png'
import logo5 from '../images/icons8-github-30.png'



export default function Footer() {
  return (
    <div>
       <footer className="text-center text-lg-start bg-white text-muted">
      
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <img src={logo1} alt="facebook" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={logo2} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={logo3} alt="insta" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={logo4} alt="linkein" />
            </a>
            <a href="https://www.github.com/">
              <img src={logo5} alt="github" />
            </a>
          </div>
        </section>
        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />RentSelf
                </h6>
                <p>
                  Cars to rent in Bangalore | Cars to rent in Mumbai |
                  Cars to rent in Delhi NCR |Cars to rent in Chennai |
                  Cars to rent in Pune |Cars to rent in Hyderabad |Cars to rent in Chandigarh
                  |Cars to rent in Kolkata |Cars to rent in Ahmedabad
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold mb-4">
                  Our Company
                </h6>
                <p>
                  <a href="#!" className="text-reset">Blog</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">About Us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Browse Vehicles</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Career</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Help and Trust
                </h6>
                <p>
                  <a href="#!" className="text-reset">Privacy policy</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Terms &amp; conditions</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Fraud alert</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Trust &amp; safety</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" /> SANTCRUZ, MUMBAI 400010, MH</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
          <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">google.com</a>
        </div>
        </section>
        
      </footer>
    </div>
  )
}

