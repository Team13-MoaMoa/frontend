import styled from '@emotion/styled';

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  padding: 6rem 3rem;
  color: ${(props) => props.theme.text_color};
`;

export const Section = styled.section`
  &:first-of-type {
    margin-bottom: 17rem;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  padding-top: 0;
  border-bottom: 3px solid black;
  & > span {
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;
    text-align: center;
    background-color: ${(props) => props.theme.main_brown};
    color: white;
    border-radius: 50%;
    font-size: 3.5rem;
  }
  & > h1 {
    font-family: var(--Noto-B);
    font-size: 4rem;
    color: #3d4a5c;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 42rem;
  & > label {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  & > input,
  select {
    height: 4.6rem;
    border: 1px solid ${(props) => props.theme.main_brown};
    border-radius: 6px;
    padding: 0.5em;
    outline: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.text_color};
  }
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  margin-top: 5rem;
  row-gap: 2.5rem;
`;
