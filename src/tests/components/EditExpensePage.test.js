import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditExpensePage'

test('should render editExpensepage correctly',()=>
{
    const editExpense= jest.fn()
    const removeExpense = jest.fn()
    const history={
        push:jest.fn()
    }
    const wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history={history} expense = {expenses[0]}></EditExpensePage>)
    expect(wrapper).toMatchSnapshot()
})

test('should handle edit event',()=>
{
    const editExpense= jest.fn()
    const removeExpense = jest.fn()
    const history={
        push:jest.fn()
    }
    const wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history={history} expense = {expenses[0]}></EditExpensePage>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})

test('should handle remove event',()=>
{
    const editExpense= jest.fn()
    const removeExpense = jest.fn()
    const history={
        push:jest.fn()
    }
    
    const wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history={history} expense = {expenses[0]}></EditExpensePage>)
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(
        {
            id:expenses[0].id
        }
    )
})