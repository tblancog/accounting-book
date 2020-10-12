import React, { useState } from "react";
import PropTypes from "prop-types";

const Transaction = ({
  transaction: { id, type, amount, description, date },
}) => {
  const [expanded, setExpanded] = useState("");
  return (
    <li
      key={id}
      className="transaction"
      onClick={() => setExpanded(expanded === id ? "" : id)}
    >
      {expanded === id ? (
        <>
          <ul>
            <li>Description: {description}</li>
            <li>
              Amount: $ <span className={type}>{amount.toFixed(2)}</span>
            </li>
            <li>Type: {type}</li>
            <li>Date: {date.toLocaleDateString("en-US")}</li>
            <li>Transaction ID: {id}</li>
          </ul>
        </>
      ) : (
        <>
          <div className="description">{description}</div>
          <div className="amount">
            <span className={type}>
              {type === "credit" ? "+" : "-"} ${amount.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.object,
    description: PropTypes.date,
    type: PropTypes.oneOf(["credit", "debit"]),
    amount: PropTypes.number,
  }),
};

export default Transaction;
