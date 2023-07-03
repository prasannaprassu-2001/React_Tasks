import React, { PureComponent } from "react";
import "./NavbarStyles.scss";
import { Link } from "react-router-dom";
import Logo from "../images/myntra.png";
import profile from "../images/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg";
import whishlist from "../images/iconmonstr-heart-thin.png";
import shop from "../images/shopping-bag-icon-vector-illustration.jpg";
export default class Navbarcomponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="navbar">
          <div>
            <Link to="/">
              <img src={Logo} alt="" className="navbar-logo" />
            </Link>
          </div>

          <div className="search">
            <input
              type="search"
              className="search-input"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="icons">
            <span className="icons-profile">
              <img src={profile} alt="" height={15} />
              Profile
            </span>

            <span className="icons-whishlist">
              <img src={whishlist} alt="" height={15} />
              Whishlist
            </span>
            <span className="icons-bag">
              <img src={shop} alt="" height={15} />
              Bag
            </span>
          </div>
        </div>
        <div className="navbar-category">
          <div className="navbar-item">Category</div>
        </div>

        <div className="navbar-items">
          {data.map((items, index) => (
            <div key={index} className="navbar-item">
              <Link className="navbar-link" to={items} key={index}>
                {items}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
