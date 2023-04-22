import styled from '@emotion/styled';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <PaginationContainer
        pageCount={5}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
      />
    </div>
  );
}

const PaginationContainer = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.sub_bluegray};
  margin-bottom: 10rem;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 1rem;
    cursor: pointer;
    &.selected {
      border-radius: 100%;
      color: white;
      background-color: #3d4a5c;
    }
  }
`;

export default Pagination;
