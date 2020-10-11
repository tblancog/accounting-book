export const appReducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_SHOW_ADD_TRANSACTION":
      return { ...state, showAddTransaction: !state.showAddTransaction };
    default:
      return state;
  }
};

export const initialState = {
  transactions: [
    {
      id: 1,
      date: new Date(),
      description: "Breakfast",
      amount: -15,
    },
    { id: 2, date: new Date(), description: "Salary", amount: 4000 },
    { id: 3, date: new Date(), description: "Dinner", amount: -20 },
    { id: 4, date: new Date(), description: "Jacket", amount: -200 },
    {
      id: 5,
      date: new Date(),
      description: "Cinema",
      amount: -60,
      date: new Date(),
    },
  ],
  money: 9000,
  showAddTransaction: false,
};
