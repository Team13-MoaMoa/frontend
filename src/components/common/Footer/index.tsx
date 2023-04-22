import styled from '@emotion/styled';
import React from 'react';
import logo from '/src/assets/logo_white.png';
import logo2 from '/src/assets/logo2_white.png';
import Image from 'next/image';

function Footer() {
  return (
    <FooterDiv>
      <div>
        <section>
          <LogoDiv width="7.359rem">
            <Image src={logo} alt="MOAMOA로고 이미지" fill />
          </LogoDiv>
          <LogoDiv width="17.69rem">
            <Image src={logo2} alt="MOAMOA로고 텍스트" fill />
          </LogoDiv>
        </section>
        <TextDiv>
          2023 Computer Engineering Graduation Project by Team MOA MOA
        </TextDiv>
      </div>
    </FooterDiv>
  );
}

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.8rem 4rem;
  width: 100%;
  height: 159px;
  align-items: start;
  background-color: #151b28;

  & > div {
    max-width: 1350px;
    margin: 0 auto;
    width: 100%;

    & > section {
      display: flex;
    }
  }
`;

const LogoDiv = styled.div<{ width: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: 4.1rem;
  margin-bottom: 1.5rem;
`;

const TextDiv = styled.div`
  color: #969696;
`;
