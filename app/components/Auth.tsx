import { useSearchParams, Link } from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode");

  const isLoginMode = authMode === "login";
  const submitBtn = isLoginMode ? "Login" : "Register";
  const optionButton = isLoginMode
    ? "Create a new user"
    : "Log in with existing user";

  const optionLink = isLoginMode ? "?mode=register" : "?mode=login";

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
