import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE

const editExpense = (id,updates)=>
{
    return{
        type:'EDIT_EXPENSE',
    id,
    updates
    }
    
}


// SET_TEXT_FILTER

const setTextFilter = (text='')=>
{
return{
    type:'TEXT_FILTER',
    text
}
}
// SORT_BY_DATE
const sortByDate=()=>
{
    return {
        type:'SORT_BY_DATE'
    }
}
// SORT_BY_AMOUNT
const sortByAmount=()=>
{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
// SET_START_DATE
const setStartDate = (startDate)=>
{
    return{
        type:'SET_START_DATE',
        startDate
    }
}
// SET_END_DATE
const setEndDate = (endDate)=>
{
    return{
        type:'SET_END_DATE',
        endDate
    }
}

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
          return state.map((expense)=>
          { if(expense.id===action.id)
            return{
              ...expense,
              ...action.updates
            }})
         
              
          
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
            case 'SORT_BY_DATE':
                return{
                    ...state,
                    sortBy:'date'
                }
                case 'SORT_BY_AMOUNT':
                    return {
                        ...state,
                        sortBy:'amount'
                    }
                case 'SET_START_DATE':
                    return{
                        ...state,
                        startDate:action.startDate
                    }
                    case 'SET_END_DATE':
                        return{
                            ...state,
                            endDate:action.endDate
                        }     
    default:
      return state;
  }
};
 const getVisibleMatches=(expenses,{text,sortBy,startDate,endDate})=>
 {
    return expenses.filter((expense)=>
    {
    const matchStartDate = typeof startDate !== 'number'||expense.createdAt >= startDate
    const matchEndDate = typeof endDate !== 'number'|| expense.createdAt <= endDate; 
    const matchText = expense.description.toLowerCase().includes(text.toLowerCase())
    return matchText && matchEndDate && matchStartDate
    }).sort((a,b)=>
    {
        if(sortBy==='date')
        {
            return a.createdAt<b.createdAt?1:-1
        }else if(sortBy==='amount')
        {
            return a.amount<b.amount?1:-1
        }

    })

 }
// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleMatches = getVisibleMatches(state.expenses,state.filters)
    console.log(visibleMatches);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 400, createdAt:10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 3000, createdAt:100 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 900 }));
// store.dispatch(setTextFilter('cof'))
// store.dispatch(sortByDate())
store.dispatch(sortByAmount())
// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(12500000))

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

