import { useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";
import { addExpense } from "~/api/expenses.server";
import { validateExpenseInput } from "~/utils/validation.server";

export function meta() {
  return [{ title: "Add Expenses Page" }];
}

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function handleOnClose() {
    navigate("..");
  }
  return (
    <Modal onClose={handleOnClose}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);

  return redirect("/expenses");
}
