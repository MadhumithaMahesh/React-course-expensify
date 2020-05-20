// // // import React from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import {matchPath} from 'react-router-dom'
// // // const match = matchPath(this.props.history.location.pathname,{
// // //   path:'/edit/:param'

// // // })
// // // return(
// // //   <div>
// // //   This is from my edit expense component 
// // // </div>
// // // )
// // import React from 'react';
// // import { connect } from 'react-redux'
// // import ExpenseForm from './ExpenseForm'
// // import {editExpense} from '../actions/expenses'

// // const EditExpensePage = (props) => {
 
// //   return (
// //     <div>
// //       ExpenseForm
// //       <ExpenseForm 
// //       expense = {props.expense}
// //       onSubmit={(expense)=>
// //       {
// //         props.dispatch(editExpense(props.expense.id,expense))
// //         props.history.push('/')
// //       }}></ExpenseForm>
// //     </div>
// //   );
// // };
// // const mapToStateProps = (state,props)=>
// // {
// // return{
// //   expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
// // }
// // }
// // export default connect(mapToStateProps)(EditExpensePage);
// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };

// const mapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//   };
// };

// export default connect(mapStateToProps)(EditExpensePage);
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
  startEditExpense = (expense)=>
  {
    this.props.startEditExpense(this.props.expense.id,expense)
    this.props.history.push('/');
  }
  startRemoveExpense = (expense)=>
  {
    this.props.startRemoveExpense({id:this.props.expense.id})
    this.props.history.push('/');
  }
  render()
  {
    return(
      <div>
        <h1>Edit expense</h1>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.startEditExpense}
      />
      <button onClick={this.startRemoveExpense}>Remove</button>
    </div>
    )
  }
}
;

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch,props)=>
(
  {
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense:(id)=>dispatch(startRemoveExpense(id))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
