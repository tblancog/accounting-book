import React from "react";
import PropTypes from "prop-types";

import Transaction from "../components/Transaction";

const TransactionHistoryComponent = ({ transactions }) => {
  return (
    <footer>
      <h3>Transaction history</h3>
      {transactions.length > 0 ? (
        <ul className="list collapsible">
          {transactions.map((tr) => (
            <Transaction key={tr.id} transaction={tr} />
          ))}
        </ul>
      ) : (
        <h4>Empty</h4>
      )}
    </footer>
  );
};

TransactionHistoryComponent.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistoryComponent;
