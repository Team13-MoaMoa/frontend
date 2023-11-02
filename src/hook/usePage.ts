import { useState } from 'react';

const INIT_PAGE_NUMBER = 1;

export default function usePage() {
  //TODO: page 번호 0부터인지 1 부터인지 물어보기 -> 1부터 시작  백에서 처리해준다 -1로
  const [page, setPage] = useState(INIT_PAGE_NUMBER);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  return { page, onChangePage, setPage };
}
