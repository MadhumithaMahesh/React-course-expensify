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
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
 
    <Link className="list-item" to={`/edit/${id}`}>
     <div>
     <h3 className="list-item_title">{description}</h3>
     <span className="list-item_subtitle">{moment(createdAt).format('MMMM Do YYYY')}</span>
       </div> 
    <h3 className="list-item_data">{numeral(amount/100).format('$0,0.00')}</h3>
      
      </Link>
);

export default ExpenseListItem;
