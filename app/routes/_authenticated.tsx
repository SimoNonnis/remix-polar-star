import { Outlet } from "@remix-run/react";

import { getUserFromSession, requireUserSession } from "~/utils/auth.server";
import HeaderAuth from "~/components/HeaderAuth";

export async function loader({ request }) {
  await requireUserSession(request);
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
