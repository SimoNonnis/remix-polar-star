import { Outlet } from "@remix-run/react";

import { getUserFromSession } from "~/utils/auth.server";
import HeaderAuth from "~/components/HeaderAuth";

export function loader({ request }) {
  const userId = getUserFromSession(request);

  return userId;
}

export default function Authenticated() {
  return (
    <>
      <HeaderAuth />
      <Outlet />
    </>
  );
}
