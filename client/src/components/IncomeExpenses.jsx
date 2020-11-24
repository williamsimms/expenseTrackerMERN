import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });

  const income = amounts
    .filter((item) => {
      return item > 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => {
        return item < 0;
      })
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0) * -(1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4 className="income-text">Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4 className="expense-text">Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};
