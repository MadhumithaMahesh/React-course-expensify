// import React from 'react';
// import ExpenseList from './ExpenseList'
// const ExpenseDashboardPage = () => (
//     <div>
//       This is from my dashboard components
//       <ExpenseList></ExpenseList>
//     </div>
//   );

//   export default ExpenseDashboardPage

import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter/>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
