import React from "react";

export type MonthItem = {
  month: string;
  amount: number;
};

type Props = {
  list: MonthItem[];
};

export const MonthTable = ({ list }: Props) => (
  <div>
    <h2>Month Table</h2>
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
