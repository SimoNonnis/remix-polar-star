import type { V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";

import { validateExpenseInput } from "~/utils/validation.server";
import { updateExpense, deleteExpense } from "~/api/expenses.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Expense Page" }];
};

export default function EditExpensePage() {
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

export async function action({ params, request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  const expenseId = params.id;
  const method = request.method;

  if (method === "PATCH") {
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect("/expenses");
  } else if (method === "DELETE") {
    await deleteExpense(expenseId);
    return redirect("/expenses");
  }
}
