import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Add Expenses Page" }];
};

export default function AddExpensesPage() {
  return <Title>Add Expenses Page</Title>;
}
