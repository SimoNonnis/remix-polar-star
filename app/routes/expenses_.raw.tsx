import { getExpenses } from "~/api/expenses.server";

export async function loader() {
  const expenses = await getExpenses();

  return expenses;
}
