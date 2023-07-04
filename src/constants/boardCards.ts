import { BoardDataType, BoardListDataType } from '@/types/board';

const boardCardData: BoardDataType[] = [
  {
    id: 1,
    title: `[ React ] 프로젝트 급구!`,
    project_name: 'MoaMoa',
    content:
      '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
    deadline: new Date('2023-06-10T16:23:53'),
    headcount: 3,
    job_position: ['백엔드', '프론트엔드'],
    user: {
      id: 1,
      nickname: '송지민',
      image_url:
        'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
    },
    tech_stack_list: [{ id: 1 }, { id: 2 }],
    comment_count: 0,
  },
  {
    id: 2,
    title: `[ React ] 프로젝트 급구!`,
    project_name: 'MoaMoa',
    content:
      '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
    deadline: new Date('2023-06-10T00:00:00'),
    headcount: 3,
    job_position: ['백엔드', '프론트엔드'],
    user: {
      id: 1,
      nickname: '송지민',
      image_url:
        'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
    },
    tech_stack_list: [{ id: 1 }, { id: 2 }],
    comment_count: 0,
  },
  {
    id: 3,
    title: `[ React ] 프로젝트 급구!`,
    project_name: 'MoaMoa',
    content:
      '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
    deadline: new Date('2023-06-10T00:00:00'),
    headcount: 3,
    job_position: ['백엔드', '프론트엔드'],
    user: {
      id: 1,
      nickname: '송지민',
      image_url:
        'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
    },
    tech_stack_list: [{ id: 1 }, { id: 2 }],
    comment_count: 0,
  },
  {
    id: 4,
    title: `[ React ] 프로젝트 급구!`,
    project_name: 'MoaMoa',
    content:
      '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
    deadline: new Date('2023-06-10T00:00:00'),
    headcount: 3,
    job_position: ['백엔드', '프론트엔드'],
    user: {
      id: 1,
      nickname: '송지민',
      image_url:
        'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
    },
    tech_stack_list: [{ id: 1 }, { id: 2 }],
    comment_count: 0,
  },
  {
    id: 5,
    title: `[ React ] 프로젝트 급구!`,
    project_name: 'MoaMoa',
    content:
      '저희는 리액트 프로젝트를 진행하려고 합니다😄 Frontend에 능숙하신 분을 구하고 있습니다! 프로젝트에 대한 자세한 내용은 아래와 같습니다.아웃백 가고싶다. 스테이크 먹고싶다. 파스타 먹고싶다. 녹차라떼먹고싶다.',
    deadline: new Date('2023-06-10T00:00:00'),
    headcount: 3,
    job_position: ['백엔드', '프론트엔드'],
    user: {
      id: 1,
      nickname: '송지민',
      image_url:
        'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
    },
    tech_stack_list: [{ id: 1 }, { id: 2 }],
    comment_count: 0,
  },
];

export const boardCardsList: BoardListDataType = {
  content: boardCardData,
  pageable: 'INSTANCE',
  last: true,
  totalPages: 1,
  totalElements: 3,
  first: true,
  size: 3,
  number: 0,
  sort: {
    empty: true,
    unsorted: true,
    sorted: false,
  },
  numberOfElements: 3,
  empty: false,
};
