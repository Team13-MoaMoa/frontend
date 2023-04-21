import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoteUserList from '@/components/NoteUserList';
import NoteDetail from '@/components/NoteDetail';
import SendNote from '@/components/SendNote';
import { useCallback } from 'react';

function NotePage(props: any) {
  const [noteIsOpen, setNoteIsOpen] = useState<boolean>(false);

  const onClickNoteModal = () => {
    setNoteIsOpen((per) => !per);
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
          <Image
            src="/noteIcon.png"
            alt="noteIcon-img"
            width={30}
            height={30}
            style={{ float: 'right', marginRight: '50px' }}
            onClick={onClickNoteModal}
          ></Image>
        </TitleDiv>
        {noteIsOpen ? <SendNote onClickNoteModal={onClickNoteModal} /> : null}
        <NoteDetail></NoteDetail>
      </ListDiv>
    </Div>
  );
}

export default NotePage;

const Div = styled.div`
  /* font-family: var(--Noto-B); */
  color: ${(props) => props.theme.main_brown};
  display: flex;
  justify-content: center;
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
