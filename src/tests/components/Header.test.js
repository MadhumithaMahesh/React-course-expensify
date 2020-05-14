import Header from '../../components/Header'
import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('should render the Header',()=>
{
const wrapper = shallow(<Header></Header>)
expect(wrapper).toMatchSnapshot()
})