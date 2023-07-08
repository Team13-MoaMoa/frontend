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
import { ResponseBoardListType } from '@/types/board';
import { boardCardsList } from '@/constants/boardCards';
import { baseInstance } from '@/api/axiosCustom';
import { AxiosRequestConfig } from 'axios';

export default function Home() {
  const { page, onChangePage } = usePage();
  const { position, onChangePosition } = usePosition();
  //TODO: language 콤마 형식으로 보내는건지? -> 콤마 형식 맞다
  const { language, onChangeLanguage, clearLanguage } = useLanguage();
  const [search, onChangeSearch] = useInput();
  const [ResponseBoardListData, setResponseBoardListData] =
    useState<ResponseBoardListType>(boardCardsList);
  console.log('ResponseBoardListData', ResponseBoardListData);
  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: 'posts/all',
      method: 'get',
      params: {
        page,
        position: position === '' ? undefined : position,
        language: language.join(',') === '' ? undefined : language,
        search: search === '' ? undefined : search,
      },
    };

    baseInstance.request(config).then((res) => {
      setResponseBoardListData(res.data);
    });
  }, [page, position, language, search]);

  return (
    <Div>
      <BannerSlider />
      <MainDiv>
        <section>
          <div>
            <MenuBarList
              clearLanguage={clearLanguage}
              position={position}
              list={techStackMenu}
              onChangePosition={onChangePosition}
            />
            <SearchBox search={search} onChangeSearch={onChangeSearch} />
          </div>
          <TechStackList
            position={position}
            language={language}
            onChangeLanguage={onChangeLanguage}
          />
        </section>
        <BoardCardList boardCards={ResponseBoardListData?.data.content} />
        <Pagination
          totalPages={ResponseBoardListData?.data.totalPages}
          onChangePage={onChangePage}
        />
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
