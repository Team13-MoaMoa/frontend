import styled from '@emotion/styled';

type CompleteProfileProps = {
  onClickButton: () => void;
};

function CompleteProfile({ onClickButton }: CompleteProfileProps) {
  return (
    <InfoDiv>
      <CompleteProfileDiv>
        <TitleDiv>
          <p>깃허브</p>
        </TitleDiv>
        <DetailDiv>
          <p>wisdomyeon</p>
        </DetailDiv>
      </CompleteProfileDiv>
      <CompleteProfileDiv>
        <TitleDiv>
          <p>포트폴리오</p>
        </TitleDiv>
        <DetailDiv>
          <p>포트폴리오.pdf</p>
        </DetailDiv>
      </CompleteProfileDiv>
      <EditButton>
        <button onClick={onClickButton}>수정</button>
      </EditButton>
    </InfoDiv>
  );
}

export default CompleteProfile;

const InfoDiv = styled.div`
  height: 37.5rem;
  width: 50%;
  padding: 1.8rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4rem;
`;

const CompleteProfileDiv = styled.div`
  height: 7rem;
  width: 42rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
`;

const TitleDiv = styled.div`
  height: 3.2rem;
  width: 11.2rem;
  text-align: center;
  line-height: 3.2rem;
  border-radius: 6px;
  background-color: #f0f3f9;
  & > p {
    color: #5e718d;
  }
`;

const DetailDiv = styled.div`
  & > p {
    margin-left: 7rem;
  }
`;

const EditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    height: 4.5rem;
    width: 12.3rem;
    justify-content: flex-end;
    text-align: center;
    border-radius: 6px;
    border: 2px solid #957f6a;
    color: white;
    background-color: ${(props) => props.theme.main_brown};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
