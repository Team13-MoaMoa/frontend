import styled from '@emotion/styled';
import Button from '../Button';

function ProfileInput() {
  return (
    <InfoDiv>
      <div>닉네임</div>
      <InfoInput />
    </InfoDiv>
  );
}

export default ProfileInput;

const InfoDiv = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  & > div {
    color: black;
    margin-bottom: 1rem;
  }
`;

const InfoInput = styled.input`
  width: 42rem;
  flex-grow: 1;
  border: 1.5px solid ${(props) => props.theme.main_brown};
  border-radius: 6px;
  background-color: #ffffff;
`;
