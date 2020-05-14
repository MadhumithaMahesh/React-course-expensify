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
  <div>
    {
      props.expenses.length ===0?(
          <p>No expense</p>
        ):
        (
          props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
        )
    }
    
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
