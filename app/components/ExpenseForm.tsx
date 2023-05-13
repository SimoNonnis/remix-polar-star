import { Link } from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post">
      <FormInput
        id="title"
        text="Expense Name"
        type="text"
        name="title"
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

      <div className="text-left">
        <Button typeSubmit>Save Expense</Button>
        <Link to=".." className="mx-4">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default ExpenseForm;
