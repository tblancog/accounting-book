export const appReducer = function (state, action) {
  switch (action.type) {
    case "GET_TRANSACTIONS_HISTORY":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "GET_TOTAL_MONEY":
      return {
        ...state,
        money: action.payload,
      };
    case "GET_TRANSACTION_DETAILS":
      return {
        ...state,
        currentTransaction: action.payload,
      };
    default:
      return state;
  }
};

export const initialState = {
  transactions: [],
  money: 0,
  currentTransaction: {},
};
