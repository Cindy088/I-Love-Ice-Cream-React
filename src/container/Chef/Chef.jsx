import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="make">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="You are the Chef" />
      <h1 className="headtext__cormorant">Make your ice creams</h1>

      <div className="app__chef-content">
        <p className="p__opensans">
          Lorem auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
          sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
          molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Cindy Zhang</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
