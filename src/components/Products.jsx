import React, { useState, useEffect } from "react";
import "./Products.css";
import { useLocation } from "react-router-dom";
const Products = () => {
    

// component ke andar:
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150); // thoda time diya taake Home/About render ho jayen phir scroll ho
  }
}, [location]);
  const [activeSlides, setActiveSlides] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
  });

  // Product images
  const productImages = {
    product1: ["/W3.png", "/NW1.jpg","/Al1.jpeg","/Al2.jpeg"], // Non-Woven Bags
    product2: ["/Disposible1.jpg", "/D2.jpg","/al9.jpeg","/al10.jpeg","/al8.jpeg"], // Disposable Cups
    product3: ["/DisposibleCups.jpg", "/D3.jpg","/al12.jpeg","/al11.jpeg"], // Biodegradable Bags
    product4: ["/fork.jpg", "/spoon.jpg"], // Spoons & Forks
    product5: ["/al3.jpeg", "/al4.jpeg","/al5.jpeg"], // Foam Parcel
  };

  // Auto-rotate sliders
  useEffect(() => {
    const intervals = {};
    Object.keys(productImages).forEach((key) => {
      intervals[key] = setInterval(() => {
        setActiveSlides((prev) => ({
          ...prev,
          [key]: (prev[key] + 1) % productImages[key].length,
        }));
      }, 4000);
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) {
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);

  const handleSlideClick = (product, index) => {
    setActiveSlides((prev) => ({
      ...prev,
      [product]: index,
    }));
  };

  return (
    <section className="products-section" id="products">
      {/* ===== Section 1: Text Left, Image Right ===== */}
      <div className="container-fluid px-0" id="non-woven-bags">
        <div className="row g-0 align-items-center product-item product-item-1">
          {/* Left: Text Content */}
          <div className="col-lg-6 product-text-col">
            <div className="product-text-inner">
              <span className="product-label">Premium Quality</span>
              <h3 className="product-heading">Non-Woven Bags</h3>
              <p className="product-description">
                Our non-woven bags are eco-friendly, durable, and perfect for retail, 
                promotional, and corporate use. Available wholesale and made with
                premium materials,
                they offer excellent print quality and reusability. Ideal for businesses 
                looking to make a sustainable impact.
              </p>
              <ul className="product-features">
                <li><i className="bi bi-check-circle-fill"></i> Premium Quality Material</li>
                <li><i className="bi bi-check-circle-fill"></i> Eco-Friendly & Recyclable</li>
                <li><i className="bi bi-check-circle-fill"></i> Custom Branding Available</li>
                <li><i className="bi bi-check-circle-fill"></i> Competitive Pricing</li>
              </ul>
              <a href="#contact" className="btn btn-product">
                INQUIRE NOW
              </a>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div className="col-lg-6 product-image-col">
            <div className="product-slider">
              {productImages.product1.map((src, index) => (
                <div
                  key={index}
                  className={`slider-slide ${
                    index === activeSlides.product1 ? "slide-active" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="slider-dots">
                {productImages.product1.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === activeSlides.product1 ? "dot-active" : ""
                    }`}
                    onClick={() => handleSlideClick("product1", index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2: Image Left, Text Right ===== */}
      <div className="container-fluid px-0" id="disposable-cups">
        <div className="row g-0 align-items-center product-item product-item-2">
          {/* Left: Image Slider */}
          <div className="col-lg-6 product-image-col">
            <div className="product-slider">
              {productImages.product2.map((src, index) => (
                <div
                  key={index}
                  className={`slider-slide ${
                    index === activeSlides.product2 ? "slide-active" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="slider-dots">
                {productImages.product2.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === activeSlides.product2 ? "dot-active" : ""
                    }`}
                    onClick={() => handleSlideClick("product2", index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="col-lg-6 product-text-col">
            <div className="product-text-inner">
              <span className="product-label">Reliable Solution</span>
              <h3 className="product-heading">Disposable Cups</h3>
              <p className="product-description">
                High-quality disposable cups designed for residential and commercial use. 
                Our cups are durable, leak-proof, and come in various sizes. 
                Perfect for daily use with a comfortable grip and tear-resistant 
                material for everyday needs.
              </p>
              <ul className="product-features">
                <li><i className="bi bi-check-circle-fill"></i> Puncture-Resistant Design</li>
                <li><i className="bi bi-check-circle-fill"></i> Leak-Proof Technology</li>
                <li><i className="bi bi-check-circle-fill"></i> Various Sizes Available</li>
                <li><i className="bi bi-check-circle-fill"></i> Cost-Effective Solution</li>
              </ul>
              <a href="#contact" className="btn btn-product">
                INQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 3: Text Left, Image Right ===== */}
      <div className="container-fluid px-0" id="disposable-glass">
        <div className="row g-0 align-items-center product-item product-item-3">
          {/* Left: Text Content */}
          <div className="col-lg-6 product-text-col">
            <div className="product-text-inner">
              <span className="product-label">Eco Innovation</span>
              <h3 className="product-heading"> DISPOSABLE GLASS</h3>
              <p className="product-description">
                Our disposable glasses are designed to provide reliable quality, convenience, and hygiene for every occasion. From everyday use to restaurants, offices, events, catering, and commercial requirements, we offer a wide range of disposable glasses in different sizes and styles. Made with quality materials, our glasses provide the strength and durability you can depend on while delivering practical and hygienic serving solutions
              </p>
              <ul className="product-features">
              <li><i className="bi bi-check-circle-fill"></i> Wide Range of Sizes</li>
<li><i className="bi bi-check-circle-fill"></i> High-Quality Materials</li>
<li><i className="bi bi-check-circle-fill"></i> Hygienic & Convenient</li>
<li><i className="bi bi-check-circle-fill"></i> Strong & Reliable</li>
              </ul>
              <a href="#contact" className="btn btn-product">
                INQUIRE NOW
              </a>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div className="col-lg-6 product-image-col">
            <div className="product-slider">
              {productImages.product3.map((src, index) => (
                <div
                  key={index}
                  className={`slider-slide ${
                    index === activeSlides.product3 ? "slide-active" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="slider-dots">
                {productImages.product3.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === activeSlides.product3 ? "dot-active" : ""
                    }`}
                    onClick={() => handleSlideClick("product3", index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 4: Text Left, Image Right ===== */}
      <div className="container-fluid px-0" id="spoons-forks">
        <div className="row g-0 align-items-center product-item product-item-4">
          {/* Left: Text Content */}
          <div className="col-lg-6 product-text-col">
            <div className="product-text-inner">
              <span className="product-label">Dining Essentials</span>
              <h3 className="product-heading">Spoons & Forks</h3>
              <p className="product-description">
                Premium disposable spoons and forks for restaurants, catering, fast food outlets, 
                and events. Our utensils are made from high-quality materials that are sturdy, 
                comfortable, and durable. Perfect for any dining occasion, offering excellent 
                value without compromising on quality or hygiene standards.
              </p>
              <ul className="product-features">
                <li><i className="bi bi-check-circle-fill"></i> Durable & Lightweight</li>
                <li><i className="bi bi-check-circle-fill"></i> Food-Safe Materials</li>
                <li><i className="bi bi-check-circle-fill"></i> Available in Bulk</li>
                <li><i className="bi bi-check-circle-fill"></i> Eco-Friendly Options</li>
              </ul>
              <a href="#contact" className="btn btn-product">
                INQUIRE NOW
              </a>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div className="col-lg-6 product-image-col">
            <div className="product-slider">
              {productImages.product4.map((src, index) => (
                <div
                  key={index}
                  className={`slider-slide ${
                    index === activeSlides.product4 ? "slide-active" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="slider-dots">
                {productImages.product4.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === activeSlides.product4 ? "dot-active" : ""
                    }`}
                    onClick={() => handleSlideClick("product4", index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 5: Image Left, Text Right ===== */}
      <div className="container-fluid px-0" id="foam-parcel">
        <div className="row g-0 align-items-center product-item product-item-5">
          {/* Left: Image Slider */}
          <div className="col-lg-6 product-image-col">
            <div className="product-slider">
              {productImages.product5.map((src, index) => (
                <div
                  key={index}
                  className={`slider-slide ${
                    index === activeSlides.product5 ? "slide-active" : ""
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="slider-dots">
                {productImages.product5.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${
                      index === activeSlides.product5 ? "dot-active" : ""
                    }`}
                    onClick={() => handleSlideClick("product5", index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="col-lg-6 product-text-col">
            <div className="product-text-inner">
              <span className="product-label">Protective Packaging</span>
              <h3 className="product-heading">Foam Parcel</h3>
              <p className="product-description">
                Lightweight and protective foam parcel packaging solution for safe shipping 
                and storage. Our foam parcels provide excellent cushioning and protection for 
                fragile items, electronics, and delicate products. Ideal for e-commerce, 
                logistics, and businesses requiring reliable packaging solutions.
              </p>
              <ul className="product-features">
                <li><i className="bi bi-check-circle-fill"></i> Superior Shock Protection</li>
                <li><i className="bi bi-check-circle-fill"></i> Lightweight Design</li>
                <li><i className="bi bi-check-circle-fill"></i> Custom Sizes Available</li>
                <li><i className="bi bi-check-circle-fill"></i> Durable & Reliable</li>
              </ul>
              <a href="#contact" className="btn btn-product">
                INQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;








