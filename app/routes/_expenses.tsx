import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Expenses Page" }];
};

export default function ExpensesPage() {
  return <Title>Expenses Page</Title>;
}
