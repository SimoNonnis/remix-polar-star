function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" id="expense-form">
      <div>
        <label htmlFor="name">Expense Name</label>
        <input id="name" type="text" name="name" required maxLength={30} />
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" name="date" max={today} required />
        </div>
      </div>
      <div className="form-actions">
        <button>Save Expense</button>
        <a href="tbd">Cancel</a>
      </div>
    </form>
  );
}

export default ExpenseForm;
