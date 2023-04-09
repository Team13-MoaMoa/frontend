import React from 'react';
import styled from '@emotion/styled';

function NoteUserList(props: any) {
  const DummyUsers = [
    { name: '최연지' },
    { name: '최욘지' },
    { name: '최얀지' },
  ];
  return (
    <Div>
      {DummyUsers.map((user) => (
        <UserListDiv>
          <UserInfoDiv>
            <UserImgDiv></UserImgDiv>
            <UserNameDiv>{user.name}</UserNameDiv>
          </UserInfoDiv>
        </UserListDiv>
      ))}
    </Div>
  );
}

export default NoteUserList;

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;

const UserListDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 10px 5px 10px;
  &:hover {
    background-color: #957f6a;
    color: #ffffff;
  }
`;

const UserInfoDiv = styled.div`
  display: flex;
  height: 100%;
`;

const UserImgDiv = styled.div`
  float: left;
  margin-right: 1rem;
  width: 3.4em;
  border-radius: 50%;
  background-color: gray;
`;

const UserNameDiv = styled.div`
  text-align: left;
  font-weight: bold;
  line-height: 38px;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  color: #5e718d;
  &:hover {
    color: #ffffff;
  }
`;
