import type { V2_MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import Title from "~/components/Title";
import AuthForm from "~/components/Auth";

import { validateCredentials } from "~/utils/validation.server";
import { signup } from "~/utils/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: "AuthPage" }];
};

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode");

  const isLoginMode = authMode === "login";

  return (
    <section className="mt-12 rounded-lg bg-orange-100 p-8 shadow-inner ">
      <div className="flex justify-center items-center">
        {isLoginMode ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10  h-10 me-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <Title>Login</Title>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10  h-10 me-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <Title>Register</Title>
          </>
        )}
      </div>
      <AuthForm />
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "register";

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      // TODO Login the user
    } else {
      await signup(credentials);
      return redirect("/expenses");
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
}
