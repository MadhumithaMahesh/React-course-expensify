// import React from 'react';
// import {NavLink} from 'react-router-dom'
// const Header=()=>
    
// (
//   <header>
//   <h1>Expensify</h1>
//   <nav>
//   <NavLink to='/' activeClassName="active" exact={true}>Dashboard</NavLink>
//   <NavLink to='/create' activeClassName="active" >Create</NavLink>
//   <NavLink to='/edit' activeClassName="active" >Edit</NavLink> 
//   <NavLink to='/help' activeClassName="active" >Help</NavLink>
//   </nav>
  
// </header>

// ) 
// export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = ({startLogout}) => (
  <header className="header">
  <div className="content-container">
    <div className="header__content">
      <Link className="header__title" to="/dashboard">
        <h1>Expensify</h1>
      </Link>
      <button className="button button__link" onClick={startLogout}>Logout</button>
    </div>
  </div>
</header>
);

const mapDispatchToProps = (dispatch)=>
(
  {
    startLogout:()=>dispatch(startLogout())
  }
)

export default connect(undefined,mapDispatchToProps)(Header);
