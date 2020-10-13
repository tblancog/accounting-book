import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";

import Head from "next/head";

// components
import BalanceComponent from "../components/BalanceComponent";
import AddTransactionComponent from "../components/AddTransactionComponent";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";

// Reducers
import { appReducer, initialState } from "../reducers/AppReducer";

import { getTotalMoney } from "../services/services";

const pageTitle = "Accounting Book";

const AppComponent = ({ transactions }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(
    () => dispatch({ type: "GET_TRANSACTIONS_HISTORY", payload: transactions }),
    []
  );

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_MONEY" });
  }, [state.transactions.length]);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="container">
        <h1>{pageTitle}</h1>
        {transactions && (
          <>
            <BalanceComponent money={state.money} />
            <AddTransactionComponent money={state.money} handle={dispatch} />
            <TransactionHistoryComponent transactions={state.transactions} />
          </>
        )}
      </main>
    </>
  );
};

AppComponent.propTypes = {};

export default AppComponent;
