import React, { PureComponent } from "react";
import "./HomeStyles.scss";
import { Link } from "react-router-dom";
import Shopping from "../images/567cae7c5e5431909718620b5a2a9aa3.jpg";

export default class Homecomponent extends PureComponent {
  render() {
    return (
      <div className="container">
        <nav>
          <h1>CODILAR COLLECTIONS</h1>
          <ul className="nav-menu">
            <li className="nav-menu-li"> 
              <Link to="/">Home</Link>
            </li>
            <li className="nav-menu-li2">
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>
        <div className="shopy">
          <img className="shopy-img" src={Shopping} alt=""  />
         </div>
         <div className="shopy-text">
          <h1 className="wel">Welcome to codilar</h1><br/><br/>
          <p className="pp">E-COMMERCE  IS  A  POWERFUL  MEANS  TO  CONNECT  THE  UNCONNECTED TO  GLOBAL TRADE.</p>
         </div>
         <footer className="footer">
          <div className="footer-left">
            <h2>Codilar Developer</h2>
            <p className="footer-name">Copyright 2023 <strong>CodilarDeveloper</strong>All rights Reseeved.</p>
          </div>
          <div className="footer-center">
            <div>
            <p><span>Bangalore</span></p>
            </div>
            <div>
              <p>+91 987 654 321</p>
            </div>
            <div>
              <p>xyz@gmail.com</p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-about">
             <h1>About the Website</h1><br/>
              <strong>Codilar Collections</strong> is a e-commerce website where the customers can buy the products through online.
            </p>
          </div>
         </footer>
      </div>
    );
  }
}
