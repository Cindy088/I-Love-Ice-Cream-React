import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Sweet Fresh Tasty Cool happy" />
      <h1 className="headtext__cormorant">Today's Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_ice  flex__center">
        <p className="app__specialMenu-menu_heading">Ice Cream</p>
        <div className="app__specialMenu_menu_items">
          {data.icecreams.map((icecream, index) => (
            <MenuItem
              key={icecream.title + index}
              title={icecream.title}
              price={icecream.price}
              tags={icecream.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cake  flex__center">
        <p className="app__specialMenu-menu_heading">Ice Cream Cakes</p>
        <div className="app__specialMenu_menu_items">
          {data.cakes.map((cake, index) => (
            <MenuItem
              key={cake.title + index}
              title={cake.title}
              price={cake.price}
              tags={cake.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
