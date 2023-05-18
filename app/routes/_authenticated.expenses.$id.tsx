import type { V2_MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import { getExpenseById } from "~/api/expenses.server";

import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Expense Page" }];
};

export function loader({ params }) {
  return getExpenseById(params.id);
}

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
