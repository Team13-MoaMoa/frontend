import React from 'react';
import styled from '@emotion/styled';

function NoteDetail(props: any) {
  return (
    <Div>
      <div style={{ display: 'flex' }}>
        <NoteListDiv>
          <span
            style={{
              fontWeight: 'bold',
              color: '#F8D23E',
              fontSize: '2rem',
            }}
          >
            보낸쪽지
          </span>
          <span style={{ float: 'right' }}>2023.04.10</span>
          <p style={{ color: 'black', marginTop: '20px' }}>네</p>
        </NoteListDiv>
      </div>
      <div style={{ display: 'flex' }}>
        <NoteListDiv>
          <span
            style={{
              fontWeight: 'bold',
              color: '#42A2AE',
              fontSize: '2rem',
              marginBottom: '20px',
            }}
          >
            받은쪽지
          </span>
          <span style={{ float: 'right' }}>2023.04.10</span>
          <p style={{ color: 'black', marginTop: '20px' }}>안녕하세요~</p>
        </NoteListDiv>
      </div>
    </Div>
  );
}

export default NoteDetail;

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;

const NoteListDiv = styled.div`
  height: 13rem;
  width: 100%;
  padding: 30px 20px 20px 20px;
  margin: 0 3.5rem;
  border-bottom: 2px solid #d9d9d9;
`;
