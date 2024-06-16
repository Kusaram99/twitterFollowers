import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortBy from './components/SortBy';
import FileBar from './components/FileBar';
import UserList from './components/UserList';




const App = () => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
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
      <SortBy onSort={handleSort} sortOrder={sortOrder} />
      <FileBar onFilter={handleDateFilter} />
      <UserList users={filteredFollowers} handleRemove={handleRemove} />
    </div>
  );
};

export default App;