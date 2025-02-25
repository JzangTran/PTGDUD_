import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={() => setFilter('all')}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filter === 'completed'}
          onChange={() => setFilter('completed')}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          value="uncompleted"
          checked={filter === 'uncompleted'}
          onChange={() => setFilter('uncompleted')}
        />
        Uncompleted
      </label>
    </div>
  );
};

export default Filter;
