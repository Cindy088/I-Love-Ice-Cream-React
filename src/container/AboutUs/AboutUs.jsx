import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__wrapper section__padding flex__center"
    id="about"
  >
    <div className="app__aboutus-content_about ">
      <img src={images.about} alt="about_about" />
    </div>
    <div className="app__aboutus-content_about ">
      <h1 className="headtext__cormorant">About Us</h1>
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
  </div>
);

export default AboutUs;
