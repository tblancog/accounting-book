import Head from "next/head";
const pageTitle = "Accounting Book";
const Home = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main className="container">
      <h1>{pageTitle}</h1>
      <header>
        <h3>Balance</h3>
        <div className="balanceValue">
          <h2 className="money">$9,000.00 </h2>
          <button className="button inline">+</button>
        </div>
      </header>

      <section>
        <h3>Add Transaction</h3>
        <form action="">
          <label htmlFor="amount">
            Amount{" "}
            <small>(positive numbers = debits, negative = credits)</small>{" "}
          </label>
          <input id="amount" type="number" placeholder="0.00" />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="shoes, salary, bills..."
          />
          <button className="button block">Add transaction</button>
        </form>
      </section>

      <footer>
        <h3>Transaction history</h3>

        <nav className="tabControl">
          <ul>
            <li className="active">All</li>
            <li>Credit</li>
            <li>Debit</li>
          </ul>
        </nav>

        <ul className="collapsible">
          <li className="transaction">
            <div className="description">Cash</div>
            <div className="amount">-$ 400</div>
          </li>
        </ul>
      </footer>
    </main>
  </>
);
export default Home;
