import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Title from "~/components/Title";
import Button from "~/components/Button";
import ExpensesList from "~/components/ExpensesList";

import DUMMY_EXPENSES from "~/data/dummy";

export const meta: V2_MetaFunction = () => {
  return [{ title: "My Expenses" }];
};

export default function ExpensesLayoutPage() {
  return (
    <section className="mt-12 rounded-lg bg-orange-100 p-8 shadow-inner ">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 me-4"
        >
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>

        <Title>My Expenses</Title>
      </div>

      <div className="flex justify-center items-center">
        <div className="m-4 ">
          <Button to="add">add expense</Button>
        </div>
        <div className="m-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block me-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <a target="_blank" href="/expenses/raw">
            Load raw data
          </a>
        </div>
      </div>

      <Outlet />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </section>
  );
}
