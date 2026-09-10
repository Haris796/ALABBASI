import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pioneer-footer" id="contact">
      {/* ===== Top accent strip ===== */}
      <div className="footer-top-strip"></div>

      <div className="container">
        <div className="row footer-main gy-5">
          {/* ===== Column 1: Brand + About + Socials ===== */}
          <div className="col-lg-4 col-md-6">
            <a href="#home" className="footer-brand">
              <span className="brand-main">AL ABBASI</span>
              <span className="brand-sub">Traders</span>
            </a>
            <p className="footer-about">
             We provide high-quality, durable, and customizable non-woven bags for retail, promotional, corporate, and everyday use. With a commitment to quality, competitive pricing, and reliable service, we aim to deliver packaging solutions that meet every customer’s needs.

            </p>

            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
             
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
             
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* ===== Column 2: Quick Links ===== */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">
                  <i className="bi bi-chevron-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#products">
                  <i className="bi bi-chevron-right"></i> Products
                </a>
              </li>
              <li>
                <a href="#gallery">
                  <i className="bi bi-chevron-right"></i> Gallery
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Column 3: Our Products ===== */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Our Products</h5>
            <ul className="footer-links">
              <li>
                <a href="#spoons-forks">
                  <i className="bi bi-chevron-right"></i> Spoons & Forks
                </a>
              </li>
              <li>
                <a href="#non-woven-bags">
                  <i className="bi bi-chevron-right"></i> Non-Woven Bags
                </a>
              </li>
              <li>
                <a href="#disposable-glass">
                  <i className="bi bi-chevron-right"></i> DISPOSABLE GLASS
                </a>
              </li>
              <li>
                <a href="#foam-parcel">
                  <i className="bi bi-chevron-right"></i> Foam Parcel
                </a>
              </li>
              <li>
                <a href="#disposable-cups">
                  <i className="bi bi-chevron-right"></i> Disposable Cups
                </a>
              </li>
             
            </ul>
          </div>

          {/* ===== Column 4: Contact Info ===== */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Get In Touch</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                 Shop No.2 Melaad chowk Banni sarran Rawat Islamabad
                </span>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+971521213338">+92 313 5599545</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:Info@pioneerplasticfactory.com">
                  alabbasitradersrawat@gmail.com
                </a>
              </li>
              <li>
                <i className="bi bi-clock-fill"></i>
                <span>Sat – Thu: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-2">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {year} Al Abbasi Pioneer Plastic Factory. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#privacy" className="footer-bottom-link">
                Privacy Policy
              </a>
              <span className="footer-bottom-divider">|</span>
              <a href="#terms" className="footer-bottom-link">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
