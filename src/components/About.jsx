import React, { useState, useEffect, useMemo } from "react";
import "./About.css";


const localWovenBagImages = [
   "/W1.png",
  "/W2.png",
   "/W3.png",
 
];

// Color palette used to generate placeholder "woven bag" textures
// (PP woven sack / jute style stripes) so the slider always has
// something to show even before you add your real photos.
const wovenColorSets = [
  ["#e8a0b4", "#f7f7f7"], // pink & white PP woven
  ["#c9a15a", "#f0e4c9"], // jute brown
  ["#4caf1f", "#eafbe0"], // pioneer green
  ["#3f7fbf", "#eaf3fb"], // blue woven sack
  ["#d9534f", "#fbeaea"], // red stripe woven
  ["#7d6608", "#f5ecd0"], // olive/khaki woven
];

// Generates a simple crosshatch "woven" texture as an SVG data URI
function generateWovenTexture(colorA, colorB) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
      <rect width="400" height="400" fill="${colorB}"/>
      <g stroke="${colorA}" stroke-width="10" opacity="0.85">
        ${Array.from({ length: 20 })
          .map(
            (_, i) =>
              `<line x1="${i * 40 - 200}" y1="0" x2="${
                i * 40 + 200
              }" y2="400" />`
          )
          .join("")}
      </g>
      <g stroke="${colorB}" stroke-width="6" opacity="0.6">
        ${Array.from({ length: 20 })
          .map((_, i) => `<line x1="0" y1="${i * 22}" x2="400" y2="${i * 22}" />`)
          .join("")}
      </g>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Fisher-Yates shuffle so the order is different every time the page loads
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Build the slider images once per mount:
  // uses your local photos if provided, otherwise falls back to
  // randomly generated + randomly ordered woven-bag textures.
  const sliderImages = useMemo(() => {
    if (localWovenBagImages.length > 0) {
      return shuffle(localWovenBagImages);
    }
    return shuffle(wovenColorSets).map(([a, b]) =>
      generateWovenTexture(a, b)
    );
  }, []);

  // Auto-rotate the slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="about-section" id="about">
      {/* ===== Full-Screen Hero: Slider Images as Background, Text on Top ===== */}
      <div className="about-hero">
        {/* Background image slider */}
        <div className="about-hero-bg">
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className={
                "slider-slide" +
                (index === activeSlide ? " slide-active" : "")
              }
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden={index !== activeSlide}
            />
          ))}
          {/* Dark gradient overlay so text stays readable */}
          <div className="about-hero-overlay" />
        </div>

        {/* Text content on top of the background */}
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

        {/* Slide indicator dots */}
        <div className="slider-dots">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                "slider-dot" + (index === activeSlide ? " dot-active" : "")
              }
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* ===== Owner/Leadership Section ===== */}
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
              <span className="owner-label">Meet Our Leadership</span>
              <h3 className="owner-heading">AL ABBASI</h3>
              <p className="owner-title">Founder & Managing Director</p>
              
              <p className="owner-description">
              At AL ABBASI, we are building a trusted name in non-woven bag manufacturing through quality, innovation, and customer satisfaction. We are committed to delivering reliable and sustainable packaging solutions that meet the needs of businesses worldwide.

              </p>

              <div className="owner-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">15+</div>
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
      </div>
    </section>
  );
};

export default About;