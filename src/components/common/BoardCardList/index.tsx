import styled from '@emotion/styled';
import React from 'react';
import BoardCardItem from '../BoardCardItem';

function BoardCardList({ boardCards }: { boardCards: any }) {
  return (
    <Div>
      {boardCards?.map(() => (
        <BoardCardItem></BoardCardItem>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default BoardCardList;
