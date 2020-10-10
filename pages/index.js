import Head from "next/head";
const pageTitle = "Accounting Book";
const Home = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <main class="container">
      <h1>{pageTitle}</h1>
      <header>
        <h3>Balance</h3>
        <div class="balanceValue">
          <h2 class="money">$9,000.00 </h2>
          <button class="button inline">+</button>
        </div>
      </header>

      <section>
        <h3>Add Transaction</h3>
        <form action="">
          <label for="amount">
            Amount{" "}
            <small>(positive numbers = debits, negative = credits)</small>{" "}
          </label>
          <input id="amount" type="number" placeholder="0.00" />
          <label for="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="shoes, salary, bills..."
          />
          <button class="button block">Add transaction</button>
        </form>
      </section>

      <footer>
        <h3>Transaction history</h3>

        <nav class="tabControl">
          <ul>
            <li class="active">All</li>
            <li>Credit</li>
            <li>Debit</li>
          </ul>
        </nav>

        <ul class="collapsible">
          <li class="transaction">
            <div class="description">Cash</div>
            <div class="amount">-$ 400</div>
          </li>
        </ul>
      </footer>
    </main>
  </>
);
export default Home;
