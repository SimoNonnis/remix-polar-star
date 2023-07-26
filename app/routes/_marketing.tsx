import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import { getUserFromSession } from "~/utils/auth.server";

export function loader({ request }) {
  const userId = getUserFromSession(request);

  return userId;
}

export default function Marketing() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
