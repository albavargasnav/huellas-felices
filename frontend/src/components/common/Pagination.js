import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            href="#!"
            className={`page-link ${currentPage === number ? 'active' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;