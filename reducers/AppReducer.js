export const appReducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_SHOW_ADD_TRANSACTION":
      return { ...state, showAddTransaction: !state.showAddTransaction };
    case "ADD_TRANSACTION":
      const newTransaction = { ...action.payload };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    case "GET_TOTAL":
      return {
        ...state,
        money: state.transactions.reduce(
          (acum, trans) => (acum += trans.amount),
          0
        ),
      };
    default:
      return state;
  }
};

export const initialState = {
  transactions: [],
  money: 9000,
  showAddTransaction: false,
};
