import { Link } from "@remix-run/react";

import FormInput from "~/components/FormInput";
import Button from "~/components/Button";

export default function AuthForm() {
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
        <Button>Register</Button>
        <span className="mx-4">or</span>
        <Link to="/auth" className="underline">
          Log in with existing user
        </Link>
      </div>
    </form>
  );
}
