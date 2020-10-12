import React from "react";
import PropTypes from "prop-types";

const BalanceComponent = ({ money }) => (
  <header>
    <h3>Balance</h3>
    <div className="balanceValue">
      <h2 className="money">${money.toFixed(2)}</h2>
    </div>
  </header>
);

BalanceComponent.propTypes = {
  money: PropTypes.number,
};

export default BalanceComponent;
