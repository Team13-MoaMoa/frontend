import React from 'react';
import BoardCardList from '../common/BoardCardList';
import { useEffect, useState } from 'react';
import { authInstance } from '@/api/axiosCustom';
import { BoardListType, BoardType } from '@/types/board';
import styled from '@emotion/styled';
import SelectBar from '../SelectBar';
import { select } from '@/types/mypage';

const UserProjects = () => {
  const [selectButton, setselectButton] = useState<select>('SAVE');
  const [data, setData] = useState<BoardListType>();
  useEffect(() => {
    (async () => {
      const res = await authInstance('/users/projects?page=1');
      setData(res.data.data);
      console.log(res.data.data.content);
    })();
  }, []);
  return (
    <UserProjectsBox>
      <SelectBar
        setselectButton={setselectButton}
        selectButton={selectButton}
      />
      <BoardCardList boardCards={data?.content} />
    </UserProjectsBox>
  );
};

export default UserProjects;

const UserProjectsBox = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
`;
