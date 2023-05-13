import styled from '@emotion/styled';

function CompleteProfile() {
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
          <p>포토폴리오</p>
        </TitleDiv>
        <DetailDiv>
          <p>포토폴리오.pdf</p>
        </DetailDiv>
      </CompleteProfileDiv>
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
