import styled from '@emotion/styled';

export default function Home() {
  return <Div>hello</Div>;
}

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;