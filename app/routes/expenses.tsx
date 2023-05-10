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
    <section className="mt-12 rounded-lg bg-orange-100 p-8 shadow-inner ">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10  h-10 me-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>

        <Title>Expenses</Title>
      </div>
      <Navigation links={links} />
      <Outlet />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </section>
  );
}
