import React from "react";
import PropTypes from "prop-types";

const TransactionHistoryComponent = ({ transactions }) => (
  <footer>
    <h3>Transaction history</h3>
    {transactions.length > 0 ? (
      <ul className="list collapsible">
        {transactions.map(({ description, amount, type }, idx) => (
          <li key={idx} className="transaction">
            <div className="description">{description}</div>
            <div className="amount">
              <span className={type}>
                {type === "credit" ? "+" : "-"} ${Math.abs(amount)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <h4>Empty</h4>
    )}
  </footer>
);

TransactionHistoryComponent.propTypes = {};

export default TransactionHistoryComponent;
