import type { V2_MetaFunction } from "@remix-run/node";

import Title from "~/components/Title";
import ExpenseForm from "~/components/ExpenseForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Expense Page" }];
};

export default function EditExpensePage() {
  return (
    <main>
      <Title>Edit Expense Page</Title>
      <ExpenseForm />
    </main>
  );
}
