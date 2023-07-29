import React, { PureComponent } from 'react'
import './Dashboard.scss';
import { Link } from "react-router-dom";
import logo from "../images/logoipsum-225.svg";

export default class DashComponent extends PureComponent {
  render() {
    const {handleLogout, logins}=this.props;
    return (
      <div>
            <nav className='flex-div'>
          <img src={logo} alt=""/>
              <div className='list'>
                <ul className='navbar'>
                  <li>
                  <Link className='active' to="/Login">Login</Link>
                  </li>
              
                </ul>
                </div>
               
        </nav>
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
