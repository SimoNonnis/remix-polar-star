function ExpenseListItem({ title, amount }) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <li className="flex justify-between rounded-lg bg-orange-500 p-8 shadow-inner my-8 ">
      <div className="text-left">
        <h2 className="font-semibold">{title}</h2>
        <p>${amount.toFixed(2)}</p>
      </div>
      <menu className="">
        <button className="me-6" onClick={deleteExpenseItemHandler}>
          Delete
        </button>
        <a href="tbd">Edit</a>
      </menu>
    </li>
  );
}

export default ExpenseListItem;
