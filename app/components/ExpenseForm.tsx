import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

function ExpenseForm() {
  const validationErrors = useActionData();
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const submitButtonText = isBusy ? "Saving......" : "Save Expense";
  const expenseData = useLoaderData();
  console.log("🚀 -> ExpenseForm -> expenseData: ", expenseData);

  return (
    <Form method="post">
      <FormInput
        id="title"
        text="Expense Title"
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

      {validationErrors && (
        <ul className="mb-6">
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <div className="text-left">
        <Button typeSubmit disabled={isBusy}>
          {submitButtonText}
        </Button>
        <Link to=".." className="mx-4">
          Cancel
        </Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
