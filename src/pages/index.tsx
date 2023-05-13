import BoardCardList from '@/components/common/BoardCardList';
import Pagination from '@/components/main/pagination';
import techStackData from '@/constants/techStackData';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import BannerSlider from '@/components/main/slider';
import OverlaySocialLogin from '@/components/login/OverlaySocialLogin';
import { useRouter } from 'next/router';

export default function Home() {
  const [techStackMenu, setTeckStackMenu] = useState([
    { name: '프론트엔드', type: 'frontend', checked: false },
    { name: '백엔드', type: 'backend', checked: false },
    { name: '기타', type: 'etc', checked: false },
    { name: '모두보기', type: 'all', checked: true },
  ]);
  const [techItemList, setTechItemList] = useState(techStackData);

  const checkTechStack = (id: number) => {
    const newData = techItemList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTechItemList(newData);
  };

  const filterTechStack = (type: string) => {
    if (type === 'all') setTechItemList(techStackData);
    else {
      const filterStack = techStackData.filter((item) => item.type === type);
      setTechItemList(filterStack);
    }
  };

  const checkTechMenu = (type: string) => {
    const checkMenu = techStackMenu
      .map((item) => ({
        ...item,
        checked: false,
      }))
      .map((item) => (item.type === type ? { ...item, checked: true } : item));
    setTeckStackMenu(checkMenu);
  };

  const boardCards = [
    {
      id: 1,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [1, 2],
      commentCount: 0,
    },
    {
      id: 2,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [],
      commentCount: 0,
    },
    {
      id: 3,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [],
      commentCount: 0,
    },
    {
      id: 4,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [],
      commentCount: 0,
    },
    {
      id: 5,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [],
      commentCount: 0,
    },
    {
      id: 6,
      title: `[ React ] 프로젝트 급구!}`,
      projectName: 'MoaMoa',
      content:
        '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
      deadline: [2023, 3, 30],
      headcount: 3,
      jobPosition: 'ALL',
      user: {
        id: 1,
        nickname: '송지민',
        imageUrl: 'imgurl.com',
      },
      techStackList: [],
      commentCount: 0,
    },
  ];

  return (
    <Div>
      <OverlaySocialLogin />
      <BannerSlider></BannerSlider>

      <MainDiv>
        <section>
          <div>
            {techStackMenu.map((item) => (
              <TechStackMenuDiv
                key={item.name}
                checked={item.checked}
                onClick={() => {
                  filterTechStack(item.type);
                  checkTechMenu(item.type);
                }}
              >
                {item.name}
              </TechStackMenuDiv>
            ))}
            <SearchDiv>
              <FiSearch></FiSearch>
              <SearchInput placeholder="Search anything"></SearchInput>
            </SearchDiv>
          </div>
          <ul>
            {techItemList.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  checkTechStack(item.id);
                }}
              >
                <TechItemDiv checked={item.checked}>
                  <div>
                    <Image src={item.img} alt={item.name} fill></Image>
                  </div>
                  <div>{item.name}</div>
                </TechItemDiv>
              </li>
            ))}
          </ul>
        </section>

        <BoardCardList boardCards={boardCards}></BoardCardList>
        <Pagination></Pagination>
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

const SearchDiv = styled.div`
  display: flex;

  flex-shrink: 1;
  width: 40rem;
  height: 5.2rem;
  padding: 1.4rem;
  border: 1px solid;
  margin-left: auto;
  border-color: ${(props) => props.theme.horizon_gray};
  border-radius: 6px;

  & > svg {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid;
    width: 2rem;
    height: 2rem;
  }
`;

const SearchInput = styled.input`
  &::placeholder {
    color: ${(props) => props.theme.unselected_text};
  }
  box-sizing: border-box;
  border-style: none;
  outline-style: none;
`;

const TechStackMenuDiv = styled.div<{ checked: boolean }>`
  text-align: center;
  width: auto;
  padding: 0 2rem 2rem 2rem;
  color: ${(props) => props.theme.unselected_text};
  border-bottom: 2px solid black;
  cursor: pointer;
  font-size: 2.4rem;
  border-bottom: 2px solid
    ${(props) => (props.checked ? props.theme.sub_yellow : '')};
  color: ${(props) => (props.checked ? 'black' : '')};
`;

const TechItemDiv = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1.2rem 2rem 1.2rem 1.5rem;
  border: 1px solid;
  box-shadow: ${(props) => (props.checked ? '0 0 0 3px inset' : '')};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  & > div:first-of-type {
    position: relative;
    width: 3.7rem;
    height: 3.7rem;
  }

  & > div:last-child {
    margin-right: 1rem;
  }
`;
