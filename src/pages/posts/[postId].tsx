import { useRouter } from 'next/router';
import React, { useState } from 'react';
import backIcon from '@/assets/backIcon.png';
import noLikeIcon from '@/assets/noLike.png';
import enterIcon from '@/assets/enterIcon.svg';
import likeIcon from '@/assets/like.png';
import Image from 'next/image';
import dayjs from 'dayjs';
import Comment from '@/components/Comment';
import getTechImageURL from '@/utils/getTechImageUrl';
import SendNote from '@/components/SendNote';
import styled from '@emotion/styled';
import { getPostAPI, postCommentAPI } from '@/api/post';
import useSWR, { useSWRConfig } from 'swr';
import Avatar from '@/assets/avatar.png';
import Loading from '@/components/Loading';
import useInput from '@/hook/useInput';

export default function Post() {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data: postData, isLoading } = useSWR(
    `${router.query.postId}`,
    getPostAPI,
  );

  const [likeState, setLikeState] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [comment, handleComment, setComment] = useInput();

  const onClickNoteModal = () => {
    setIsNoteOpen((prev) => !prev);
  };

  const onPostComment = async () => {
    if (!postData) return;
    const response = await postCommentAPI((postData?.id).toString(), comment);
    if (response) {
      mutate(`${router.query.postId}`);
      setComment('');
    }
  };

  const getHeadCount = (headCount: string) => {
    if (headCount === 'undecided') return '인원 미정';
    if (headCount === 'over 6') return '6명 이상';
    else return `${headCount}명`;
  };

  if (!postData) {
    return <div>존재하지 않는 게시글입니다.</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PostWrapper>
      <BackIconWrapper onClick={() => router.push('/')}>
        <Image src={backIcon} alt="backIcon" fill />
      </BackIconWrapper>
      <h1>{postData.title || ''}</h1>
      <DescriptionWrapper>
        <ProfileImage>
          <Image
            src={postData.user.image_url || Avatar}
            alt="profileImage"
            fill
          />
        </ProfileImage>
        <OptionBox>
          <OptionImage>
            <Image
              src="/noteIcon.png"
              alt="noteIcon"
              fill
              onClick={() => setIsNoteOpen(true)}
            />
          </OptionImage>
          <OptionImage>
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
          </OptionImage>
        </OptionBox>
        <DescriptionBox>
          <Description>
            <p>작성자</p>
            <text>{postData.user.nickname || ''}</text>
          </Description>
          <Description>
            <p>프로젝트명</p>
            <text>{postData.project_name || ''}</text>
          </Description>
          <Description>
            <p>생성일</p>
            <text>{dayjs(postData.created_at || '').format('YYYY.MM.DD')}</text>
          </Description>
          <Description>
            <p>모집 분야</p>
            <ul>
              {(postData.job_tag || []).map((position, idx) => (
                <OptionBadge key={idx}>{position}</OptionBadge>
              ))}
            </ul>
          </Description>
          <Description>
            <p>모집 인원</p>
            <text>{getHeadCount(postData.headcount || '0')}</text>
          </Description>
          <Description>
            <p>모집 마감</p>
            <text>{dayjs(postData.deadline || '').format('YYYY.MM.DD')}</text>
          </Description>
          <Description>
            <p>사용 기술</p>
            <ul>
              {(postData.tech_stack_list || []).map((tech) => (
                <TechIcon key={tech.id}>
                  <Image
                    src={getTechImageURL(tech.id) || ''}
                    alt="techIcon"
                    fill
                  />
                </TechIcon>
              ))}
            </ul>
          </Description>
        </DescriptionBox>
      </DescriptionWrapper>
      <h3>
        {dayjs(postData.deadline || '').diff(dayjs(new Date()), 'days') < 0
          ? `모집마감일이 ${Math.abs(
              dayjs(postData.deadline || '').diff(dayjs(new Date()), 'days'),
            )}일 지났어요!`
          : `모집마감{' '}
          ${dayjs(postData.deadline || '').diff(dayjs(new Date()), 'days')}일
          남았어요!`}
      </h3>
      <Introduce className="introduce">
        <h1>프로젝트 소개</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.content || '' }} />
      </Introduce>
      <CommentWrapper>
        <h1>{postData.comment_list.length || '0'}개의 댓글이 있습니다.</h1>
        <InputWrapper>
          <textarea
            placeholder="내용을 입력하세요."
            value={comment}
            onChange={handleComment}
          />
          <ClickButton onClick={onPostComment}>
            <Image src={enterIcon} alt="enter" fill />
          </ClickButton>
        </InputWrapper>
        <CommentList>
          {(postData.comment_list || []).map((comment) => (
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
              onClickNoteModal={onClickNoteModal}
            />
          ))}
        </CommentList>
      </CommentWrapper>
      {isNoteOpen && <SendNote onClickNoteModal={onClickNoteModal} />}
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6rem 3rem;

  & > h1 {
    font-size: 4.275rem;
    font-weight: bold;
    margin: 3rem 0;
  }
  & > h3 {
    align-self: center;
    margin: 5.5rem 0;
    font-family: var(--Noto-B);
    font-size: 2.4rem;
    color: ${(props) => props.theme.main_brown};
  }
`;

const BackIconWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 4.5rem;
  background-color: #f9f8f7;
  border-radius: 1.8rem;
  font-size: 2.2rem;
`;

const DescriptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  row-gap: 2.5rem;
`;

const Description = styled.div`
  display: flex;
  font-family: var(--Noto-B);
  & > p {
    display: flex;
    align-items: center;
    min-width: 15rem;
    color: ${(props) => props.theme.main_brown};
  }
  & > text {
    color: #595959;
  }
  & > ul {
    display: flex;
    gap: 0.5rem;
  }
`;

const OptionBadge = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  border: 0.05rem solid ${(props) => props.theme.main_brown};
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  color: ${(props) => props.theme.main_brown};
  background: #f9fafb;
  font-size: 1.5rem;
  outline: none;
  ${(props) => props.theme.mq.mobile} {
    zoom: 0.5;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  position: absolute;
  top: -2.5rem;
  left: 5rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
`;
const OptionBox = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 2.5rem;
  margin-bottom: 2rem;
`;

const OptionImage = styled.div`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TechIcon = styled.div`
  position: relative;
  width: 3.3rem;
  height: 3.3rem;
  border: 1px solid ${(props) => props.theme.main_brown};
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const Introduce = styled.div`
  margin-bottom: 20rem;
  & > h1 {
    font-family: var(--Noto-B);
    font-size: 3.2rem;
  }
  & > hr {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.horizon_gray};
    border: none;
    border-radius: 3px;
    outline: none;
    margin: 1.5rem 0;
  }
  & > div {
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;

const CommentWrapper = styled.div`
  & > h1 {
    font-family: var(--Noto-B);
    font-size: 3.2rem;
    margin-bottom: 1.5rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 7rem;
  padding: 1rem 2rem;
  border: 0.25rem solid ${(props) => props.theme.main_brown};
  border-radius: 2.2rem;
  & > textarea {
    flex-grow: 1;
    width: 100%;
    outline: none;
    border: none;
    padding-top: 2rem;
    font-size: 2rem;
    resize: none;
    background: transparent;
    white-space: pre-wrap;
    &:focus {
      outline: none;
    }
  }
`;

const ClickButton = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
`;
