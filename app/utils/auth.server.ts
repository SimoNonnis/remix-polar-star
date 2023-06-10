import { hash, compare } from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { prisma } from "~/api/database.server";

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

async function createUserSession(userId: string) {
  const session = await sessionStorage.getSession();

  session.set("userId", userId);

  return redirect("expenses", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

interface UserCredentials {
  email: string;
  password: string;
}

export async function signup({ email, password }: UserCredentials) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error(
      "A user with the provided email address exists already."
    );
    error.status = 422;

    throw error;
  }

  const hashed = await hash(password, 12);

  await prisma.user.create({ data: { email, password: hashed } });
}

export async function login({ email, password }: UserCredentials) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (!existingUser) {
    const error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    error.status = 401;

    throw error;
  }

  const passwordCorrect = compare(password, existingUser.password);

  if (!passwordCorrect) {
    const error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    error.status = 401;
    throw error;
  }

  return createUserSession(existingUser.id);
}
