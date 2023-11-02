import { BoardType } from '@/types/board';
import styled from '@emotion/styled';
import Image from 'next/image';
import { RxPerson } from 'react-icons/rx';
import { TbMessageCircle2 } from 'react-icons/tb';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import getTechImageURL from '@/utils/getTechImageUrl';
import AvatarPng from '@/assets/avatar.png';
type LetterDivType = {
  blue?: boolean;
};

type IconImgDivType = {
  width?: string;
  height?: string;
};

type BoardCardItemProps = { card: BoardType };

function BoardCardItem({ card }: BoardCardItemProps) {
  const router = useRouter();

  const getHeadCount = (headCount: string) => {
    if (headCount === 'undecided') return '미정';
    else if (headCount === 'over 6') return '6명 이상';
    else return headCount;
  };

  return (
    <Div onClick={() => router.push(`/posts/${card.id}`)}>
      <>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <ProfileImage>
            <Image
              src={card.user.image_url || AvatarPng}
              alt="profileImage"
              fill
            />
          </ProfileImage>
          <NameDiv>{card.user.nickname}</NameDiv>
        </section>
        <section>
          <LetterDiv
            style={{
              fontSize: '2.6rem',
              lineHeight: '3rem',
              marginTop: '2rem',
            }}
          >
            {card.title}
          </LetterDiv>
        </section>
      </>
      <LetterDiv blue style={{ marginTop: 'auto', marginBottom: '2rem' }}>
        마감일 | {dayjs(card.deadline).format('YYYY.MM.DD')}
      </LetterDiv>
      <InfoDiv>
        <ScrollDiv>
          {card.tech_stack_list.map((tech) => (
            <IconImgDiv key={tech.id} width="5rem" height="5rem">
              <Image src={getTechImageURL(tech.id) || ''} alt="react" fill />
            </IconImgDiv>
          ))}
        </ScrollDiv>

        <InfoIconBox>
          <InfoIconItem style={{ marginRight: '1rem' }}>
            <RxPerson />
            <div>{replaceHeadcount(card.headcount)}</div>
          </InfoIconItem>
          <InfoIconItem style={{ marginLeft: '1rem' }}>
            <TbMessageCircle2 />
            <div>{card.comment_count}</div>
          </InfoIconItem>
        </InfoIconBox>
      </InfoDiv>
    </Div>
  );
}

const replaceHeadcount = (headcount: string) => {
  if (headcount === '미정') return '미정';
  else if (headcount === 'over 6') return '6+';
  return headcount;
};

const deleteImgTag = (content: string) => {
  return content.replace(/<img[^>]*>/g, '');
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 38rem;
  padding: 2rem;
  border: 2px solid;
  border-radius: 2rem;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    transform: translateY(-10px);
  }
`;

const NameDiv = styled.div`
  color: ${(props) => props.theme.sub_bluegray};
  white-space: normal;
`;

const LetterDiv = styled.div<LetterDivType>`
  color: ${(props) => (props.blue ? props.theme.sub_bluegray : 'black')};
  // TODO: 글자가 2줄 이상이면 ... 처리 작동 안함
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const IconImgDiv = styled.div<IconImgDivType>`
  position: relative;
  /* margin-right: 1rem; */
  border: 1px solid;
  border-radius: 100%;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;

const ScrollDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid;
  gap: 1rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ProfileImage = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding-top: 1rem;
`;

const InfoIconItem = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

export default BoardCardItem;
