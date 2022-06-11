import React from 'react';
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);   // Convert to the smallest integer
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
            <a href="#s" onClick={() => onPageChange(page)} className="page-link">{page}</a></li>))}
      </ul>
    </nav>
  );
}

export default Pagination;