import { hash } from "bcryptjs";

import { prisma } from "~/api/database.server";

interface UserCredentials {
  email: string;
  password: string;
}

export default async function signup({ email, password }: UserCredentials) {
  const existingUser = await prisma.user.findFirst({ where: { email } });
  console.log("🚀 -> signup -> existingUser: ", existingUser);

  if (existingUser) {
    const error = new Error(
      "A user with the provided email address exists already."
    );
    error.status = 422;

    throw error;
  }

  const hashed = await hash(password, 12);
  console.log("🚀 -> signup -> passowrdHash: ", hashed);

  await prisma.user.create({ data: { email, password: hashed } });
}
