import React from 'react';
import BoardCardList from '../common/BoardCardList';
import { useEffect, useState } from 'react';
import { authInstance } from '@/api/axiosCustom';
import { BoardListType } from '@/types/board';
import styled from '@emotion/styled';
import SelectBar from '../SelectBar';
import { select } from '@/types/mypage';

const UserProjects = () => {
  const [selectButton, setselectButton] = useState<select>('SAVE');
  const [saveList, setSaveList] = useState<BoardListType>();
  const [writeList, setWriteList] = useState<BoardListType>();

  useEffect(() => {
    (async () => {
      try {
        if (selectButton === 'SAVE') {
          const res = await authInstance('/users/likes?page=1');
          setSaveList(res.data.data);
        } else if (selectButton === 'WRITE') {
          const res = await authInstance('/users/projects?page=1');
          setWriteList(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [selectButton]);

  return (
    <UserProjectsBox>
      <SelectBar
        setselectButton={setselectButton}
        selectButton={selectButton}
      />
      {selectButton === 'SAVE' ? (
        <BoardCardList boardCards={saveList?.content} />
      ) : (
        <BoardCardList boardCards={writeList?.content} />
      )}
    </UserProjectsBox>
  );
};

export default UserProjects;

const UserProjectsBox = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
`;
