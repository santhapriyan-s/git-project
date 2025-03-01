import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to SR Electricals!</h1>
        <p>Your one-stop shop for all electrical needs.</p>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/images/wire.jpg" alt="Electrical Wire" />
            <h3>High-Quality Electrical Wire</h3>
            <p>Durable and long-lasting wires for home and industrial use.</p>
          </div>
          <div className="product-item">
            <img src="/a.jpg" alt="LED Bulbs" />
            <h3>Energy-Efficient LED Bulbs</h3>
            <p>Save energy with our top-rated LED lighting solutions.</p>
          </div>
          <div className="product-item">
            <img src="/images/switch.jpg" alt="Switches" />
            <h3>Modern Electrical Switches</h3>
            <p>Safe and stylish switches for every space.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>✔ Electrical Wiring & Installations</li>
          <li>✔ Home & Office Lighting Solutions</li>
          <li>✔ Industrial Electrical Supplies</li>
          <li>✔ 24/7 Electrical Support & Repairs</li>
        </ul>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"SR Electricals provided us with top-quality wiring and fast service. Highly recommend!"</p>
          <h4>- Rahul Sharma</h4>
        </div>
        <div className="testimonial">
          <p>"Their LED bulbs are amazing! Great energy savings and excellent customer support."</p>
          <h4>- Priya Verma</h4>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>📍 Address: 123, Main Street, New Delhi, India</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: support@srelectricals.com</p>
      </section>
    </div>
  );
};

export default MainPage;
