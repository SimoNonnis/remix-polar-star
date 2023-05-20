import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO. Date YYYY-MM-DDTHH:mm:ss.sssZ
const seedData = [
  { title: "test", amount: 12.0, date: "Sat Sep 13 275760 00:00:00 GMT+0000" },
];

async function seed() {
  await Promise.all(
    seedData.map((data) => {
      return prisma.expense.create({ data });
    })
  );
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
