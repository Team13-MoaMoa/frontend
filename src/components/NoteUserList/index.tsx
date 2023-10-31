import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { UserListType } from '@/types/note';

type UserListProps = {
  noteUserList: UserListType[];
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function NoteUserList({ noteUserList, setUserName, setUserId }: UserListProps) {
  return (
    <Div>
      {noteUserList.map((user, i) => (
        <UserListDiv
          key={i}
          onClick={() => {
            setUserName(noteUserList[i].nickname);
            setUserId(noteUserList[i].id);
          }}
        >
          <UserInfoDiv>
            <UserImgDiv>
              <Image src="/avatar.png" alt="avatar-img" fill />
            </UserImgDiv>
            <UserNameDiv className="test">{user.nickname}</UserNameDiv>
            <UserImgDiv>
              {/* <Image src="/mypageIcon.png" alt="mypageIcon-img" fill /> */}
            </UserImgDiv>
          </UserInfoDiv>
        </UserListDiv>
      ))}
    </Div>
  );
}

export default NoteUserList;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;

const UserListDiv = styled.div`
  height: 8rem;
  width: 100%;
  padding: 10px;
  color: #5e718d;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.main_brown};
  }
`;

const UserInfoDiv = styled.div`
  display: flex;
  height: 100%;
  padding: 0.3rem 0.3rem;
  align-items: center;
`;

const UserImgDiv = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  position: relative;
  flex-shrink: 0;
`;

const UserNameDiv = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 2rem;
  text-align: left;
  line-height: 50px;
  font-size: 1.6rem;
  font-weight: bold;
`;
