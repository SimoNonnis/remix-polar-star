import { useNavigate } from "@remix-run/react";
import Modal from "~/components/Modal";
import ExpenseForm from "~/components/ExpenseForm";

export function meta() {
  return [{ title: "Add Expenses Page" }];
}

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function handleOnClose() {
    navigate("..");
  }
  return (
    <Modal onClose={handleOnClose}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  console.log("🚀 -> action -> data: ", data);

  return new Response([], { status: 200 });
}
