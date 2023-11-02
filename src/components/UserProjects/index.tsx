/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import BoardCardList from '../common/BoardCardList';
import { useEffect, useState } from 'react';
import { authInstance } from '@/api/axiosCustom';
import { BoardListType } from '@/types/board';
import styled from '@emotion/styled';
import SelectBar from '../SelectBar';
import { select } from '@/types/mypage';
import usePage from '@/hook/usePage';
import Pagination from '../Main/Pagination';

const UserProjects = () => {
  const [selectButton, setselectButton] = useState<select>('SAVE');
  const [saveList, setSaveList] = useState<BoardListType>();
  const [writeList, setWriteList] = useState<BoardListType>();

  const { page, onChangePage } = usePage();

  useEffect(() => {
    (async () => {
      onChangePage(1);
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

  useEffect(() => {
    (async () => {
      try {
        if (selectButton === 'SAVE') {
          const res = await authInstance(`/users/likes?page=${page}`);
          setSaveList(res.data.data);
        } else if (selectButton === 'WRITE') {
          const res = await authInstance(`/users/projects?page=${page}`);
          setWriteList(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [page, selectButton]);

  return (
    <UserProjectsBox>
      <SelectBar
        setselectButton={setselectButton}
        selectButton={selectButton}
      />
      <BoardCardList
        boardCards={
          selectButton === 'SAVE' ? saveList?.content : writeList?.content
        }
      />
      <Pagination
        totalPages={
          selectButton === 'SAVE' ? saveList?.totalPages : writeList?.totalPages
        }
        onChangePage={onChangePage}
      />
    </UserProjectsBox>
  );
};

export default UserProjects;

const UserProjectsBox = styled.div`
  width: 119rem;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 7.5rem;
`;
