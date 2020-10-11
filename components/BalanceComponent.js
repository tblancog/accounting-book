import React from "react";
import PropTypes from "prop-types";

const BalanceComponent = (props) => {
  return (
    <header>
      <h3>Balance</h3>
      <div className="balanceValue">
        <h2 className="money">$9,000.00 </h2>
        <button className="button inline">+</button>
      </div>
    </header>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
