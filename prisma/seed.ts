import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO. Date YYYY-MM-DDTHH:mm:ss.sssZ
const seedData = [
  { title: "Test one", amount: 10.0, date: "2023-05-01T00:00:00.000Z" },
  { title: "Test two", amount: 20.0, date: "2023-05-13T00:00:00.000Z" },
  { title: "Test tree", amount: 30.0, date: "2023-04-26T00:00:00.000Z" },
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
