import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
import { postNoteAPI } from '@/api/note';
import { authInstance } from '@/api/axiosCustom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Post() {
  const loggedInUserId = useSelector((state: RootState) => state.user.user.id);

  const router = useRouter();
  const { mutate } = useSWRConfig();

  const { data: postData, isLoading } = useSWR(
    `${router.query.postId}`,
    getPostAPI,
  );

  const [likeState, setLikeState] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [clickedUserId, setClickedUserId] = useState(postData?.user.id || 0);
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

  const onPostNote = async (userId: number, content: string) => {
    if (!(content.length > 0)) return;
    const response = await postNoteAPI(userId, content);
    if (response) {
      alert('쪽지를 보냈습니다.');
    } else {
      alert('쪽지를 보내는데 실패했습니다.');
    }
  };

  const getHeadCount = (headCount: string) => {
    if (headCount === 'undecided') return '인원 미정';
    if (headCount === 'over 6') return '6명 이상';
    else return `${headCount}명`;
  };

  useEffect(() => {
    {
      likeState
        ? (async () => {
            await authInstance.post(`/users/likes/${router.query.postId}`);
          })()
        : null;
    }
  }, [likeState, router.query.postId]);
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
          {loggedInUserId + '' !== postData.user.id + '' && (
            <OptionImage>
              <Image
                src="/noteIcon.png"
                alt="noteIcon"
                fill
                onClick={() => {
                  setClickedUserId(postData.user.id);
                  setIsNoteOpen(true);
                }}
              />
            </OptionImage>
          )}
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
          : `모집마감
          ${dayjs(postData.deadline || '').diff(dayjs(new Date()), 'days')}일
          남았어요!`}
      </h3>
      <Introduce className="introduce">
        <h1>프로젝트 소개</h1>
        <hr />
        <ContentWrapper
          dangerouslySetInnerHTML={{ __html: postData.content || '' }}
        />
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
              createdAt={comment.created_at}
              user={comment.user}
              onClickNoteModal={onClickNoteModal}
              setClickedUserId={setClickedUserId}
            />
          ))}
        </CommentList>
      </CommentWrapper>
      {isNoteOpen && (
        <SendNote
          userId={clickedUserId}
          onClickNoteModal={onClickNoteModal}
          onPostNote={onPostNote}
        />
      )}
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
    line-height: 5rem;
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
  line-height: 3rem;
`;

const DescriptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  align-items: center;
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
    flex-wrap: wrap;
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

const ContentWrapper = styled.div`
  & h1 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
  & h2 {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  & h5 {
    font-size: 1rem;
    line-height: 2rem;
  }
  & p {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
  & blockquote {
    padding: 0.5rem 1rem !important;
    line-height: 2rem;
    font-size: 1.3rem;
    color: #666;
    background: #fff;
    border-left: 0.5rem solid #045345 !important;
    margin-bottom: 1rem !important;
    &::before,
    &::after {
      color: rgba(#045345, 0.6);
    }
  }
  & strong {
    font-weight: bold;
  }
  & ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  & ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  & li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  & img {
    max-width: 100%;
    margin: 0.5rem 0;
  }
`;
