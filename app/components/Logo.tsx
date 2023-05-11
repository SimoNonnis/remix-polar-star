import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/images/robot.svg" alt="" className="w-20 h-20 m-auto" />
    </Link>
  );
}
