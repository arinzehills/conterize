import React from "react";
import { Link } from "react-router-dom";
import FooterSvg from "../FooterSvg/FooterSvg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../Button/Button";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer_wrapper">
        <FooterSvg />
        <div className="footer-container">
          <section className="footer-subscription">
            <p className="footer-subscription-heading">
              Join our exclusive membership to receive the latest news and
              trends
            </p>
            <p className="footer-subscription-text">
              You can unsubscribe at any time.
            </p>
            <div className="input-areas">
              <form>
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                  buttonColor="btn--normal"
                  style={{ background: "white" }}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </section>
          <div className="footer-links">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to="/sign-up">How it works</Link>
                <Link to="/">Testimonials</Link>
                {/*<Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link> */}
                <Link to="/">Terms of Service</Link>
              </div>
              <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Forums</Link>
                <Link to="/">Complaints</Link>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>More</h2>
                <Link to="/">Suggest to us</Link>
                <Link to="/">Contribute</Link>
                {/* <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
              </div>
              <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-logo">
                  <img
                    src="images/whitelogo.png"
                    style={{ maxHeight: "100px" }}
                    alt=""
                  />
                </Link>
              </div>
              <small className="website-rights">Conterize.com © 2022</small>
              <div className="social-icons">
                <Link
                  className="social-icon-link"
                  to="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="social-icon-link"
                  to="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="social-icon-link"
                  to={
                    "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                  }
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </Link>
                <Link
                  className="social-icon-link"
                  to="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="social-icon-link"
                  to="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
