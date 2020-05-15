import React from 'react'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import {shallow} from 'enzyme'

test('should return summary for one expense',()=>
{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100}></ExpensesSummary>)
    expect(wrapper).toMatchSnapshot()
})

test('should return summary for many expenses',()=>
{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={100}></ExpensesSummary>)
    expect(wrapper).toMatchSnapshot()
})


