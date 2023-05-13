import { Link } from "@remix-run/react";
import type { ReactElement } from "react";

type Props = {
  children: string | ReactElement;
  to?: string;
  typeSubmit?: undefined | boolean;
};

export default function Button({ children, to, typeSubmit }: Props) {
  const classes =
    "capitalize border-2 border-orange-500 bg-orange-500 hover:bg-transparent text-orange-100 hover:text-slate-700 rounded-md p-2 max-w-xs m-auto transition-colors duration-300";

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button type={typeSubmit ? "submit" : "button"} className={classes}>
      {children}
    </button>
  );
}
