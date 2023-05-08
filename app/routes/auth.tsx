import type { V2_MetaFunction } from "@remix-run/node";
import Title from "~/components/Title";
import AuthForm from "~/components/Auth";

export const meta: V2_MetaFunction = () => {
  return [{ title: "AuthPage" }];
};

export default function AuthPage() {
  return (
    <main>
      <Title>Auth</Title>
      <AuthForm />
    </main>
  );
}
