import BoardCardItem from '@/components/common/BoardCardItem';
import BoardCardList from '@/components/common/BoardCardList';
import styled from '@emotion/styled';
// import '@lottiefiles/lottie-player';
import Image from 'next/image';

export default function Home() {
  const techStackMenu = ['프론트엔드', '백엔드', '기타', '모두 보기'];
  const techItemList = ['React', 'React', 'React'];
  const boardCards = [{}, {}, {}, {}, {}, {}];
  return (
    <Div>
      <section>
        <div>
          <div>스터디와 사이드 프로젝트를 찾는 가장 쉬운 방법</div>
          <div>MOA MOA 에서 찾아보세요🔍</div>
        </div>
        <Image src="/study.gif" width={300} height={300} alt="gif"></Image>
      </section>

      <div style={{ display: 'flex' }}>
        {techStackMenu.map((title) => (
          <TechStackMenuDiv>{title}</TechStackMenuDiv>
        ))}
      </div>
      <ul style={{ display: 'flex' }}>
        {techItemList.map((title) => (
          <li>
            <TechItemDiv>
              <div
                style={{
                  position: 'relative',
                  width: '2.8rem',
                  height: '2.8rem',
                }}
              >
                <Image src="/react.svg" alt="react-icon" fill></Image>
              </div>

              <div style={{ marginRight: '1rem' }}>{title}</div>
            </TechItemDiv>
          </li>
        ))}
      </ul>

      <SearchDiv>
        <div
          style={{
            paddingRight: '10px',
            marginRight: '10px',
            borderRight: '1px solid',
          }}
        >
          🔍
        </div>
        <SearchInput placeholder="Search anything"></SearchInput>
      </SearchDiv>
      <BoardCardList boardCards={boardCards}></BoardCardList>
    </Div>
  );
}

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;

const SearchDiv = styled.div`
  display: flex;
  width: 37.8rem;
  height: 5.2rem;
  padding: 1.4rem;
  border: 1px solid;
  border-color: ${(props) => props.theme.horizon_gray};
  border-radius: 6px;
`;

const SearchInput = styled.input`
  &::placeholder {
    color: ${(props) => props.theme.unselected_text};
  }
  box-sizing: border-box;
  border-style: none;
  outline-style: none;
`;

const TechStackMenuDiv = styled.div`
  text-align: center;
  width: 12rem;
  padding: 2rem;
  color: ${(props) => props.theme.unselected_text};
  border-bottom: 2px solid black;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.sub_yellow};
    color: black;
  }
`;

const TechItemDiv = styled.div`
  display: flex;
  width: fit-content;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 50px;
`;
