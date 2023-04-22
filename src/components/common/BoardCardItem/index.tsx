import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { RxPerson } from 'react-icons/rx';
import { TbMessageCircle2 } from 'react-icons/tb';
type LetterDivType = {
  blue?: boolean;
};

type IconImgDivType = {
  width?: string;
  heigth?: string;
};

function BoardCardItem() {
  return (
    <Div>
      <>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <IconImgDiv width="5rem" heigth="5rem">
            <Image src="/avatar.png" alt="avatar-img" fill></Image>
          </IconImgDiv>
          <NameDiv>JongHun Jun</NameDiv>
        </section>
        <section>
          <LetterDiv style={{ fontSize: '2.6rem' }}>
            {`[ React ] 프로젝트 급구!`}
          </LetterDiv>
          <LetterDiv>
            저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신
            분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.
            아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼
            먹고싶다.
          </LetterDiv>
        </section>
      </>

      <InfoDiv>
        <LetterDiv blue>마감일 2022.04.06</LetterDiv>
        <div
          style={{
            display: 'flex',
            paddingBottom: '2rem',
            borderBottom: '2px solid',
          }}
        >
          <IconImgDiv width="5rem" heigth="5rem">
            <Image src="/react.png" alt="react" fill></Image>
          </IconImgDiv>
          <IconImgDiv width="5rem" heigth="5rem">
            <Image src="/Nodejs.png" alt="nodejs" fill></Image>
          </IconImgDiv>
        </div>
        <InfoIconBox>
          <InfoIconItem style={{ marginRight: '1rem' }}>
            <RxPerson />
            <div>2</div>
          </InfoIconItem>
          <InfoIconItem style={{ marginLeft: '1rem' }}>
            <TbMessageCircle2 />
            <div>9</div>
          </InfoIconItem>
        </InfoIconBox>
      </InfoDiv>
    </Div>
  );
}

const Div = styled.div`
  /* ${(props) => props.theme.mq.mobile} {
    zoom: 0.8;
    width: calc(37.8rem * 1.2);
    height: calc(37.8rem * 1.2);
  } */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40rem;
  padding: 2rem;
  border: 1px solid;
  border-radius: 2rem;
  margin-bottom: 3rem;
`;

const NameDiv = styled.div`
  color: ${(props) => props.theme.sub_bluegray};
`;

const LetterDiv = styled.div<LetterDivType>`
  color: ${(props) => (props.blue ? props.theme.sub_bluegray : 'black')};
  margin-bottom: 2rem;
  line-height: 3rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const IconImgDiv = styled.div<IconImgDivType>`
  position: relative;
  margin-right: 1rem;
  border: 1px solid;
  border-radius: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding-top: 1rem;
`;

const InfoIconItem = styled.div`
  font-size: 2rem;
  display: flex;
  width: 4rem;
  justify-content: space-between;
`;

export default BoardCardItem;
