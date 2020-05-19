import ConfigureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,removeExpense,editExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import { createStore } from 'redux'
import database from '../../firebase/firebase'

const createMockStore = ConfigureMockStore([thunk])
test('should return an object for remove Expense',()=>
{
    const action = removeExpense({id:'12345'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'12345'
    })
})

test('should return an object for edit Expense',()=>
{
    const action = editExpense('12345',{note:'a new note'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'12345',
        updates:{
            note:'a new note'
        }
    })

})
test('should return an object for add Expense',()=>
{
    const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
   
  });


test('shold add default expense to store and database',()=>
{
  const action = addExpense(expenses[1])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[1]
    })
})
test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });   
})
