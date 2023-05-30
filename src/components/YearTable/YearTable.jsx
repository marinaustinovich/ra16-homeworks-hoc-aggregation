import React from 'react';

export default function YearTable(props) {
    const {list} = props;

    return (
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
};