import { Link, Form } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  // function deleteExpenseItemHandler() {
  //   // TODO
  // }

  return (
    <li className="flex justify-between rounded-lg bg-orange-500 p-8 shadow-inner my-8 ">
      <div className="text-left">
        <h2 className="font-semibold">{title}</h2>
        <p>&#8381;{amount.toFixed(2)}</p>
      </div>
      <menu className="bg-orange-100 rounded-lg px-8 py-4 shadow-inner grid grid-cols-2 divide-x divide-slate-700">
        <Form method="delete" action={`/expenses/${id}`}>
          <button className="me-6">Delete</button>
        </Form>

        <Link to={id}>Edit</Link>
      </menu>
    </li>
  );
}

export default ExpenseListItem;
