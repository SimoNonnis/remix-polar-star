import type { V2_MetaFunction } from "@remix-run/node";

import Title from "~/components/Title";
import PricingPlan from "~/components/PricingPlan";
const plans = [
  {
    title: "Free PLan",
    price: "0.00",
    perks: ["400 expenses", "email support", "no updates"],
  },
  {
    title: "Premium",
    price: "59.0",
    perks: ["no limit", "24/7 chat support", "forever updates"],
  },
];
export const meta: V2_MetaFunction = () => {
  return [{ title: "Pricing Page" }];
};

export default function PricingPage() {
  return (
    <section className="mt-12 rounded-lg bg-orange-100 p-8 shadow-inner ">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10  h-10 me-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>

        <Title>Pricing</Title>
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-6">
        {plans.map((plan) => (
          <PricingPlan
            key={plan.title}
            title={plan.title}
            price={plan.price}
            perks={plan.perks}
          />
        ))}
      </div>
    </section>
  );
}
