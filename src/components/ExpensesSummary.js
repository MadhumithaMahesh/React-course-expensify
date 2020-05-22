import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import {Link} from 'react-router-dom'
import selectedExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount,expensesTotal})=>
{
    const expenseWord = expenseCount === 1?'expense':'expenses'
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return(
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1> 
            
            <div className="page-header__actions">
            <Link to ='/create' className="button">Add Expense</Link>
            </div>
            </div>
           
        </div>
    )
}

const mapToStateProps = (state)=>
{
    const visibleExpenses = selectedExpenses(state.expenses,state.filters)
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:expensesTotal(visibleExpenses)

    }
}

export default connect(mapToStateProps)(ExpensesSummary)