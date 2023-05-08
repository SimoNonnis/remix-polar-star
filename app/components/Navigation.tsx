import { NavLink } from "@remix-run/react";

export default function Navigation({ links }) {
  return (
    <div className="max-w-3xl m-auto">
      <ul className="	flex justify-between overflow-x-scroll scroll-smooth py-4 capitalize">
        {links.map((link) => (
          <li className="whitespace-nowrap p-2 mx-2" key={link.page}>
            <NavLink
              end={link.end}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:text-amber-400"
              }
            >
              {link.page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
