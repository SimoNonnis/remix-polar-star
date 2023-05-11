import Logo from "~/components/Logo";
import Navigation from "~/components/Navigation";

const links = [
  { to: "/", page: "Home" },
  { to: "/expenses", page: "Expenses", end: true },
  { to: "/expenses/add", page: "Add Expense" },
];

export default function HeaderAuth() {
  return (
    <header className="mx-auto">
      <Logo />

      <Navigation links={links} />
    </header>
  );
}
