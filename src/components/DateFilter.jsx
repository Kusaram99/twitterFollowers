// src/components/DateFilter.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFilter = () => {
    onFilter(fromDate, toDate);
    setFromDate(null);
    setToDate(null);
  };

  return (
    <div className="mb-3">
      <DatePicker
        selected={fromDate}
        onChange={date => setFromDate(date)}
        selectsStart
        startDate={fromDate}
        endDate={toDate}
        placeholderText="From Date"
      />
      <DatePicker
        selected={toDate}
        onChange={date => setToDate(date)}
        selectsEnd
        startDate={fromDate}
        endDate={toDate}
        minDate={fromDate}
        placeholderText="To Date"
      />
      <button onClick={handleFilter} className="btn btn-primary ml-2">Filter</button>
    </div>
  );
};

export default DateFilter;
