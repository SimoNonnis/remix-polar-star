import FormInput from "./FormInput";
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
      <div>
        <button>Register</button>
        <a href="/auth">Log in with existing user</a>
      </div>
    </form>
  );
}
