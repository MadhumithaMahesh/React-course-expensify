import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

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
    const action = addExpense({
        description:'play',
    note :'with ball',
    amount :10,
    createdAt:9
    }
    )
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
    id:expect.any(String),        
    description:'play',
    note :'with ball',
    amount :10,
    createdAt:9
        }
    })
})
test('should return an object for add Expense for default',()=>
{
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
    id:expect.any(String),        
    description:'',
    note :'',
    amount:0,
    createdAt:0
        }
    })
})