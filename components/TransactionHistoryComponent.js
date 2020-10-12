import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryComponent = ({ transactions }) => {
  return (
    <footer>
      <h3>Transaction history</h3>
      {transactions.length > 0 ? (
        <ul className="list collapsible">
          {transactions.map(({ id, description, amount }, idx) => (
            <li key={idx} className="transaction">
              <div className="description">{description}</div>
              <div className="amount">-$ {amount}</div>
            </li>
          ))}
        </ul>
      ) : (
        <h4>Empty</h4>
      )}
    </footer>
  );
};

TransactionHistoryComponent.propTypes = {};

export default TransactionHistoryComponent;
