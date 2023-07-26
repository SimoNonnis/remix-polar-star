import { getExpenses } from "~/api/expenses.server";
import { requireUserSession } from "~/utils/auth.server";

export async function loader({ request }) {
  await requireUserSession(request);
  return getExpenses();
}
