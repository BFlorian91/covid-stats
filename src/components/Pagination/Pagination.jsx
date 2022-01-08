import React from "react";

export default function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      {pages.map((page, index) => (
        <button key={index} onClick={handleClick}>
          {page}
        </button>
      ))}
    </div>
  );
}
