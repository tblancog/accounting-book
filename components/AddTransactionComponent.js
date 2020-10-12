import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTransactionComponent = ({ money, handle }) => {
  const initialValues = {
    amount: 0,
    description: "",
    type: "debit",
  };
  const [fields, setFields] = useState(initialValues);
  const submit = (e) => {
    e.preventDefault();
    // convert to number
    const amount = Math.abs(+fields.amount);

    if (fields.amount === "" || fields.description === "") {
      alert("Check empty fields");
      return;
    } else if (+fields.amount === 0) {
      alert("Transaction with amount zero");
      return;
    } else if (money < amount && fields.type === "debit") {
      alert("Not enough money");
      return;
    }

    const transaction = {
      ...fields,
      id: Math.floor(Math.random() * 100000000).toString(),
      amount,
      date: new Date(),
    };
    handle({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    setFields({ ...initialValues, type: transaction.type });
  };
  return (
    <section>
      <h3>Add Transaction</h3>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="0.00"
          value={fields.amount}
          onChange={(e) => setFields({ ...fields, amount: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="shoes, salary, bills..."
          value={fields.description}
          onChange={(e) =>
            setFields({ ...fields, description: e.target.value })
          }
        />
        <label>Type</label>
        <div className="checkboxContainer">
          <label htmlFor="typeDebit">Debit</label>
          <input
            id="typeDebit"
            name="type"
            type="radio"
            value="debit"
            checked={fields.type === "debit"}
            onChange={(e) => setFields({ ...fields, type: e.target.value })}
          />
          {"  "}
          <label htmlFor="typeCredit">Credit</label>
          <input
            id="typeCredit"
            name="type"
            type="radio"
            value="credit"
            checked={fields.type === "credit"}
            onChange={(e) => setFields({ ...fields, type: e.target.value })}
          />
        </div>
        <button className="button block">Add transaction</button>
      </form>
    </section>
  );
};

AddTransactionComponent.propTypes = {
  money: PropTypes.number,
  handle: PropTypes.func.isRequired,
};

export default AddTransactionComponent;
