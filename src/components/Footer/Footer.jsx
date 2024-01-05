import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              <a
                href="https://maps.app.goo.gl/huwpPoBZzPiBmDk59"
                target="_blank"
              >
                Pularhat, Jessore 7400, Khulna, Bangladesh
              </a>
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
              <a href="tel:+8801623939834">Phone: +8801623939834</a>
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">
              <a href="mailto:monerulmd5@gmail.com">monerulmd5@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <Link to="/category/1" className="text">
            Headphones
          </Link>
          <Link to="/category/2" className="text">
            Bluetooth Speakers
          </Link>
          <Link to="/category/3" className="text">
            Smart Watches
          </Link>
          <Link to="/category/4" className="text">
            Wireless Earbuds
          </Link>
          <Link to="/" className="text">
            Home Theatre
          </Link>
          <Link to="/" className="text">
            Projectors
          </Link>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <Link to="/" className="text">
            Home
          </Link>
          <Link to="/about" className="text">
            About
          </Link>
          <Link to="/policy" className="text">
            Privacy Policy
          </Link>
          <Link to="/policy" className="text">
            Returns
          </Link>
          <Link to="/policy" className="text">
            Terms & Conditions
          </Link>
          <Link to="/" className="text">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            2022 CREATED BY MONERUL ISLAM BISHAL. PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} alt="payment images" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
