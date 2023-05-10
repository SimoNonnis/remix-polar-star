import ExpenseListItem from "~/components/ExpenseListItem";

function ExpensesList({ expenses }) {
  return (
    <ol>
      {expenses.map((expense) => (
        <ExpenseListItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ol>
  );
}

export default ExpensesList;
