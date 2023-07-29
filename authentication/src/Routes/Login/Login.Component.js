import React, { PureComponent } from "react";
import logo from "../images/logoipsum-225.svg";
import "./Login.scss";
import { Link } from "react-router-dom";
export default class LoginComponent extends PureComponent {
  render() {
    const {handleLogin, handleInputChange } = this.props;
    
    return (
      <div>
        <nav className="flex-div">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </nav>
        <form onSubmit={handleLogin}>
          <div className="cover">
            <h1>LogIn</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.props.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.props.password}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="login-btn">
              LogIn
            </button>

            <p className="text">Or login using</p>
            <div className="alt-login">
              <div className="facebook">Facebook</div>
              <div className="facebook">Google</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
