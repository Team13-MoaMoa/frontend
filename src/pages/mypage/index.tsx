import styled from '@emotion/styled';

import ProfileZone from '@/components/ProfileZone';

import UserProjects from '@/components/UserProjects';

function MyPage() {
  return (
    <Div>
      <InfoBackgroundSection>
        <BackgroundDiv />
        <InfoUserDiv>
          <ProfileZone />
        </InfoUserDiv>
      </InfoBackgroundSection>
      <UserProjects />
    </Div>
  );
}

export default MyPage;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
  height: 100vh;
  margin: 0 0 15rem 0;
`;

const InfoBackgroundSection = styled.section`
  width: 100vw;
  height: 65rem;
`;

const BackgroundDiv = styled.div`
  height: 31rem;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.main_brown};
`;

const InfoUserDiv = styled.div`
  height: 50rem;
  width: 119rem;
  border-radius: 4rem;
  position: absolute;
  top: 13%;
  left: calc(50% - 59.5rem);
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  & > div {
    height: 37.5rem;
    width: 100%;
    padding-top: 5rem;
    display: flex;
    justify-content: space-evenly;
  }
`;
