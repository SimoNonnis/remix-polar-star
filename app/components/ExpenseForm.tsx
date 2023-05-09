import FormInput from "~/components/FormInput";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" id="expense-form">
      <FormInput
        id="name"
        text="Expense Name"
        type="text"
        name="name"
        required
        maxLength={30}
      />

      <FormInput
        id="amount"
        text="Amount"
        type="number"
        name="amount"
        required
        min="0"
        step="0.01"
      />

      <FormInput
        id="date"
        text="Date"
        type="date"
        name="date"
        required
        max={today}
      />

      <div className="form-actions">
        <button>Save Expense</button>
        <a href="tbd">Cancel</a>
      </div>
    </form>
  );
}

export default ExpenseForm;
