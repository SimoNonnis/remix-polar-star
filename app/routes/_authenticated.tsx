import { Outlet } from "@remix-run/react";
import HeaderAuth from "~/components/HeaderAuth";

export default function Authenticated() {
  return (
    <>
      <HeaderAuth />
      <Outlet />
    </>
  );
}
