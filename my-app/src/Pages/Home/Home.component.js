import React, { PureComponent } from "react";
import "./HomeStyles.scss";
import { Link } from "react-router-dom";
import Shopping from "../images/shopping-bag-icon-flat-abstract-background-vector-4253899.jpg";

export default class Homecomponent extends PureComponent {
  render() {
    return (
      <div className="container">
        <nav>
          <h1>CODILAR COLLECTIONS</h1>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>
        <div className="shopy">
          <img src={Shopping} alt=""  />
         </div>
      </div>
    );
  }
}
