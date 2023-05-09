import ExpenseListItem from "~/components/ExpenseListItem";

function ExpensesList({ expenses }) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem title={expense.title} amount={expense.amount} />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
