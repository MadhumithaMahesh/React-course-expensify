import{sortByDate,sortByAmount,setStartDate,setEndDate,setTextFilter} from '../../actions/filters'
import moment from 'moment'
import { TestScheduler } from 'jest'
test('should return an object from setTextFilter',()=>
{
    const text = 'madhu'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type:'TEXT_FILTER',
        text:text
    })
})
test('should return an object from sortByDate',()=>
{
   
    
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    })
})
test('should return an object from sortByAmount',()=>
{
   
    
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('should return an object from setStartDate',()=>
{
    const startDate = moment(0)
    const action = setStartDate(startDate)
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate
    })
})
test('should return an object from setEndDate',()=>
{
    const endDate = moment(0)
    const action = setEndDate(endDate)
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate
    })
})