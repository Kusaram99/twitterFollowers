// src/components/SortBy.js
import React from 'react';

const SortBy = ({ onSort, sortOrder }) => {
  return (

    <div>
      <h1 className='h4'>Sort By </h1>
      <div className="mb-3 row gap-3 mx-0">
        <button
          onClick={() => onSort('total')}
          className={`btn ${sortOrder.field === 'total' ? 'btn-primary' : 'btn-secondary'} mb-2 col col-md-2`}>
          Twubric Score
        </button>
        <button
          onClick={() => onSort('friends')}
          className={`btn ${sortOrder.field === 'friends' ? 'btn-primary' : 'btn-secondary'} mb-2 col col-md-2`}>
          Friends
        </button>
        <button
          onClick={() => onSort('influence')}
          className={`btn ${sortOrder.field === 'influence' ? 'btn-primary' : 'btn-secondary'} mb-2 col col-md-2`}>
          Influence
        </button>
        <button
          onClick={() => onSort('chirpiness')}
          className={`btn ${sortOrder.field === 'chirpiness' ? 'btn-primary' : 'btn-secondary'} mb-2 col col-md-2`}>
          Chirpiness
        </button>
      </div>
    </div>
  );
};

export default SortBy;
