import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* ===== Who We Are Hero ===== */}
      <div className="about-hero">
        <div className="container-fluid about-hero-content-wrap">
          <div className="about-hero-content">
            <span className="who-we-are">Who We Are</span>
            <h2 className="about-heading">About Us</h2>
            <p className="about-paragraph">
              We specialize in high-quality non-woven bags designed for retail, promotional, corporate, and everyday use. With a focus on quality, customization, competitive pricing, and reliable delivery, we provide practical and eco-friendly packaging solutions tailored to our customers’ needs across the UAE and beyond
            </p>
            <a href="#about" className="btn btn-pioneer">
              ABOUT US
            </a>
          </div>
        </div>
      </div>

      {/* ===== Owner/M Niaz Abbasi Section ===== */}
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center owner-section">
          {/* Left: Image */}
          <div className="col-lg-6 owner-image-col">
            <div className="owner-image-wrapper">
              <img src="/W6.jpeg" alt="Owner" className="owner-image" />
              <div className="owner-badge">Leadership</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 owner-content-col">
            <div className="owner-content-inner">
              <span className="owner-label">Meet M Niaz Abbasi</span>
              <h3 className="owner-heading">M Niaz Abbasi</h3>
              <p className="owner-title">Founder & Managing Director</p>
              
              <p className="owner-description">
              At AL ABBASI Traders, we are building a trusted name in non-woven bag wholesale through quality, innovation, and customer satisfaction. We are committed to delivering reliable and sustainable packaging solutions that meet the needs of businesses worldwide.

              </p>

              <div className="owner-highlights desktop-owner-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">3+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">500+</div>
                  <div className="highlight-label">Happy Clients</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-label">Quality Assured</div>
                </div>
              </div>

              <a href="#contact" className="btn btn-owner">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="owner-highlights mobile-owner-highlights">
          <div className="highlight-item">
            <div className="highlight-number">3+</div>
            <div className="highlight-label">Years Experience</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-number">500+</div>
            <div className="highlight-label">Happy Clients</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-number">100%</div>
            <div className="highlight-label">Quality Assured</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;