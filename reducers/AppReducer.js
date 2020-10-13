export const appReducer = function (state, action) {
  switch (action.type) {
    case "GET_TRANSACTIONS_HISTORY":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION":
      const newTransaction = { ...action.payload };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    case "GET_TOTAL_MONEY":
      return {
        ...state,
        // money: action.payload,
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
  transactions: [],
  money: 0,
};
