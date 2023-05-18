import { getExpenses } from "~/api/expenses.server";

export async function loader() {
  return getExpenses();
}
