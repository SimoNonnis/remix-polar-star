import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Shared Expenses Page" }];
};

export default function ExpensesLayoutPage() {
  return (
    <>
      <Title>Shared Expenses Page</Title>
      <Outlet />
    </>
  );
}
