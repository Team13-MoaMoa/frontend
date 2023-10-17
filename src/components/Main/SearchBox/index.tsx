import styled from '@emotion/styled';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

type SearchBoxProps = {
  search: string;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBox({ search, onChangeSearch }: SearchBoxProps) {
  return (
    <SearchDiv>
      <FiSearch></FiSearch>
      <SearchInput
        placeholder="Search anything"
        value={search}
        onChange={onChangeSearch}
      />
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  display: flex;

  flex-shrink: 1;
  width: 40rem;
  height: 5.2rem;
  padding: 1.4rem;
  border: 1px solid;
  margin-left: auto;
  border-color: ${(props) => props.theme.horizon_gray};
  border-radius: 6px;

  & > svg {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid;
    width: 2rem;
    height: 2rem;
  }
`;

const SearchInput = styled.input`
  &::placeholder {
    color: ${(props) => props.theme.unselected_text};
  }
  box-sizing: border-box;
  border-style: none;
  outline-style: none;
`;

export default SearchBox;
