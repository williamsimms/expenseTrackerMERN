import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });
  const total = amounts
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    .toFixed(2);

  return (
    <Fragment>
      <h4 className="center balance-text">Your Balance</h4>
      <h1 className="center">${total}</h1>
    </Fragment>
  );
};
