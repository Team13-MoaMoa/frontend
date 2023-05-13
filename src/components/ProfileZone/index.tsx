import styled from '@emotion/styled';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import CompleteProfile from '../CompleteProfile';
import { UserInfo } from '@/types/profile';

function ProfileZone() {
  const DummyDate: UserInfo = {
    name: '최연지',
    github: 'wisdomyeon',
    portfolio: '포트폴리오.pdf',
  };

  return (
    <Div>
      <Profile name={DummyDate.name} />
      <EditProfile />
      <CompleteProfile />
    </Div>
  );
}

export default ProfileZone;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;
