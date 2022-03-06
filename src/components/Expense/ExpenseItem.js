import '../Card.css';
import Card from '../Card';
import ExpenseAmount from './ExpenseAmount';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import './ExpenseItem.css'
function ExpenseItem(props) {


    return (
        <>
            <div className='container'>
                <Card className="expense-item">
                    <div className='row'>
                        <div className='col-lg-4'>
                            <ExpenseTitle title={props.title} />
                        </div>
                        <div className='col-lg-4'>
                            <ExpenseAmount amount={props.amount} />
                        </div>
                        <div className='col-lg-4'>
                            <ExpenseDate date={props.date} />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )

}
export default ExpenseItem;