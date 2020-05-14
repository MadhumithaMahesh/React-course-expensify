import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should return a default object',()=>
{
    const state = expensesReducers(undefined,{type:'@@INIT'})
    expect(state).toEqual([])

})

test('should return an object for addExpenseReducer',()=>
{
    const expense = {
        id:'1238980',
    description:'blue',
    note:'blue note',
    amount:1000000,
    createdAt:moment(0)
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducers(expenses,action)
    expect(state).toEqual([...expenses,action.expense])

})
test('should return an object for editExpenseReducer',()=>
{
    const amount=500
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[2].id,
updates:
{
    amount

}    }
    const state = expensesReducers(expenses,action)
    expect(state[2].amount).toBe(500)

})
test('should not return an object for editExpenseReducer',()=>
{
    const amount=500
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
updates:
{
    amount

}    }
    const state = expensesReducers(expenses,action)
    expect(state).toEqual(expenses)

})

test('should return an object for removeExpenseReducer',()=>
{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[2].id
        }
    const state = expensesReducers(expenses,action)
    expect(state).toEqual([expenses[0],expenses[1]])

})

test('should not return an object for removeExpenseReducer',()=>
{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
        }
    const state = expensesReducers(expenses,action)
    expect(state).toEqual(expenses)

})
