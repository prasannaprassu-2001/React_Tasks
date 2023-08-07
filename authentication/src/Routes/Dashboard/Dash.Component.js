import React, { PureComponent } from 'react'
import './Dashboard.scss';
import { Link } from "react-router-dom";
import logo from "../images/logoipsum-225.svg";

export default class DashComponent extends PureComponent {
  render() {
    const { handleLogout, logins, logoutSuccess } = this.props;
    return (
      <div>
    <nav className='flex-div'>
    <Link to="/">
            <img src={logo} alt="" />
          </Link>
              <div className='list'>
                <ul className='navbar'>
                  <li>
                  <Link className='active' to="/Login">Login</Link>
                  </li>
             
                </ul>
                </div>

               
        </nav>
        {logoutSuccess &&
          <div className='logout-success'>
            Successfully logout
          </div>}
        <div className="logout-container">
          {logins.map((login, index) => (
            <div key={index} className='user'>
              <p className='user-email'>{login.email}</p>
              <p className='user-password'>{login.password}</p>
              <button className='user-logout' onClick={() => handleLogout(login.email, login.password)}>Logout</button>
            </div>
          ))}
        </div>

      </div>
    )
  }
}
