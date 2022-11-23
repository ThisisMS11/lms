import React from 'react'
import './styles/Footer.css'
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">The laundry and dry-cleaning industry has seen a huge transformation over recent years. On-demand laundry services have made it easier for users to get their laundry done in convenient, reliable, and affordable way. FastWash aims at simplifying and automating the day-to-day operations of the laundry and dry cleaning business.

                From garment pick up via the app, labeling clothes with barcode, processing garment in the factory, laundry PoS, to delivery at customers’ doorsteps, this LMS covers everything whether you are running a single outlet or multi-store laundry business.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="#" className='mb-2'>Normal Wash</a></li>
                <li><a href="#" className='mb-2'>Pigment Wash</a></li>
                <li><a href="#" className='mb-2'>Bleach Wash</a></li>
                <li><a href="#" className='mb-2'>Stone Wash</a></li>
                <li><a href="#" className='mb-2'>Acid Wash</a></li>
                <li><a href="#" className='mb-16'>Sand Blasting</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>


        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 mt-16">
              <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                <a href="#">FastWash</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer