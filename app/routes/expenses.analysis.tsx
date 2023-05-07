import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Expense Analysis Page" }];
};

export default function ExpenseAnalysisPage() {
  return <Title>Expense Analysis Page</Title>;
}
