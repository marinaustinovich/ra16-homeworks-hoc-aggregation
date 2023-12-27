import React from "react";

export type DateItem = {
  date: string;
  amount: number;
};

type Props = {
  list: DateItem[];
};

export const SortTable = ({ list }: Props) => (
  <div>
    <h2>Sort Table</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
