import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { authInstance } from '@/api/axiosCustom';

type SendNoteProps = {
  userId: number | undefined;
  onClickNoteModal: () => void;
};

function SendNote({ userId, onClickNoteModal }: SendNoteProps) {
  const [inputContent, setInputContent] = useState<string>('');
  console.log(inputContent);

  const onChangeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const onSubmitNote = () => {
    authInstance
      .post('/notes', {
        user_id: userId,
        content: inputContent,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BackGround>
      <Div>
        <SendDiv>
          <div>
            <h1>쪽지 보내기</h1>
            <IconDiv>
              <Image
                src="/closeIcon.png"
                alt="closeIcon-img"
                fill
                onClick={onClickNoteModal}
              />
            </IconDiv>
          </div>
          <ContentInput
            name="text"
            placeholder="내용을 입력해주세요."
            onChange={onChangeNote}
          />
          <SubmitBtn onClick={onSubmitNote}>전송</SubmitBtn>
        </SendDiv>
      </Div>
    </BackGround>
  );
}

export default SendNote;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;

const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SendDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  width: 72rem;
  padding: 3.8rem 3.5rem;
  position: relative;
  z-index: 99;
  color: black;
  font-size: 2.8rem;
  font-weight: bold;
  background-color: white;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    & > h1 {
    }
  }
`;

const ContentInput = styled.input`
  width: 100%;
  height: 19rem;
  border: 2px solid #d9d9d9;
  outline: none;
  resize: none;
  padding: 1.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  height: 3.6rem;
  width: 9.5rem;
  background-color: #957f6a;
  color: #ffffff;
  border-radius: 2rem;
  border: 2px solid #957f6a;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const IconDiv = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
