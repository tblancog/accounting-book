import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryComponent = (props) => {
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
        <li className="transaction">
          <div className="description">Cash</div>
          <div className="amount">-$ 400</div>
        </li>
      </ul>
    </footer>
  );
};

TransactionHistoryComponent.propTypes = {};

export default TransactionHistoryComponent;
