import selectedExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should return an object by text filter ',()=>
{
    const filters = {
        text:'e',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})
test('should return an object by textFilterDefault ',()=>
{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('should return an object by setStartDateFilter ',()=>
{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])
})
test('should return an object by setEndDateFilter ',()=>
{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate:undefined,
        endDate:moment(2)
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]])
})
test('should return an object by sortByDateFilter ',()=>
{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('should return an object by sortByAmountFilter ',()=>
{
    const filters = {
        text:'',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectedExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})