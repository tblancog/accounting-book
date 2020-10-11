import React from "react";
import PropTypes from "prop-types";

const BalanceComponent = ({ state, handle }) => {
  return (
    <header>
      <h3>Balance</h3>
      <div className="balanceValue">
        <h2 className="money">${state.money} </h2>
        <button
          className="button inline"
          onClick={() => handle({ type: "TOGGLE_SHOW_ADD_TRANSACTION" })}
        >
          {state.showAddTransaction ? "-" : "+"}
        </button>
      </div>
    </header>
  );
};

BalanceComponent.propTypes = {};

export default BalanceComponent;
