import styled from '@emotion/styled';

function Button() {
  return <ButtonDiv>수정</ButtonDiv>;
}

export default Button;

const ButtonDiv = styled.div`
  height: 4.5rem;
  width: 12.3rem;
  color: white;
  text-align: center;
  line-height: 4.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.main_brown};
`;
