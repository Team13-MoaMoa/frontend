import React, { useState } from 'react';
import styled from '@emotion/styled';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import CompleteProfile from '../CompleteProfile';
import { UserInfo } from '@/types/profile';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

function ProfileZone() {
  const { user } = useSelector((state: RootState) => state.user);

  const [edit, setEdit] = useState<boolean>(false);
  const onClickButton = () => {
    setEdit((per) => !per);
  };

  return (
    <Div>
      <Profile user={user} />
      {edit ? (
        <EditProfile onClickButton={onClickButton} user={user} />
      ) : (
        <CompleteProfile onClickButton={onClickButton} user={user} />
      )}
    </Div>
  );
}

export default ProfileZone;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;
