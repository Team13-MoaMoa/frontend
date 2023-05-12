import styled from '@emotion/styled';

function CompleteProfile() {
  return (
    <CompleteProfileDiv>
      <InfoDiv>
        <p>깃허브</p>
      </InfoDiv>
      <DetailDiv>
        <p>wisdomyeon</p>
      </DetailDiv>
    </CompleteProfileDiv>
  );
}

export default CompleteProfile;

const CompleteProfileDiv = styled.div`
  height: 7rem;
  width: 42rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
`;

const InfoDiv = styled.div`
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

const DetailDiv = styled.div``;
