import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";

export const meta: V2_MetaFunction = () => {
  return [{ title: "AuthPage" }];
};

export default function AuthPage() {
  return <Title>Auth Page</Title>;
}
