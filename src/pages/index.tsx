import Login from '@/components/login';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Div>
      <Login />
    </Div>
  );
}

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;
