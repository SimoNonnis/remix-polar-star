import ExpenseListItem from "~/components/ExpenseListItem";

function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <p className="my-6">
        You don't have any expense yet. Start adding expenses today.
      </p>
    );
  }
  console.log(expenses.length);

  return (
    <ol>
      {expenses.map((expense) => (
        <ExpenseListItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ol>
  );
}

export default ExpensesList;
