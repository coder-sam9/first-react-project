import "./ExpenseDate.css";

function ExpenseDate({ calendarDate }) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const month = calendarDate.getMonth();
    const day = calendarDate.getDate();
    const year = calendarDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{months[month]}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
