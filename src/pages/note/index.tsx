import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoteUserList from '@/components/NoteUserList';
import NoteDetail from '@/components/NoteDetail';
import SendNote from '@/components/SendNote';
import { UserListType } from '@/types/note';
import Lottie from 'lottie-react';
import emptyNote from '@/assets/emptyNote.json';
import { getNoteUserListAPI, postNoteAPI } from '@/api/note';
import useSWR, { useSWRConfig } from 'swr';

function NotePage() {
  const { data } = useSWR('/notes', getNoteUserListAPI, {
    onSuccess: (res) => {
      setNoteUserList(res.data);
      // setUserId(res.data[0].id);
    },
  });
  const { mutate } = useSWRConfig();

  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);
  const [noteUserList, setNoteUserList] = useState<UserListType[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [userId, setUserId] = useState<number>(0);

  const onClickNoteModal = () => {
    setIsNoteOpen((prev) => !prev);
  };

  const onPostNote = async (userId: number, content: string) => {
    if (!(content.length > 0)) return;
    const response = await postNoteAPI(userId, content);
    if (response) {
      alert('쪽지를 보냈습니다.');
      mutate(`/notes/${userId}`);
    } else {
      alert('쪽지를 보내는데 실패했습니다.');
    }
  };

  return (
    <Div>
      <ListDiv style={{ margin: '0 20px 0 0' }}>
        <TitleDiv>쪽지함</TitleDiv>
        <NoteUserList
          noteUserList={noteUserList}
          setUserName={setUserName}
          setUserId={setUserId}
        />
      </ListDiv>
      <ListDiv style={{ width: '83rem' }}>
        {userName === '' ? (
          <Lottie animationData={emptyNote} />
        ) : (
          <>
            <TitleDiv style={{ marginLeft: '2.7rem' }}>
              <span>{userName}</span>
              <IconDiv>
                <Image
                  src="/noteIcon.png"
                  alt="noteIcon-img"
                  fill
                  onClick={onClickNoteModal}
                />
              </IconDiv>
            </TitleDiv>
            {isNoteOpen && (
              <SendNote
                userId={userId || 0}
                onClickNoteModal={onClickNoteModal}
                onPostNote={onPostNote}
              />
            )}
            <NoteDetail userId={userId} />
          </>
        )}
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
  overflow: auto;
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
