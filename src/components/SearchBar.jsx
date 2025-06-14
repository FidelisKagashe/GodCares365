import React from 'react';

export function SearchBar({ searchTerm, onSearchChange, placeholder = 'Search by title…' }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      aria-label="Search media by title"
    />
  );
}
