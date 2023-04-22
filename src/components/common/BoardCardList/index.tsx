import styled from '@emotion/styled';
import React from 'react';
import BoardCardItem from '../BoardCardItem';
import { BoardCard } from '@/types/board';

function BoardCardList({ boardCards }: { boardCards: BoardCard[] }) {
  return (
    <Div>
      {boardCards?.map((card) => (
        <BoardCardItem key={card.id}></BoardCardItem>
      ))}
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  display: grid;
  place-items: center;

  grid-template-columns: repeat(auto-fill, minmax(37.8rem, auto));
  /* ${(props) => props.theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  } */
  ${(props) => props.theme.mq.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  gap: 3rem;
`;

export default BoardCardList;
