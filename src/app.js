import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {startSetExpenses} from '../src/actions/expenses'
import{login,logout} from '../src/actions/auth'
import configureStore from '../src/store/configureStore'
import getVisibleExpenses from '../src/selectors/expenses'
import {firebase} from './firebase/firebase'

const store = configureStore()
let hasRendered = false
const renderApp = ()=>
{
    if(!hasRendered)
    {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

// store.dispatch(addExpense({description:'rent',amount:500000}))
// store.dispatch(addExpense({description:'water bill',amount:500}))
// store.dispatch(addExpense({description:'gas bill',amount:1000}))
// console.log(store.getState())
// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
// console.log(visibleExpenses)
firebase.auth().onAuthStateChanged((user)=>
{
    if(user)
    {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
        })
        if(history.location.pathname==='/')
        {
            history.push('/dashboard')
        }
    }
    else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
const jsx = (
<Provider store ={store}>
<AppRouter/>
</Provider>

)
ReactDOM.render(<p>Loading</p>, document.getElementById('app'));


