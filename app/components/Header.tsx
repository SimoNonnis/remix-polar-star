import { Link, NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="images/robot.svg" alt="" className="w-20 h-20 m-auto" />
      </Link>

      <ul className="flex overflow-x-scroll scroll-smooth py-4">
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="whitespace-nowrap  p-2 mx-2">
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            pricing
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="auth"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Auth
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            end
            to="expenses"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Expenses
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="expenses/add"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Add Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Edit Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="expenses/raw"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Raw Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap p-2 mx-2">
          <NavLink
            to="expenses/analysis"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Expense Analysis
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
