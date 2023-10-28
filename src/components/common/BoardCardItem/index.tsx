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

  return (
    <Div onClick={() => router.push('/posts/1')}>
      <>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <ProfileImage>
            {/*TODO: 현재 DB에 image_url 없으면 null로 되어있음
                src에 null 들어가면 에러남
                프로필 설정 하는 페이지 담당하시는 분이 처리 어떻게 할건지 물어보기
                현재는 avatar.png 띄우게 처리함
           */}
            <Image
              src={card.user.image_url || AvatarPng}
              alt="profileImage"
              fill
            />
          </ProfileImage>
          <NameDiv>{card.user.nickname}</NameDiv>
        </section>
        <section>
          <LetterDiv style={{ fontSize: '2.6rem' }}>{card.title}</LetterDiv>
          {/* <LetterDiv>{card.content.replace(/<[^>]*>/g, '')}</LetterDiv> */}
        </section>
      </>
      <LetterDiv blue>
        마감일 {dayjs(card.deadline).format('YYYY.MM.DD')}
      </LetterDiv>
      <InfoDiv>
        <div
          style={{
            display: 'flex',
            paddingBottom: '2rem',
            borderBottom: '2px solid',
          }}
        >
          {card.tech_stack_list.map((tech) => (
            <IconImgDiv key={tech.id} width="5rem" height="5rem">
              <Image src={getTechImageURL(tech.id) || ''} alt="react" fill />
            </IconImgDiv>
          ))}
        </div>
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
  justify-content: space-between;
  width: 100%;
  height: 35rem;
  padding: 2rem;
  border: 1px solid;
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
  margin-right: 1rem;
  border: 1px solid;
  border-radius: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
