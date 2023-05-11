import { Link } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  function deleteExpenseItemHandler() {
    // tbd
  }
  console.log(id);

  return (
    <li className="flex justify-between rounded-lg bg-orange-500 p-8 shadow-inner my-8 ">
      <div className="text-left">
        <h2 className="font-semibold">{title}</h2>
        <p>${amount.toFixed(2)}</p>
      </div>
      <menu className="bg-orange-100 rounded-lg px-8 py-4 shadow-inner grid grid-cols-2 divide-x divide-slate-700">
        <button className="me-6" onClick={deleteExpenseItemHandler}>
          Delete
        </button>
        <Link to={id}>Edit</Link>
      </menu>
    </li>
  );
}

export default ExpenseListItem;
