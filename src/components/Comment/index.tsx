import { User } from '@/types/post/post';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

type CommentProps = {
  content: string;
  user: User;
  onClickNoteModal: () => void;
};

export default function Comment({
  content,
  user,
  onClickNoteModal,
}: CommentProps) {
  return (
    <CommentWrapper onClick={onClickNoteModal}>
      <ProfileImage>
        <Image src={user.image_url} alt="profileImage" fill />
      </ProfileImage>
      <div>
        <InfoWrapper>
          <p>{user.nickname}</p>
          <p>
            {dayjs(new Date('June 17, 2023 13:24:00')).format(
              'YYYY-MM-DD HH:MM'
            )}
          </p>
          <NoteIcon>
            <Image src="/noteIcon.png" alt="noteIcon" fill />
          </NoteIcon>
        </InfoWrapper>
        <p>{content}</p>
      </div>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.li`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  & > p:nth-child(2) {
    color: ${(props) => props.theme.main_brown};
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

const NoteIcon = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
