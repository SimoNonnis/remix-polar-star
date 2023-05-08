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
    <main>
      <Title>Pricing Page</Title>
      {plans.map((plan) => (
        <PricingPlan
          key={plan.title}
          title={plan.title}
          price={plan.price}
          perks={plan.perks}
        />
      ))}
    </main>
  );
}
