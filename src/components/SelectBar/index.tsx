import styled from '@emotion/styled';
import React from 'react';
import { select } from '@/types/mypage';
type Props = {
  selectButton: select;
  setselectButton: React.Dispatch<React.SetStateAction<select>>;
};

const SelectBar = ({ selectButton, setselectButton }: Props) => {
  const changeWrite = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    if (target.className === 'SAVE') {
      setselectButton(() => 'SAVE');
    } else if (target.className === 'WRITE') {
      setselectButton(() => 'WRITE');
    }
  };
  return (
    <SelectBarBox>
      <SelectUl selectButton={selectButton} onClick={changeWrite}>
        <li className="SAVE">찜한 프로젝트</li>
        <li className="WRITE">작성한 글</li>
      </SelectUl>
    </SelectBarBox>
  );
};

export default SelectBar;

const SelectBarBox = styled.section``;

const SelectUl = styled.ul<{ selectButton: select }>`
  display: flex;
  & > li {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 5rem;
    font-size: 3.2rem;
    width: 19rem;
    height: 8.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.text_color};
    cursor: pointer;
  }
  & > li:nth-of-type(1) {
    border-bottom: ${(props) =>
      props.selectButton === 'SAVE'
        ? '3px solid #F8D23E'
        : '3px solid #000000'};

    color: ${(props) =>
      props.selectButton === 'SAVE' ? props.theme.text_color : '#AAB3C3'};
  }

  & > li:nth-of-type(2) {
    border-bottom: ${(props) =>
      props.selectButton === 'WRITE'
        ? '3px solid #F8D23E'
        : '3px solid #000000'};

    color: ${(props) =>
      props.selectButton === 'WRITE' ? props.theme.text_color : '#AAB3C3'};
  }
`;
