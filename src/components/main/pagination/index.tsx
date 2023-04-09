import styled from '@emotion/styled';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <PaginationContainer
        pageCount={10}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel={'<'}
        nextLabel={'>'}
      />
    </div>
  );
}

const PaginationContainer = styled(ReactPaginate)`
  & {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;

    li {
      margin-right: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;

      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
        color: #333;

        &:hover {
          background-color: #f5f5f5;
        }

        &.active {
          background-color: #337ab7;
          color: #fff;
        }
      }
    }
  }

  .previous,
  .next {
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
      color: #333;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;

export default Pagination;
