// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FollowerList from './components/FollowerList';
// import DateFilter from './components/DateFilter';
import SortBy from './components/SortBy';
import FileBar from './components/FileBar';
import UserList from './components/UserList';
// import DateFilter from './components/DateFilter';

// 1. make ui -- done,
// 2. make api call -- done,
// 3. filter the follewers based on thier joined date between the From date and a To Date. store them into the filterFollowers array.-- ,
// 4. make sort -- ,
// 5. make remove -- ,




const App = () => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [sortCriterion, setSortCriterion] = useState('');
  const [sortOrder, setSortOrder] = useState({ field: "", ascednding: true });

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json') // Replace with actual API endpoint
      .then(response => {
        // console.log("resp: ", response);
        setFollowers(response.data);
        setFilteredFollowers(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDateFilter = (fromDate, toDate) => {
    const filtered = followers.filter(follower => {
      // console.log("join_date: ", follower.join_date);
      const joinDate = new Date(follower.join_date * 1000);
      // console.log("joinDate: ", joinDate);
      fromDate = new Date(fromDate);
      toDate = new Date(toDate);
      return joinDate >= fromDate && joinDate <= toDate
    });
    // console.log("filtered: ", filtered);
    setFilteredFollowers(filtered);
  };

  const handleSort = (field) => {
    const isAscending = sortOrder.field === field ? !sortOrder.ascednding : true;
    const sorted = followers.sort((a, b) => {
      // console.log("a: ", a);
      // console.log("b: ", b);
      if (isAscending) {
        return a.twubric[field] - b.twubric[field];
      }
      return b.twubric[field] - a.twubric[field];
    });

    setSortOrder({ field, ascednding: isAscending });
    setFilteredFollowers(sorted); 
  };

  const handleRemove = (id) => { 
    const updatedFollowers = filteredFollowers.filter(follower => follower.uid !== id);
    console.log("updatedFollowers: ", updatedFollowers);
    setFilteredFollowers(updatedFollowers);
    setFollowers(updatedFollowers);
  };

  return (
    <div className="container">
      {/* <h1>Twitter Followers</h1> */}
      {/* <DateFilter onFilter={handleDateFilter} /> */}
      <SortBy onSort={handleSort} sortOrder={sortOrder} />
      {/* <FollowerList followers={filteredFollowers} onRemove={handleRemove} /> */}
      <FileBar onFilter={handleDateFilter} />
      <UserList users={filteredFollowers} handleRemove={handleRemove} />
      {/* <DateFilter/> */}
    </div>
  );
};

export default App;
