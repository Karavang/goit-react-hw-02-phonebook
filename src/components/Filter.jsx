import React from 'react';

export default function Filter({ filter }) {
  return (
    <input
      type="text"
      name="search"
      className="form-control"
      placeholder="Search by name"
      onChange={e => {
        filter = e.target.value;
        console.log(filter);
      }}
    />
  );
}
