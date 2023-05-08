import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Title from "~/components/Title";
import Navigation from "~/components/Navigation";

const links = [
  { to: "raw", page: "Raw Expense" },
  { to: "add", page: "Add Expense" },
  { to: "add", page: "Edit Expense" },
  { to: "analysis", page: "Expense Analysis" },
];

export const meta: V2_MetaFunction = () => {
  return [{ title: "Shared Expenses Page" }];
};

export default function ExpensesLayoutPage() {
  return (
    <main>
      <Title>Shared Expenses Page</Title>
      <Navigation links={links} />
      <Outlet />
    </main>
  );
}
