export const appReducer = function (state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const newTransaction = { ...action.payload };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    case "GET_TOTAL_MONEY":
      return {
        ...state,
        money: state.transactions.reduce(
          (acum, trans) =>
            (acum += trans.type === "debit" ? trans.amount * -1 : trans.amount),
          0
        ),
      };
    default:
      return state;
  }
};

export const initialState = {
  transactions: [
    {
      id: "1",
      description: "Lorem",
      date: new Date(),
      type: "credit",
      amount: 6000,
    },
    {
      id: "2",
      description: "Lorem ipsum",
      date: new Date(),
      type: "credit",
      amount: 8000,
    },
    {
      id: "3",
      description: "Lorem",
      date: new Date(),
      type: "credit",
      amount: 10000,
    },
  ],
  money: 0,
};
