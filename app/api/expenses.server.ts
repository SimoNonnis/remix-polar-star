import { prisma } from "~/api/database.server";

export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: "desc" },
      select: { id: true, title: true, amount: true, date: true },
    });

    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// ! Not in use anymore. Left here just for reference.
export async function getExpenseById(id) {
  try {
    const expense = await prisma.expense.findFirst({
      where: { id },
      select: { title: true, amount: true, date: true },
    });

    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
