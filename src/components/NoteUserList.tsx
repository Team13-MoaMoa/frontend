import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

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
            <UserImgDiv>
              <Image
                src="/avatar.png"
                alt="avatar-img"
                width={50}
                height={50}
              ></Image>
            </UserImgDiv>
            <UserNameDiv>
              {user.name}
              <Image
                src="/mypageIcon.png"
                alt="mypageIcon-img"
                width={30}
                height={30}
                style={{ float: 'right', marginTop: '12px' }}
              ></Image>
            </UserNameDiv>
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
  height: 8rem;
  width: 100%;
  padding: 10px;
  &:hover {
    color: #ffffff;
    background-color: #957f6a;
  }
`;

const UserInfoDiv = styled.div`
  display: flex;
  height: 100%;
  padding: 0.3rem 0.3rem;
`;

const UserImgDiv = styled.div`
  float: left;
  border-radius: 50%;
`;

const UserNameDiv = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  text-align: left;
  line-height: 50px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #5e718d;
`;
