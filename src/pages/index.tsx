import BoardCardList from '@/components/common/BoardCardList';
import Pagination from '@/components/Main/Pagination';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import BannerSlider from '@/components/Main/Slider';
import MenuBarList from '@/components/common/MenuBarList';
import { techStackMenu } from '@/constants/menuList';
import TechStackList from '@/components/Main/TechStackList';
import SearchBox from '@/components/Main/SearchBox';
import usePage from '@/hook/usePage';
import usePosition from '@/hook/usePosition';
import useLanguage from '@/hook/useLanguage';
import useInput from '@/hook/useInput';
import { BoardListDataType } from '@/types/board';

export default function Home() {
  const { page, onChangePage } = usePage();
  const { position, onChangePosition } = usePosition();
  //TODO: language 콤마 형식으로 보내는건지? -> 콤마 형식 맞다
  const { language, onChangeLanguage, clearLanguage } = useLanguage();
  const [keyword, onChangeKeyword] = useInput();
  const [BoardListData, setBoardListData] = useState<BoardListDataType>();

  useEffect(() => {
    //TODO: 게시글 리스트 불러오기 api 작성
    // 게시글 페이지네이션 받아오면 boardListData에 넣어준다
    // language -> 문자열로 바꿔서 보내야한다 ex) React,Java  <- join(',')활용하기
    console.log(page, position, language, keyword); //<- 얘네들 params로 보내줘야한다.
  }, [page, position, language, keyword]);

  return (
    <Div>
      <BannerSlider></BannerSlider>
      <MainDiv>
        <section>
          <div>
            <MenuBarList
              clearLanguage={clearLanguage}
              position={position}
              list={techStackMenu}
              onChangePosition={onChangePosition}
            />
            <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
          </div>
          <TechStackList
            language={language}
            onChangeLanguage={onChangeLanguage}
          />
        </section>
        <BoardCardList boardCards={BoardListData?.content}></BoardCardList>
        <Pagination
          totalPages={BoardListData?.totalPages}
          onChangePage={onChangePage}
        ></Pagination>
      </MainDiv>
    </Div>
  );
}

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const MainDiv = styled.div`
  /* padding: 0 11rem; */
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  margin-top: 4.5rem;
  & > section {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    & > div {
      display: flex;
      margin-bottom: 1rem;
      & > div {
        flex-shrink: 0;
      }
    }
    & > ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
