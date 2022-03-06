import './ExpenseItem.css'
function ExpenseAmount(props) {
    return (
        <div className="expense-item__price">
            <b>Expense amount :</b> {props.amount}
        </div>
    )
}
export default ExpenseAmount;