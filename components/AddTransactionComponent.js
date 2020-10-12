import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTransactionComponent = ({ handle }) => {
  const [fields, setFields] = useState({
    amount: "",
    description: "",
    type: "debit",
  });
  const submit = (e) => {
    e.preventDefault();
    if (
      fields.amount === "" ||
      fields.amount === 0 ||
      fields.description === ""
    ) {
      return;
    }

    // apply debit or credit logic
    fields.amount = Math.abs(fields.amount);
    if (fields.type === "debit") {
      fields.amount *= -1;
    }

    handle({
      type: "ADD_TRANSACTION",
      payload: { ...fields, date: new Date() },
    });
    handle({ type: "TOGGLE_SHOW_ADD_TRANSACTION" });
    setFields({ amount: "", description: "" });
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
          onChange={(e) => setFields({ ...fields, amount: +e.target.value })}
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
          <label htmlFor="type">Debit</label>
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

AddTransactionComponent.propTypes = {};

export default AddTransactionComponent;
