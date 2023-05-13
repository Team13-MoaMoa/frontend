import styled from '@emotion/styled';

function Profile() {
  return (
    <ProfileBackground>
      <NameDiv>
        <p>최연지 님</p>
      </NameDiv>
      <ImgDiv />
      <DelDiv>
        <p>회원탈퇴</p>
      </DelDiv>
    </ProfileBackground>
  );
}

export default Profile;

const ProfileBackground = styled.div`
  height: 37.5rem;
  width: 37.5rem;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.background_gray};
  border: 2px solid ${(props) => props.theme.horizon_gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameDiv = styled.div`
  height: 4.4rem;
  width: 100%;
  line-height: 4.4rem;
  text-align: center;
  & > p {
    color: black;
    font-size: 3rem;
    font-weight: bolder;
  }
`;

const ImgDiv = styled.div`
  height: 16rem;
  width: 16rem;
  margin: 2.5rem 0;
  border-radius: 50%;
  background-color: pink;
`;

const DelDiv = styled.div`
  height: 4.4rem;
  width: 100%;
  line-height: 4.4rem;
  text-align: center;
  & > p {
    color: #b74545;
  }
`;
