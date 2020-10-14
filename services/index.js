export let transactions = [];
export let money = 0;

export const getAccountBalance = () =>
  (money = transactions.reduce(
    (acum, trans) =>
      (acum += trans.type === "debit" ? trans.amount * -1 : trans.amount),
    0
  ));

export const addTransaction = (trans) => {
  if (
    trans.amount < 0 ||
    (trans.amount >= money && trans.type === "debit") ||
    (trans.amount <= 0 && trans.type === "credit")
  ) {
    return false;
  } else {
    const newTransaction = {
      ...trans,
      id: Math.floor(Math.random() * 100000000).toString(),
      effectiveDate: new Date().toISOString(),
    };
    transactions = [newTransaction, ...transactions];
    getAccountBalance();
    return newTransaction;
  }
};

export const getTransactionById = (id) =>
  transactions.filter((tr) => tr.id === id);

export const apiCall = async (url, options) =>
  await (await fetch(url, options)).json();
