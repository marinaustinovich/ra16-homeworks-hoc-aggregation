import React from "react";

export type YearItem = {
  year: number;
  amount: number;
};

type Props = {
  list: YearItem[];
};

export const YearTable = ({ list }: Props) => (
  <div>
    <h2>Year Table</h2>
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
