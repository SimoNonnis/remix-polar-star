import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";

const links = [
  { to: "/", page: "Home" },
  { to: "/pricing", page: "Pricing" },
  { to: "/expenses", page: "Expenses", end: true },
];

export default function Header() {
  return (
    <header className="mx-auto">
      <Link to="/">
        <img src="/images/robot.svg" alt="" className="w-20 h-20 m-auto" />
      </Link>

      <Navigation links={links} />
    </header>
  );
}
