import Head from "next/head";

// components
import BalanceComponent from "../components/BalanceComponent";
import AddTransactionComponent from "../components/AddTransactionComponent";
import TransactionHistoryComponent from "../components/TransactionHistoryComponent";

const pageTitle = "Accounting Book";
const Home = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main className="container">
      <h1>{pageTitle}</h1>
      <BalanceComponent />
      <AddTransactionComponent />
      <TransactionHistoryComponent />
    </main>
  </>
);
export default Home;
