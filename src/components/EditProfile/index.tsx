import styled from '@emotion/styled';

function EditProfile() {
  return (
    <InfoDiv>
      <div>닉네임</div>
      <InfoInput />
      <div>깃허브 프로필</div>
      <InfoInput />
      <div>포트폴리오 링크</div>
      <InfoInput />
      <EditButton>
        <button>확인</button>
      </EditButton>
    </InfoDiv>
  );
}

export default EditProfile;

const InfoDiv = styled.div`
  height: 37.5rem;
  width: 50%;
  padding: 1.8rem 9rem;
  border-radius: 4rem;
  & > div {
    color: black;
    margin: 1.8rem 0 1.2rem 0;
  }
`;

const InfoInput = styled.input`
  height: 4.2rem;
  width: 42rem;
  flex-grow: 1;
  border: 1.5px solid ${(props) => props.theme.main_brown};
  border-radius: 6px;
  background-color: #ffffff;
`;

const EditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    height: 4.5rem;
    width: 12.3rem;
    margin-top: 0.8rem;
    justify-content: flex-end;
    text-align: center;
    border-radius: 6px;
    border: 2px solid #957f6a;
    color: white;
    background-color: ${(props) => props.theme.main_brown};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
