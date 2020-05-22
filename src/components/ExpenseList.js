// import React from 'react'
// import {connect} from 'react-redux'
// import ExpenseListItem from './ExpenseListItem'
// import SelectedExpenses from '../selectors/expenses'
// import ExpenseListFilter from './ExpenseListFilter'

// const ExpenseList = (props)=>(
//     <div>
// <ExpenseListFilter/>
//         <h1>Expense List</h1>
//     {props.expenses.map((expense)=>
//     {
//         return <ExpenseListItem key= {expense.id} {...expense}/>
        
//     })}
//     </div>
    
// )

// const mapStateToProps =(state)=>
// {
// return{
//     expenses:SelectedExpenses(state.expenses,state.filters)
// }
// }
// export default connect(mapStateToProps)(ExpenseList)

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
    <div className="show-for-mobile">Expenses</div>
    <div className="show-for-desktop">Expense</div>
    <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
  
      props.expenses.length ===0?(
        <span className="list_message list-item">No expense</span>
        ):
        (
          props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
        )
    }
    </div>
    
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
