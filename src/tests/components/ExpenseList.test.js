import React from 'react'
import {ExpenseList} from '../../components/ExpenseList'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'


test('should render ExpenseList object',()=>{
const wrapper = shallow(<ExpenseList expenses={expenses}></ExpenseList>)
expect(wrapper).toMatchSnapshot()
})
test('should render no expense object',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}></ExpenseList>)
    expect(wrapper).toMatchSnapshot()
    })