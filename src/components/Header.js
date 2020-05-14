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

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
