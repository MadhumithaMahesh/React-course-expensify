import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'


test('should return an object from ExpenseDashboardPage',()=>
{
    const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>)
    expect(wrapper).toMatchSnapshot()
})