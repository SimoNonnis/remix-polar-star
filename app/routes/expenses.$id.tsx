import type { V2_MetaFunction } from "@remix-run/node";

import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Expense Page" }];
};

export default function EditExpensePage() {
  return (
    <Modal onClose={() => console.log("Close Edit")}>
      <ExpenseForm />
    </Modal>
  );
}
