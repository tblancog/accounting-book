import React, { useState } from "react";
import PropTypes from "prop-types";

import { apiCall } from "../services/";

const Transaction = ({ transaction: { id, type, amount, description } }) => {
  const [expanded, setExpanded] = useState("");
  const [detail, setDetail] = useState(false);

  const toggleExpanded = () => {
    setExpanded(expanded === id ? "" : id);
    if (expanded === "" && detail.id !== id) {
      apiCall(`/api/transactions/${id}`).then((transaction) =>
        setDetail(transaction)
      );
    }
  };
  return (
    <li className="transaction" onClick={() => toggleExpanded()}>
      {expanded === id && detail ? (
        <>
          <ul>
            <li>Description: {detail.description}</li>
            <li>
              Amount: ${" "}
              <span className={detail.type}>{detail.amount.toFixed(2)}</span>
            </li>
            <li>Type: {detail.type}</li>
            <li>Date: {detail.effectiveDate}</li>
            <li>Transaction ID: {detail.id}</li>
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
    type: PropTypes.oneOf(["credit", "debit"]),
    amount: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default Transaction;
