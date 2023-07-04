import styled from '@emotion/styled';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

type PaginationProps = {
  onChangePage: (page: number) => void;
  totalPages: number;
};

function Pagination({ onChangePage, totalPages }: PaginationProps) {
  return (
    <div>
      <PaginationContainer
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => onChangePage(selected + 1)}
        previousLabel={<AiOutlineArrowLeft />}
        nextLabel={<AiOutlineArrowRight />}
      />
    </div>
  );
}

Pagination.defaultProps = {
  totalPages: 1,
};

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
