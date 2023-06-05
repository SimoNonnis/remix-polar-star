import { hash, compare } from "bcryptjs";

import { prisma } from "~/api/database.server";

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

  // TODO Crete user session
}
