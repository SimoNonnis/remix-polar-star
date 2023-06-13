import { useLoaderData, NavLink } from "@remix-run/react";

export default function Navigation({ links }) {
  const userId = useLoaderData();

  return (
    <ul className="	flex justify-between items-center	 overflow-x-scroll scroll-smooth py-4 capitalize">
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
      <li className="whitespace-nowrap p-2 mx-2">
        {!userId && (
          <NavLink
            to="/auth"
            className=" hover:bg-amber-300 bg-amber-400 rounded-md px-4 py-3 transition-colors duration-300"
          >
            Login
          </NavLink>
        )}
        {userId && (
          <form>
            <button className=" hover:bg-amber-300 bg-amber-400 rounded-md px-4 py-3 transition-colors duration-300">
              Logout
            </button>
          </form>
        )}
      </li>
    </ul>
  );
}
