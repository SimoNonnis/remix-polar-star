import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home Page" }];
};

export default function Index() {
  return <Title>Home Page</Title>;
}
