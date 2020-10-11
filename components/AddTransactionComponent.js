import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTransactionComponent = (props) => {
  const [fields, setFields] = useState({
    amount: 0,
    description: "",
  });
  return (
    <section>
      <h3>Add Transaction</h3>
      <form action="">
        <label htmlFor="amount">
          Amount <small>(positive numbers = debits, negative = credits)</small>{" "}
        </label>
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
        <button className="button block">Add transaction</button>
      </form>
    </section>
  );
};

AddTransactionComponent.propTypes = {};

export default AddTransactionComponent;
