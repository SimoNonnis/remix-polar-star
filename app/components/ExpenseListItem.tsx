import { Link, Form, useFetcher } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {
    const proceed = confirm("Are you sure you want to delete this expense?");

    if (!proceed) {
      return;
    }

    fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <li className="flex justify-center rounded-lg bg-orange-500 p-12 shadow-inner my-8 ">
        ...Deleting
      </li>
    );
  }

  return (
    <li className="flex justify-between rounded-lg bg-orange-500 p-8 shadow-inner my-8 ">
      <div className="text-left">
        <h2 className="font-semibold">{title}</h2>
        <p>&#8381;{amount.toFixed(2)}</p>
      </div>
      <menu className="bg-orange-100 rounded-lg px-8 py-4 shadow-inner grid grid-cols-2 divide-x divide-slate-700">
        <button
          type="button"
          onClick={deleteExpenseItemHandler}
          className="me-6"
        >
          Delete
        </button>

        <Link to={id}>Edit</Link>
      </menu>
    </li>
  );
}

export default ExpenseListItem;
