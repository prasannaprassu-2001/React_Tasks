import React, { PureComponent } from 'react';
import './Home.scss';
import logo from '../images/logoipsum-225.svg';
import { Link } from 'react-router-dom';

export default class HomeComponent extends PureComponent {
  render() {
    return (
      <div>
        <nav className='flex-div'>
          <img src={logo} alt=""/>
              <div className='list'>
                <ul className='navbar'>
                  <li>
                  <Link className='active' to="/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="">Dashboard</Link>
                  </li>
                </ul>
                </div>
               
        </nav>
        <div className='content'>
          <h1>Welcome to COdilar</h1>
          <p>Subscribe Codilar Channel to wach more React videos,press the bell icon to get latest updates.</p>
          <div>
            <button className="btn" type="button"><span></span>WATCH MORE</button>
            <button className="btn" type="button"><span></span>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    )
  }
}
