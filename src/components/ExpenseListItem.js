// import React from 'react'
// import{Link} from 'react-router-dom'
// import {removeExpense} from '../actions/expenses'
// import { connect } from 'react-redux'

// const ExpenseListItem = ({dispatch,id,description,amount})=>(
//     <div>
//         <Link to ={`/edit/${id}`}>
//         <h1>{description}</h1>
//         </Link>
        
// <h2>{amount}</h2>
// <button onClick={()=>{
//     dispatch(removeExpense({id}))
// }
    
// }>Remove</button>
//     </div>
// )

// export default connect()(ExpenseListItem)

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
