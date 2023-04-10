import Login from '@/components/login';
import Login2 from '@/components/login/login2';
import Login3 from '@/components/login/login3';
import Login4 from '@/components/login/login4';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Div>
      <Login4 />
    </Div>
  );
}

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;
