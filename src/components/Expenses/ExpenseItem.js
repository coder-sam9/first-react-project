import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem({data}) {
  const rawDate = data.date;
  
  return (
    <Card className="expense-item">
      {/* <div className="expense-item h2">{date}</div> */}
      <ExpenseDate calendarDate={rawDate}/>
      <div className="expense-item__location">{data.location}</div>
      <div className="expense-item__description">
      <h2 className="expense-item__description h2 ">{data.title}</h2></div>
      <div className="expense-item__price">${data.price}</div>
    </Card>
  );
}
export default ExpenseItem;
