import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "PricingPage" }];
};

export default function PricingPage() {
  return <Title>Pricing Page</Title>;
}
