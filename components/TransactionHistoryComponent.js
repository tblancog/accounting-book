import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryComponent = ({ transactions }) => {
  return (
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
        {transactions.map(({ key, description, amount }) => (
          <li key={key} className="transaction">
            <div className="description">{description}</div>
            <div className="amount">-$ {amount}</div>
          </li>
        ))}
      </ul>
    </footer>
  );
};

TransactionHistoryComponent.propTypes = {};

export default TransactionHistoryComponent;
