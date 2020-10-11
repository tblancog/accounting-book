import Head from "next/head";
import { useReducer } from "react";

// components
import BalanceComponent from "../components/BalanceComponent";
import AddTransactionComponent from "../components/AddTransactionComponent";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";

// Reducers
import { appReducer, initialState } from "../reducers/AppReducer";

const pageTitle = "Accounting Book";
const Home = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="container">
        <h1>{pageTitle}</h1>
        <BalanceComponent state={state} handle={dispatch} />
        {state.showAddTransaction && <AddTransactionComponent />}
        <TransactionHistoryComponent transactions={state.transactions} />
      </main>
    </>
  );
};
export default Home;
