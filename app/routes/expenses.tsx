import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Title from "~/components/Title";
import Navigation from "~/components/Navigation";
import ExpensesList from "~/components/ExpensesList";

const links = [
  { to: "raw", page: "Raw Expense" },
  { to: "add", page: "Add Expense" },
  { to: "add", page: "Edit Expense" },
];

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: new Date().toISOString(),
  },
];

export const meta: V2_MetaFunction = () => {
  return [{ title: "Shared Expenses Page" }];
};

export default function ExpensesLayoutPage() {
  return (
    <main>
      <Title>Expenses</Title>
      <Navigation links={links} />
      <Outlet />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </main>
  );
}
