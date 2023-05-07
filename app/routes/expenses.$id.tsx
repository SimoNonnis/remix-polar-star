import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Edit Expense Page" }];
};

export default function EditExpensePage() {
  return <Title>Edit Expense Page</Title>;
}
