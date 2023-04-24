import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">123 Ice Cream Street North,</p>
        <p className="p__opensans">Sydney, NSW 2000</p>
        <p className="p__opensans">+61 1234 5678</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__navbar-logo">I Love Ice Cream</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, placeat.
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">09:00 am - 06:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 I Love Ice Cream. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
