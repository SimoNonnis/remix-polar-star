import { Link, NavLink } from "@remix-run/react";

import robot from "~/images/robot.svg";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={robot} alt="" className="w-20 h-20 m-auto" />
      </Link>

      <ul className="flex justify-center gap-6 overflow-x-scroll py-5">
        <li className="whitespace-nowrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            pricing
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
          <NavLink
            to="auth"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Auth
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
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
        <li className="whitespace-nowrap">
          <NavLink
            to="expenses/add"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Add Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Edit Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
          <NavLink
            to="expenses/raw"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:text-amber-400"
            }
          >
            Raw Expense
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
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
