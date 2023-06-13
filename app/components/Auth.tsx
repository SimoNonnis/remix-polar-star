import { Form, useSearchParams, Link, useActionData } from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";
  const validationErrors = useActionData();

  const isLoginMode = authMode === "login";
  const submitBtn = isLoginMode ? "Login" : "Register";
  const optionButton = isLoginMode
    ? "Create a new user"
    : "Log in with existing user";

  const optionLink = isLoginMode ? "?mode=register" : "?mode=login";

  return (
    <Form method="post">
      <FormInput id="email" text="Email" type="email" name="email" required />

      <FormInput
        id="password"
        text="Password"
        type="password"
        name="password"
        required
        minLength={4}
      />

      {validationErrors && (
        <ul className="mb-6">
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <div className="text-left">
        <Button typeSubmit>{submitBtn}</Button>
        <span className="mx-4">or</span>
        <Link to={optionLink} className="underline">
          {optionButton}
        </Link>
      </div>
    </Form>
  );
}
