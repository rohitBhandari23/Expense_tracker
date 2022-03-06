import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
function ExpenseTitle(props) {
    const [title, set__title] = useState(props.title);
    const handle__button_click = () => {
        set__title('Title Updated');
    }

    return (
        <div className="expense-item__description ">
            <b>Expense name</b>: {title}
            {/* <Button onClick={handle__button_click} variant="primary" size="md" active>
                Update Title
            </Button> */}
        </div>
    )

}
export default ExpenseTitle;