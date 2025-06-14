import React from 'react';

export function SortDropdown({ sortOption, onSortChange }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value)}
      className="border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
    >
      {/* options */}
    </select>
  );
}
