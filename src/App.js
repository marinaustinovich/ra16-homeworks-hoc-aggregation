import React, { useState, useEffect } from 'react';
import './App.css';
import MonthTable from './components/MonthTable/MonthTable';
import SortTable from './components/SortTable/SortTable';
import YearTable from './components/YearTable/YearTable';
import transformList from './HOC/transformList';

const urlList = process.env.REACT_APP_DATA_URL;
const TransformedMonthTable = transformList(MonthTable, 'month');
const TransformedYearTable = transformList(YearTable, 'year');
const TransformedSortTable = transformList(SortTable, 'date', 'asc');

function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetchList(urlList);
  }, []);

  const fetchList = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('HTTP Error ' + response.status);
      }
      const data = await response.json();

      setList(data.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="app">
      <TransformedMonthTable list={list} />
      <TransformedYearTable list={list} />
      <TransformedSortTable list={list} />
    </div>
  );
}

export default App;
