import styled from '@emotion/styled';
import React from 'react';
import BoardCardItem from '../BoardCardItem';
import { BoardType } from '@/types/board';

type BoardCardListProps = {
  boardCards: BoardType[] | undefined;
};

function BoardCardList({ boardCards }: BoardCardListProps) {
  return (
    <BoardCardUl>
      {boardCards?.map((card) => (
        <BoardCardItem key={card.id} card={card} />
      ))}
    </BoardCardUl>
  );
}

const BoardCardUl = styled.ul`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(37.8rem, auto));
  ${(props) => props.theme.mq.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default BoardCardList;
