import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6rem 3rem;

  & > h1 {
    font-size: 4.275rem;
    font-weight: bold;
    margin: 3rem 0;
  }
  & > h3 {
    align-self: center;
    margin: 5.5rem 0;
    font-family: var(--Noto-B);
    font-size: 2.4rem;
    color: ${(props) => props.theme.main_brown};
  }
`;

export const BackIconWrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 4.5rem;
  background-color: #f9f8f7;
  border-radius: 1.8rem;
  font-size: 2.2rem;
`;

export const DescriptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  row-gap: 2.5rem;
`;

export const Description = styled.div`
  display: flex;
  font-family: var(--Noto-B);
  & > p {
    display: flex;
    align-items: center;
    min-width: 15rem;
    color: ${(props) => props.theme.main_brown};
  }
  & > text {
    color: #595959;
  }
  & > ul {
    display: flex;
    gap: 0.5rem;
  }
`;

export const OptionBadge = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  border: 0.05rem solid ${(props) => props.theme.main_brown};
  border-radius: 5px;
  padding: 0.2rem 0.3rem;
  color: ${(props) => props.theme.main_brown};
  background: #f9fafb;
  font-size: 1.5rem;
  outline: none;
  ${(props) => props.theme.mq.mobile} {
    zoom: 0.5;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  position: absolute;
  top: -2.5rem;
  left: 5rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
`;
export const OptionBox = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 2.5rem;
  margin-bottom: 2rem;
`;

export const OptionImage = styled.div`
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const TechIcon = styled.div`
  position: relative;
  width: 3.3rem;
  height: 3.3rem;
  border: 1px solid ${(props) => props.theme.main_brown};
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const Introduce = styled.div`
  margin-bottom: 20rem;
  & > h1 {
    font-family: var(--Noto-B);
    font-size: 3.2rem;
  }
  & > hr {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.horizon_gray};
    border: none;
    border-radius: 3px;
    outline: none;
    margin: 1.5rem 0;
  }
  & > div {
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;

export const CommentWrapper = styled.div`
  & > h1 {
    font-family: var(--Noto-B);
    font-size: 3.2rem;
    margin-bottom: 1.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 7rem;
  padding: 1rem 2rem;
  border: 0.25rem solid ${(props) => props.theme.main_brown};
  border-radius: 2.2rem;
  & > textarea {
    flex-grow: 1;
    width: 100%;
    outline: none;
    border: none;
    padding-top: 2rem;
    font-size: 2rem;
    resize: none;
    background: transparent;
    white-space: pre-wrap;
    &:focus {
      outline: none;
    }
  }
`;

export const ClickButton = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
`;
