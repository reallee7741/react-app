import React, { useState, useCallback, useEffect } from 'react';
import Axios from 'axios';

import './App.css';

import Search from './components/Search.tsx';
import Table from './components/Table.tsx';
import Pagination from './components/Pagination.tsx';

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [processedData, setProcessedData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const ROWS_PER_PAGE = 10;
  const filterData = (searchText, data) => {
    return data.filter((row) => row.title.toLowerCase().includes(searchText.toLowerCase()));
  }

  useEffect(() => {
    const fetchData = async() => {
      const result = await Axios('https://jsonplaceholder.typicode.com/posts');
      setData(result.data);
      setProcessedData(result.data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    const filteredData = filterData(searchTerm, data);
    setProcessedData(filteredData);
  }, [searchTerm])


  return (
    <div className="App">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Table
        processedData={processedData}
        setProcessedData={setProcessedData}
        currentPage={currentPage}
        ROWS_PER_PAGE={ROWS_PER_PAGE}
      />
      <Pagination
        processedData = {processedData}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        ROWS_PER_PAGE = {ROWS_PER_PAGE}
      />
    </div>
  );
}

export default App;
