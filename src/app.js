import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from '../src/actions/expenses'
import{setTextFilter} from '../src/actions/filters'
import configureStore from '../src/store/configureStore'
import getVisibleExpenses from '../src/selectors/expenses'
import './firebase/firebase'


const store = configureStore()

// store.dispatch(addExpense({description:'rent',amount:500000}))
// store.dispatch(addExpense({description:'water bill',amount:500}))
// store.dispatch(addExpense({description:'gas bill',amount:1000}))
// console.log(store.getState())
// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)

const jsx = (
<Provider store ={store}>
<AppRouter/>
</Provider>

)
ReactDOM.render(jsx, document.getElementById('app'));