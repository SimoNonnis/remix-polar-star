import type { V2_MetaFunction } from "@remix-run/node";

import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Add Expenses Page" }];
};

export default function AddExpensesPage() {
  return (
    <Modal onClose={() => console.log("Close Add")}>
      <ExpenseForm />
    </Modal>
  );
}
