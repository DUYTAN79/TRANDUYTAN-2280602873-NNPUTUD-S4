import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationControl = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  let items = [];
  // Hiển thị tối đa 5 trang xung quanh trang hiện tại để tránh bị quá dài
  const leftSide = Math.max(1, currentPage - 2);
  const rightSide = Math.min(totalPages, currentPage + 2);

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <Pagination.Item 
        key={number} 
        active={number === currentPage} 
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="mb-0">
      <Pagination.First disabled={currentPage === 1} onClick={() => onPageChange(1)} />
      <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
      
      {leftSide > 1 && <Pagination.Ellipsis disabled />}
      {items}
      {rightSide < totalPages && <Pagination.Ellipsis disabled />}

      <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
      <Pagination.Last disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
};

export default PaginationControl;