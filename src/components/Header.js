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
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
<button onClick ={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch)=>
(
  {
    startLogout:()=>dispatch(startLogout())
  }
)

export default connect(undefined,mapDispatchToProps)(Header);
