import selectedExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should return 0 if there is no expense',()=>
{
    const res = selectedExpensesTotal([])
    expect(res).toBe(0)
})
test('should return total for single expense',()=>
{
    const res = selectedExpensesTotal([expenses[0]])
    expect(res).toBe(10)
})
test('should return total for many expense',()=>
{
    const res = selectedExpensesTotal(expenses)
    expect(res).toBe(10110)
})
