function isValidTitle(value) {
  return value && value.trim().length > 3 && value.trim().length <= 30;
}

function isValidAmount(value) {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value) {
  return value && new Date(value).getTime() <= new Date().getTime();
}

export function validateExpenseInput(input) {
  let validationErrors = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be minimum 4 characters long and at most 30 characters long.";
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount =
      "Invalid amount. Must be a number greater than zero.";
  }

  if (!isValidDate(input.date)) {
    validationErrors.date =
      "Invalid date. Must be today or a date before today.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
