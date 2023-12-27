import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

import { MonthTable, SortTable, YearTable } from "./components";
import { withTransformedData } from "./hoc";

const urlList = process.env.REACT_APP_DATA_URL;

const App = () => {
  const [list, setList] = useState([]);

  const TransformedMonthTable = useMemo(
    () => withTransformedData(MonthTable, "month"),
    []
  );

  const TransformedYearTable = useMemo(
    () => withTransformedData(YearTable, "year"),
    []
  );
  
  const TransformedSortTable = useMemo(
    () => withTransformedData(SortTable, "date", "asc"),
    []
  );

  useEffect(() => {
    fetchList(urlList);
  }, []);

  const fetchList = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP Error " + response.status);
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
};

export default App;
