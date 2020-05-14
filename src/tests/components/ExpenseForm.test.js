import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should return an object from ExpenseForm',()=>
{
    const wrapper = shallow(<ExpenseForm></ExpenseForm>)
    expect(wrapper).toMatchSnapshot()
})

test('should return an object from ExpenseForm with data',()=>
{
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})
test('should return an object for invalid Form submission',()=>
{
    const wrapper = shallow(<ExpenseForm/>)
   wrapper.find('form').simulate('submit',
   {
       preventDefault:()=>{}
   })
   expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})
test('should return an object on description input change',()=>
{
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect((wrapper).state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should return an object on note input change',()=>
{
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect((wrapper).state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should return an object on amount input change',()=>
{
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect((wrapper).state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should not return an object on amount input change',()=>
{
    const value = '23.508'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect((wrapper).state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('should call onsubmit for valid submission',()=>
{
    const onSpyFunc = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit = {onSpyFunc}></ExpenseForm>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSpyFunc).toHaveBeenLastCalledWith({
        description:expenses[1].description,
        amount:expenses[1].amount,
        note:expenses[1].note,
        createdAt:expenses[1].createdAt
    })

})

test('should set new date on date change',()=>
{
const now = moment()    
const wrapper = shallow(<ExpenseForm></ExpenseForm>)
wrapper.find('SingleDatePicker').prop('onDateChange')(now)
expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on date change',()=>
{
const focused = true   
const wrapper = shallow(<ExpenseForm></ExpenseForm>)
wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
expect(wrapper.state('calendarFocused')).toBe(focused)
})