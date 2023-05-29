import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoteUserList from '@/components/NoteUserList';
import NoteDetail from '@/components/NoteDetail';
import SendNote from '@/components/SendNote';

function NotePage() {
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);

  const onClickNoteModal = () => {
    setIsNoteOpen((prev) => !prev);
  };

  return (
    <Div>
      <ListDiv style={{ margin: '0 20px 0 0' }}>
        <TitleDiv>쪽지함</TitleDiv>
        <NoteUserList />
      </ListDiv>
      <ListDiv style={{ width: '83rem' }}>
        <TitleDiv>
          user name
          <IconDiv>
            <Image
              src="/noteIcon.png"
              alt="noteIcon-img"
              fill
              onClick={onClickNoteModal}
            />
          </IconDiv>
        </TitleDiv>
        {isNoteOpen && <SendNote onClickNoteModal={onClickNoteModal} />}
        <NoteDetail />
      </ListDiv>
    </Div>
  );
}

export default NotePage;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
  display: flex;
  justify-content: center;
  margin: 12rem 0;
`;

const ListDiv = styled.div`
  height: 90rem;
  width: 33.2rem;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  float: left;
`;

const TitleDiv = styled.div`
  height: 80px;
  padding: 40px 0 30px 30px;
  margin-bottom: 2rem;

  font-size: 2.2rem;
  font-weight: bold;
`;

const IconDiv = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  float: right;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
