import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {

  

  render() {
    return(
    <nav style={{paddingRight:10, paddingLeft: 10, backgroundColor: '#9CA9FF', fontFamily: 'Montserrat, sans-serif'}}>
        <div className="nav-wrapper">
          <Link
            to='/'
            className="left brand-logo" style={{fontWeight: 300}}>
            {"{ |-|u3ri5ti< Eval }"}
          </Link>
          <ul className="right">
            <li key="profile" sytle={{cursor: 'pointer'}}><Link to="/">Dashboard</Link></li>
            <li key="project" sytle={{cursor: 'pointer'}}><Link to="/report">Report</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
