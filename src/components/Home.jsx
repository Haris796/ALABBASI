import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [activeHomeSlide, setActiveHomeSlide] = useState(0);
  const homeSliderImages = ["/Al1.jpeg", "/Al2.jpeg", "/al3.jpeg", "/al4.jpeg", "/al5.jpeg", "/al6.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHomeSlide((prev) => (prev + 1) % homeSliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [homeSliderImages.length]);

  return (
    <div className="pioneer-page" id="home">
      {/* ===== Top Info Bar + Navbar ===== */}
      <header className="pioneer-header">
        {/* Top contact bar */}
        <div className="top-bar d-none d-lg-flex justify-content-end align-items-center px-4 py-2">
          <a href="tel:+923135599545" className="top-bar-link me-4">
            <i className="bi bi-telephone-fill me-2"></i>
            +92 313 5599545
          </a>

          <a
            href="mailto:alabbasitradersrawat@gmail.com"
            className="top-bar-link me-4"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            alabbasitradersrawat@gmail.com
          </a>

          <span className="divider me-4"></span>

          <a href="#" className="social-icon me-3" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="#" className="social-icon me-3" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark main-navbar px-4">
          <div className="container-fluid px-0">
            {/* Logo */}
            <a className="navbar-brand logo-wrapper" href="#home">
              <img
                src="/ALABBASIlogo.png"
                alt="AL ABBASI logo"
                className="navbar-logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbarContent"
              aria-controls="mainNavbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbarContent">
              <ul className="navbar-nav ms-lg-4 mb-2 mb-lg-0 gap-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    HOME
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT US
                  </a>
                </li>

                {/* Products Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#products"
                    id="productsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </a>

                  <ul
                    className="dropdown-menu pioneer-dropdown"
                    aria-labelledby="productsDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products#spoons-forks"
                      >
                        Spoons & Forks
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products#non-woven-bags"
                      >
                        Non-Woven Bags
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products#disposable-glass"
                      >
                        Disposable Glass
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products#foam-parcel"
                      >
                        Foam Parcel
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products#disposable-cups"
                      >
                        Disposable Cup
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero-section d-flex align-items-center">
        <div className="home-hero-bg" aria-hidden="true">
          {homeSliderImages.map((src, index) => (
            <div
              key={src}
              className={
                "home-slider-slide" +
                (index === activeHomeSlide ? " home-slide-active" : "")
              }
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="home-hero-overlay" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <h1 className="hero-heading mb-4">
                CUSTOMIZED ORDERS ARE UNDERTAKEN, WHOLESALE NON-WOVEN BAGS,
                Forks & Spoons, Disposable Glass, Foam Parcel
              </h1>

              <p className="hero-text mb-4">
                We specialize in customized orders and wholesale
                high-quality biodegradable bags.
              </p>

              <a href="#about" className="btn btn-pioneer">
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Floating WhatsApp Button ===== */}
      <a
        href="https://wa.me/923135599545"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
   );
};

export default Home;
