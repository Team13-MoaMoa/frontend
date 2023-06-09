import { BoardDataType } from '@/types/board';
import styled from '@emotion/styled';
import Image from 'next/image';
import { RxPerson } from 'react-icons/rx';
import { TbMessageCircle2 } from 'react-icons/tb';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import getTechImageURL from '@/utils/getTechImageUrl';
type LetterDivType = {
  blue?: boolean;
};

type IconImgDivType = {
  width?: string;
  heigth?: string;
};

type BoardCardItemProps = { card: BoardDataType };

function BoardCardItem({ card }: BoardCardItemProps) {
  const router = useRouter();

  return (
    <Div onClick={() => router.push('/posts/1')}>
      <>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            gap: '1rem',
          }}
        >
          <ProfileImage>
            <Image src={card.user.image_url} alt="profileImage" fill />
          </ProfileImage>
          <NameDiv>{card.user.nickname}</NameDiv>
        </section>
        <section>
          <LetterDiv style={{ fontSize: '2.6rem' }}>{card.title}</LetterDiv>
          <LetterDiv>{card.content}</LetterDiv>
        </section>
      </>

      <InfoDiv>
        <LetterDiv blue>
          마감일 {dayjs(card.deadline).format('YYYY.MM.DD')}
        </LetterDiv>
        <div
          style={{
            display: 'flex',
            paddingBottom: '2rem',
            borderBottom: '2px solid',
          }}
        >
          {card.tech_stack_list.map((tech) => (
            <IconImgDiv key={tech.id} width="5rem" heigth="5rem">
              <Image src={getTechImageURL(tech.id) || ''} alt="react" fill />
            </IconImgDiv>
          ))}
        </div>
        <InfoIconBox>
          <InfoIconItem style={{ marginRight: '1rem' }}>
            <RxPerson />
            <div>2</div>
          </InfoIconItem>
          <InfoIconItem style={{ marginLeft: '1rem' }}>
            <TbMessageCircle2 />
            <div>9</div>
          </InfoIconItem>
        </InfoIconBox>
      </InfoDiv>
    </Div>
  );
}

const Div = styled.div`
  /* ${(props) => props.theme.mq.mobile} {
    zoom: 0.8;
    width: calc(37.8rem * 1.2);
    height: calc(37.8rem * 1.2);
  } */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40rem;
  padding: 2rem;
  border: 1px solid;
  border-radius: 2rem;
  margin-bottom: 3rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NameDiv = styled.div`
  color: ${(props) => props.theme.sub_bluegray};
`;

const LetterDiv = styled.div<LetterDivType>`
  color: ${(props) => (props.blue ? props.theme.sub_bluegray : 'black')};
  margin-bottom: 2rem;
  line-height: 3rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const IconImgDiv = styled.div<IconImgDivType>`
  position: relative;
  margin-right: 1rem;
  border: 1px solid;
  border-radius: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
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
  width: 4rem;
  justify-content: space-between;
`;

export default BoardCardItem;
