import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as S from './styles';
import { PostType } from '@/types/post/post';
import backIcon from '@/assets/backIcon.png';
import noLikeIcon from '@/assets/noLike.png';
import enterIcon from '@/assets/enterIcon.svg';
import likeIcon from '@/assets/like.png';
import Image from 'next/image';
import dayjs from 'dayjs';
import Comment from '@/components/Comment';
import techStackData from '@/constants/techStackData';

const DUMMY_DATA: PostType = {
  id: 1,
  title: '성결대학교 전공종합설계 팀원 모집합니다.',
  project_name: '모아모아',
  content:
    '<h1>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세</h1>',
  deadline: new Date('June 17, 2023 03:24:00'),
  headcount: 6,
  job_position: 'ALL',
  user: {
    id: 1,
    nickname: '송지민',
    image_url:
      'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
  },
  tech_stack_list: [
    {
      id: 1,
    },
    {
      id: 3,
    },
  ],
  comment_list: [
    {
      id: 17,
      content: '저 신청하고 싶습니다',
      user: {
        id: 2,
        nickname: '강민아',
        image_url:
          'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
      },
    },
    {
      id: 24,
      content: '저요',
      user: {
        id: 1,
        nickname: '송지민',
        image_url:
          'https://image.idus.com/image/files/21e9ae9b65fd4fcf9d87c1ecb6c85a5d_720.jpg',
      },
    },
  ],
};

export default function Post() {
  const router = useRouter();
  const [likeState, setLikeState] = useState(false);
  const getTechImageURL = (id: number) => {
    const url = techStackData.find((data) => data.id === id)?.img;
    return url;
  };
  return (
    <S.PostWrapper>
      <S.BackIconWrapper>
        <Image src={backIcon} alt="backIcon" fill />
      </S.BackIconWrapper>
      <h1>{DUMMY_DATA.title}</h1>
      <S.DescriptionWrapper>
        <S.ProfileImage>
          <Image src={DUMMY_DATA.user.image_url} alt="profileImage" fill />
        </S.ProfileImage>
        <S.OptionBox>
          <S.OptionImage>
            <Image src="/noteIcon.png" alt="noteIcon" fill />
          </S.OptionImage>
          <S.OptionImage>
            {likeState ? (
              <Image
                src={likeIcon}
                alt="likeIcon"
                fill
                onClick={() => setLikeState(false)}
              />
            ) : (
              <Image
                src={noLikeIcon}
                alt="noLikeIcon"
                fill
                onClick={() => setLikeState(true)}
              />
            )}
          </S.OptionImage>
        </S.OptionBox>
        <S.DescriptionBox>
          <S.Description>
            <p>작성자</p>
            <text>{DUMMY_DATA.user.nickname}</text>
          </S.Description>
          <S.Description>
            <p>프로젝트명</p>
            <text>{DUMMY_DATA.project_name}</text>
          </S.Description>
          <S.Description>
            <p>생성일</p>
            <text>{dayjs(new Date()).format('YYYY.MM.DD')}</text>
          </S.Description>
          <S.Description>
            <p>모집 분야</p>
            <ul>
              {['프론트엔드', '백엔드'].map((position, idx) => (
                <S.OptionBadge key={idx}>{position}</S.OptionBadge>
              ))}
            </ul>
          </S.Description>
          <S.Description>
            <p>모집 인원</p>
            <text>{DUMMY_DATA.headcount}명</text>
          </S.Description>
          <S.Description>
            <p>모집 마감</p>
            <text>{dayjs(DUMMY_DATA.deadline).format('YYYY.MM.DD')}</text>
          </S.Description>
          <S.Description>
            <p>사용 기술</p>
            <ul>
              {DUMMY_DATA.tech_stack_list.map((tech) => {
                const url = getTechImageURL(tech.id);
                if (!url) return;
                return (
                  <S.TechIcon key={tech.id}>
                    <Image src={url} alt="techIcon" fill />
                  </S.TechIcon>
                );
              })}
            </ul>
          </S.Description>
        </S.DescriptionBox>
      </S.DescriptionWrapper>
      <h3>
        모집마감 {dayjs(DUMMY_DATA.deadline).diff(dayjs(new Date()), 'days')}일
        남았어요!
      </h3>
      <S.Introduce className="introduce">
        <h1>프로젝트 소개</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: DUMMY_DATA.content }} />
      </S.Introduce>
      <S.CommentWrapper>
        <h1>{DUMMY_DATA.comment_list.length}개의 댓글이 있습니다.</h1>
        <S.InputWrapper>
          <textarea placeholder="내용을 입력하세요." />
          <S.ClickButton>
            <Image src={enterIcon} alt="enter" fill />
          </S.ClickButton>
        </S.InputWrapper>
        <S.CommentList>
          {DUMMY_DATA.comment_list.map((comment) => (
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
            />
          ))}
        </S.CommentList>
      </S.CommentWrapper>
    </S.PostWrapper>
  );
}
