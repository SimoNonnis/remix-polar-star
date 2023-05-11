import { Link } from "@remix-run/react";

export default function PricingPlan({ title, price, perks }) {
  return (
    <article className="rounded-lg bg-orange-500 p-8 shadow-inner my-8">
      <header className="">
        <div className="inline-block p-4 border-2 border-current rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10  h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>

        <h2 className="mx-8">{title}</h2>
        <span>{price}</span>
      </header>

      <ol className="my-4">
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ol>

      <div className="border-2 border-orange-100 bg-orange-100 hover:bg-orange-600 hover:text-orange-100 rounded-md p-4 max-w-xs m-auto transition-colors duration-300">
        <Link to="/auth">Learn More</Link>
      </div>
    </article>
  );
}
