import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectedExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount,expensesTotal})=>
{
    const expenseWord = expenseCount === 1?'expense':'expenses'
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return(
        <div>
           <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1> 
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