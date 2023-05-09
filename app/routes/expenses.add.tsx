import type { V2_MetaFunction } from "@remix-run/node";

import Title from "~/components/Title";
import ExpenseForm from "~/components/ExpenseForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Add Expenses Page" }];
};

export default function AddExpensesPage() {
  return (
    <main>
      <Title>Add Expenses Page</Title>
      <ExpenseForm />
    </main>
  );
}
