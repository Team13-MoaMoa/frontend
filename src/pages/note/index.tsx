import React from 'react';
import styled from '@emotion/styled';
import NoteUserList from '@/components/NoteUserList';

function NotePage(props: any) {
  return (
    <Div>
      <h1>Note Page</h1>
      <ListDiv style={{ margin: '0 20px 0 0' }}>
        <TitleDiv>쪽지함</TitleDiv>
        <NoteUserList />
      </ListDiv>
      <ListDiv style={{ width: '500px' }}>
        <TitleDiv>user name</TitleDiv>
      </ListDiv>
    </Div>
  );
}

export default NotePage;

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;

const ListDiv = styled.div`
  height: 500px;
  width: 200px;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  float: left;
`;

const TitleDiv = styled.div`
  height: 20px;
  padding: 20px 0 40px 15px;
  font-size: larger;
  font-weight: bold;
`;
