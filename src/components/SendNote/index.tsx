import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

type SendNoteProps = {
  onClickNoteModal: () => void;
};

function SendNote({ onClickNoteModal }: SendNoteProps) {
  return (
    <BackGround>
      <Div>
        <SendDiv>
          <div style={{ height: '50px', display: 'flex' }}>
            <h1
              style={{
                paddingLeft: '1.9rem',
                width: '61rem',
                lineHeight: '50px',
              }}
            >
              쪽지 보내기
            </h1>
            <IconDiv>
              <Image
                src="/closeIcon.png"
                alt="closeIcon-img"
                fill
                onClick={onClickNoteModal}
              />
            </IconDiv>
          </div>
          <DetailInput
            type="text"
            name="text"
            placeholder="내용을 입력해주세요."
          />
          <SubmitBtn>전송</SubmitBtn>
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
  height: 40rem;
  width: 72rem;
  padding: 3.8rem 2.3rem;
  position: relative;
  z-index: 99;
  color: black;
  font-size: 2.8rem;
  font-weight: bold;
  background-color: white;
`;

const DetailInput = styled.input`
  height: 19rem;
  width: 62.4rem;
  margin: 20px;
  border: 2px solid #d9d9d9;
`;

const SubmitBtn = styled.button`
  height: 3.6rem;
  width: 9.5rem;
  margin-right: 50px;
  float: right;
  background-color: #957f6a;
  color: #ffffff;
  border-radius: 2rem;
  border: 2px solid #957f6a;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const IconDiv = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
`;
