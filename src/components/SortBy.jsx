// src/components/SortBy.js
import React from 'react';

const SortBy = ({ onSort, sortOrder }) => {
  return (
    <div className="mb-3 row gap-3 mx-0">
      <button
        onClick={() => onSort('friends')}
        className={`btn ${sortOrder.field === 'friends' ? 'btn-primary' : 'btn-secondary'} mb-2 col-2`}>
        Sort by Friends
      </button>
      <button
        onClick={() => onSort('influence')}
        className={`btn ${sortOrder.field === 'influence' ? 'btn-primary' : 'btn-secondary'} mb-2 col-2`}>
        Sort by Influence 
      </button>
      <button
        onClick={() => onSort('chirpiness')}
        className={`btn ${sortOrder.field === 'chirpiness' ? 'btn-primary' : 'btn-secondary'} mb-2 col-2`}>
        Sort by Chirpiness
      </button>
    </div>
  );
};

export default SortBy;
