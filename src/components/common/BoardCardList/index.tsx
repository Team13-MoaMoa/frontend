import styled from '@emotion/styled';
import React from 'react';
import BoardCardItem from '../BoardCardItem';

function BoardCardList({ boardCards }: { boardCards: any }) {
  return (
    <Div>
      {boardCards?.map((_: any, i: any) => (
        <BoardCardItem key={i}></BoardCardItem>
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
