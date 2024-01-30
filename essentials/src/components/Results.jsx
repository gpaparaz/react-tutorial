import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interest (Year)</th>
        <th>Total interest</th>
        <th>Investment capital</th>
      </tr>
      <tbody>
        {resultsData.map((yearData) => {
              const totalInterest =
              yearData.valueEndOfYear -
              yearData.interest -
              yearData.annualInvestment;
          
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;


          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
