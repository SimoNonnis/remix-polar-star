import { useSearchParams, Link } from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode");

  const submitBtn = authMode === "register" ? "Register" : "Login";
  const optionButton =
    authMode === "register" ? "Log in with existing user" : "Create a new user";
  const optionLink = authMode === "register" ? "?mode=login" : "?mode=register";

  return (
    <form method="post">
      <FormInput id="email" text="Email" type="email" name="email" required />

      <FormInput
        id="password"
        text="Password"
        type="password"
        name="password"
        required
        minLength={4}
      />
      <div className="text-left">
        <Button>{submitBtn}</Button>
        <span className="mx-4">or</span>
        <Link to={optionLink} className="underline">
          {optionButton}
        </Link>
      </div>
    </form>
  );
}
