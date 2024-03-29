import { prisma } from "~/api/database.server";

export async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses(userId) {
  if (!userId) {
    throw new Error("Failed to get expenses");
  }

  try {
    const expenses = await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" },
      select: { id: true, title: true, amount: true, date: true },
    });

    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateExpense(id, expenseData) {
  try {
    const updatedExpense = await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });

    return updatedExpense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({ where: { id } });
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
