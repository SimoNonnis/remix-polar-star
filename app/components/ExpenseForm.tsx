import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
  useParams,
} from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

function ExpenseForm() {
  const params = useParams();
  const matches = useMatches();
  const expenseDataAll = matches.find(
    (mtch) => mtch.id === "routes/_authenticated.expenses"
  ).data;
  const expenseData = expenseDataAll.find(
    (expense) => expense.id === params.id
  );

  const validationErrors = useActionData();

  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const navigation = useNavigation();
  const isBusy = navigation.state !== "idle";
  const submitButtonText = isBusy ? "Saving......" : "Save Expense";

  const defaultValues = {
    title: expenseData?.title || "",
    amount: expenseData?.amount || "",
    date: expenseData?.date || "",
  };

  return (
    <Form method="post">
      <FormInput
        id="title"
        text="Expense Title"
        type="text"
        name="title"
        required
        maxLength={30}
        defaultValue={defaultValues.title}
      />

      <FormInput
        id="amount"
        text="Amount"
        type="number"
        name="amount"
        required
        min="0"
        step="0.01"
        defaultValue={defaultValues.amount}
      />

      <FormInput
        id="date"
        text="Date"
        type="date"
        name="date"
        required
        max={today}
        defaultValue={defaultValues.date ? defaultValues.date.slice(0, 10) : ""}
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
