import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";

import Head from "next/head";

// components
import BalanceComponent from "../components/BalanceComponent";
import AddTransactionComponent from "../components/AddTransactionComponent";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";

// Reducers
import { appReducer, initialState } from "../reducers/AppReducer";

import { apiCall } from "../services/";

const pageTitle = "Accounting Book";
const AppComponent = ({ transactions }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(
    () => dispatch({ type: "GET_TRANSACTIONS_HISTORY", payload: transactions }),
    []
  );

  useEffect(() => {
    apiCall("/api/transactions/balance").then(({ money }) => {
      dispatch({ type: "GET_TOTAL_MONEY", payload: money });
    });
  }, [state.transactions.length]);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="container">
        <h1>{pageTitle}</h1>
        <>
          <BalanceComponent money={state.money} />
          <AddTransactionComponent money={state.money} handle={dispatch} />
          <TransactionHistoryComponent transactions={state.transactions} />
        </>
      </main>
    </>
  );
};

AppComponent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AppComponent;
