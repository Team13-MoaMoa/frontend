import React, { useState } from 'react';
import styled from '@emotion/styled';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import CompleteProfile from '../CompleteProfile';
import { UserInfo } from '@/types/profile';

function ProfileZone() {
  const DummyData: UserInfo = {
    name: '최연지',
    github: 'wisdomyeon',
    portfolio: '포트폴리오.pdf',
  };
  const [edit, setEdit] = useState<boolean>(false);
  const onClickButton = () => {
    setEdit((per) => !per);
  };

  return (
    <Div>
      <Profile name={DummyData.name} />
      {edit ? (
        <EditProfile onClickButton={onClickButton} />
      ) : (
        <CompleteProfile onClickButton={onClickButton} />
      )}
    </Div>
  );
}

export default ProfileZone;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;
