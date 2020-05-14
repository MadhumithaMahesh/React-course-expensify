import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'


test('should return an object from ExpenseListItem',()=>
{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}></ExpenseListItem>)
    expect(wrapper).toMatchSnapshot()
})