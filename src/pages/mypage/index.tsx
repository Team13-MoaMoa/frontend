import styled from '@emotion/styled';

import ProfileZone from '@/components/ProfileZone';
import { useEffect, useState } from 'react';
import { authInstance } from '@/api/axiosCustom';

function MyPage() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await authInstance('/users/projects?page=1');
      setData(res.data.data);
      console.log(res.data);
    })();
  }, []);
  return (
    <Div>
      <InfoBackgroundSection>
        <BackgroundDiv />
        <InfoUserDiv>
          <ProfileZone />
        </InfoUserDiv>
      </InfoBackgroundSection>
      hi
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
  height: 98rem;
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
