import filterReducers from '../../reducers/filters'
import moment from 'moment'

test('should return an object from textReducerDefault',()=>{
    
    const result = filterReducers(undefined,{type:'@@INIT'})
    expect(result).toEqual(
        {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        }
    )
})

test('should return an object from sortByDate',()=>{
    
    const state = filterReducers(undefined,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date')
})
test('should return an object from sortByAmount',()=>{
    
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducers(currentState,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})
test('should return an object from setTextFilterReducer',()=>{
    const text = 'newText'
    const action = {
        type:'TEXT_FILTER',
        text
    }
    const state = filterReducers(undefined,action)
    expect(state.text).toBe(text)
})
test('should return an object from setStartDateReducer',()=>{
    const startDate= moment()
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filterReducers(undefined,action)
    expect(state.startDate).toBe(startDate)
})
test('should return an object from setStartDateReducer',()=>{
    const endDate= moment()
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filterReducers(undefined,action)
    expect(state.endDate).toBe(endDate)
})