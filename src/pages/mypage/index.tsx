import styled from '@emotion/styled';
import Profile from '@/components/Profile';
import ProfileInput from '@/components/ProfileInput';

function MyPage() {
  return (
    <Div>
      <BackgroundDiv></BackgroundDiv>
      <InfoBackgroundDiv>
        <Profile />
        <ProfileInput />
      </InfoBackgroundDiv>
    </Div>
  );
}

export default MyPage;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
  height: 100vh;
  margin: 0 0 12rem 0;
`;

const BackgroundDiv = styled.div`
  height: 31rem;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.main_brown};
`;

const InfoBackgroundDiv = styled.div`
  height: 98rem;
  width: 119rem;
  border-radius: 4rem;
  position: absolute;
  top: 13%;
  left: 18%;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
`;
