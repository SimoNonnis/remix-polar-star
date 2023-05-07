import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Expenses Raw Page" }];
};

export default function ExpensesRawPage() {
  return <Title>Expenses Raw Page</Title>;
}
