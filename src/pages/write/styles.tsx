import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6rem 3rem;
  color: ${(props) => props.theme.text_color};
`;

export const Section = styled.section`
  margin-bottom: 10rem;
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
    padding: 1rem;
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

export const StyledQuill = styled(ReactQuill)`
  display: flex;
  flex-direction: column;
  font-family: 'NanumSquareAcR';
  height: 40rem;
  overflow-y: scroll;
`;

export const SectionContent2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  & > div {
    margin-bottom: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    width: 12rem;
    height: 4.5rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.main_brown};
    color: white;
    font-size: 1.8rem;
    outline: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
