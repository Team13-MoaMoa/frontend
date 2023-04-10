import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

function SendNote(props: any) {
  return (
    <Div>
      <SendDiv>
        <div style={{ height: '50px', display: 'flex' }}>
          <h1
            style={{ paddingLeft: '38px', width: '62rem', lineHeight: '50px' }}
          >
            쪽지 보내기
          </h1>
          <Image
            src="/closeIcon.png"
            alt="closeIcon-img"
            width={48}
            height={48}
          ></Image>
        </div>
        <DetailInput
          type="text"
          name="text"
          placeholder="내용을 입력해주세요."
        ></DetailInput>
        <SubmitBtn>전송</SubmitBtn>
      </SendDiv>
    </Div>
  );
}

export default SendNote;

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
  /* background-color: rgba(0, 0, 0, 0.6); */
`;
const SendDiv = styled.div`
  height: 40rem;
  width: 72rem;
  padding: 3.2rem 0;
  position: relative;
  z-index: 99;
  color: black;
  font-size: 2.8rem;
  font-weight: bold;
`;

const DetailInput = styled.input`
  height: 19rem;
  width: 62.4rem;
  margin: 40px;
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
