import Logo from "~/components/Logo";
import Navigation from "~/components/Navigation";

const links = [
  { to: "/", page: "Home" },
  { to: "/pricing", page: "Pricing" },
  { to: "/expenses", page: "Expenses", end: true },
];

export default function Header() {
  return (
    <header className="mx-auto">
      <Logo />

      <Navigation links={links} />
    </header>
  );
}
