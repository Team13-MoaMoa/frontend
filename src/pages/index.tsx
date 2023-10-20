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
import useDebounceInput from '@/hook/useDebounce';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '@/store/user';
import { RootState } from '@/store';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const { page, onChangePage } = usePage();
  const { position, onChangePosition } = usePosition();
  //TODO: language 콤마 형식으로 보내는건지? -> 콤마 형식 맞다
  const { language, onChangeLanguage, clearLanguage } = useLanguage();
  const [search, onChangeSearch] = useInput();
  const [ResponseBoardListData, setResponseBoardListData] =
    useState<ResponseBoardListType>(boardCardsList);
  const debouncedSearch = useDebounceInput(search);

  const user = useSelector((state: RootState) => state.user);
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (!token && user.user.id !== 0) {
        setIsSignUp(true);
      } else if (token) {
        dispatch(setIsLogin(true));
      } else if (!token) {
        dispatch(setIsLogin(false));
      }
    }
  }, []);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: '/posts/all',
      method: 'get',
      params: {
        page,
        position: position === '' ? undefined : position,
        language: language.join(',') === '' ? undefined : language.join(','),
        search: debouncedSearch === '' ? undefined : debouncedSearch,
      },
    };

    baseInstance.request(config).then((res) => {
      setResponseBoardListData(res.data);
    });
  }, [page, position, language, debouncedSearch]);

  if (isSignUp) {
    router.push('/login/step1');
  }

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

export const Empty = styled.div`
  width: 100vw;
  background-color: whitesmoke;
  min-height: calc(100vh - 70px - 159px);
`;
