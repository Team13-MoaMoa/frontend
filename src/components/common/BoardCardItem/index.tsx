import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

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
          <IconImgDiv width="4rem" heigth="4rem">
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
            분을 구하고 있습니다 ㅎㅎ{' '}
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
          <IconImgDiv width="4rem" heigth="4rem">
            <Image src="/avatar.png" alt="avatar-img" fill></Image>
          </IconImgDiv>
          <IconImgDiv width="4rem" heigth="4rem">
            <Image src="/avatar.png" alt="avatar-img" fill></Image>
          </IconImgDiv>
        </div>
        <InfoIconBox>
          <InfoIconItem style={{ marginRight: '1rem' }}>
            <div>👤</div>
            <div>4</div>
          </InfoIconItem>
          <InfoIconItem style={{ marginLeft: '1rem' }}>
            <div>✉️</div>
            <div>9</div>
          </InfoIconItem>
        </InfoIconBox>
      </InfoDiv>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 37.8rem;
  height: 37.8rem;
  padding: 2rem;
  border: 3px solid;
  border-radius: 3rem;
`;

const NameDiv = styled.div`
  color: ${(props) => props.theme.sub_bluegray};
`;

const LetterDiv = styled.div<LetterDivType>`
  color: ${(props) => (props.blue ? props.theme.sub_bluegray : 'black')};
  margin-bottom: 2rem;
  line-height: 2.4rem;
`;

const IconImgDiv = styled.div<IconImgDivType>`
  position: relative;
  margin-right: 1rem;
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
