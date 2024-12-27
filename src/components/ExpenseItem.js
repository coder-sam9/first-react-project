import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item h2">15 August 2023</div>
      <div className="expense-item__description">
      <h2 className="expense-item__description h2 ">Book</h2></div>
      <div className="expense-item__price">$10</div>
      <div className="expense-item__location">Delhi</div>
    </div>
  );
}
export default ExpenseItem;
