// import React from 'react';
// import { shallow } from 'enzyme';
// import { ExpenseListFilter } from '../../components/ExpenseListFilter';
// import { filters, altFilters } from '../fixtures/filters';

// test('should render ExpenseListFilters correctly', () => {
//     const setTextFilter = jest.fn();
//     const sortByDate = jest.fn();
//     const sortByAmount = jest.fn();
//     const setStartDate = jest.fn();
//     const setEndDate = jest.fn();
//     const wrapper = shallow(
//       <ExpenseListFilter
//         filters={filters}
//         setTextFilter={setTextFilter}
//         sortByDate={sortByDate}
//         sortByAmount={sortByAmount}
//         setStartDate={setStartDate}
//         setEndDate={setEndDate}
//       ></ExpenseListFilter>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {filters,altFilters} from '../fixtures/filters';
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter filters ={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});
test('should handle text change',()=>
{
    const value = 'new'
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
test('should handle sort by date',()=>
{
    wrapper.setProps({
        filters: altFilters
      });
    const value = 'date'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('should handle sort by amount',()=>
{

    const value = 'amount'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes',()=>
{
    
    wrapper.setProps({
        filters: altFilters
      });  
    const startDate = altFilters.startDate
      const endDate = altFilters.endDate
      wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
      expect(setStartDate).toHaveBeenLastCalledWith(startDate) 
      expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('hould handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });