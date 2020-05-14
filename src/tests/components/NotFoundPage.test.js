import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('should return an object from NotFoundPage',()=>
{
    const wrapper = shallow(<NotFoundPage></NotFoundPage>)
    expect(wrapper).toMatchSnapshot()
})