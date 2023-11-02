import React, { useRef, useState } from 'react';
import Select from '@/components/Select';
import { SelectOption } from '@/types/select';
import CalendarInput from '@/components/Calendar';
import 'react-quill/dist/quill.snow.css';
import useQuillModules from '@/hook/useQuillModules';
import ReactQuill from 'react-quill';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import useInput from '@/hook/useInput';
import dayjs from 'dayjs';
import { PostSubmit } from '@/types/post/post';
import { onPostAPI } from '@/api/post';
import { useRouter } from 'next/router';
const QuillNoSSRWrapper = dynamic(
  () => import('@/utils/Quill/QuillNoSSRWrapper'),
  { ssr: false },
);

const MemberOptions: SelectOption[] = [
  { label: '인원 미정', value: 'undecided' },
  { label: '2명', value: '2' },
  { label: '3명', value: '3' },
  { label: '4명', value: '4' },
  { label: '5명', value: '5' },
  { label: '6명 이상', value: 'over 6' },
];
const StackOptions: SelectOption[] = [
  { label: 'React', value: 'React' },
  { label: 'Html', value: 'Html' },
  { label: 'NodeJs', value: 'NodeJs' },
  { label: 'Figma', value: 'Figma' },
  { label: 'Docker', value: 'Docker' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Python', value: 'Python' },
  { label: 'Git', value: 'Git' },
  { label: 'Gatsby', value: 'Gatsby' },
];
const PartOptions: SelectOption[] = [
  { label: '프론트엔드', value: '프론트엔드' },
  { label: '백엔드', value: '백엔드' },
  { label: '디자이너', value: '디자이너' },
  { label: '기획', value: '기획' },
  { label: '마케팅', value: '마케팅' },
  { label: 'AI', value: 'AI' },
];

export default function Write() {
  const router = useRouter();

  const [title, handleTitle] = useInput();
  const [projectName, handleProjectName] = useInput();
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState<Date | null | undefined>();
  const [member, setMember] = useState<SelectOption | undefined>(
    MemberOptions[0],
  );
  const [stack, setStack] = useState<SelectOption[]>([]);
  const [part, setPart] = useState<SelectOption[]>([]);

  const QuillRef = useRef<ReactQuill>(null);
  const modules = useQuillModules(QuillRef);

  const onChange = (content: string) => {
    setContent(content);
  };

  const onSubmit = async () => {
    if (
      !title ||
      !projectName ||
      !content ||
      !deadline ||
      !member ||
      !part ||
      !stack
    ) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    const jobArr = part.map((option) => option.value);
    const job_tag = jobArr.some((i) =>
      ['디자이너', '기획', 'AI', '마케팅'].includes(i),
    )
      ? [...jobArr, '기타']
      : jobArr;
    const form: PostSubmit = {
      title,
      project_name: projectName,
      content,
      deadline: dayjs(deadline).format('YYYY-MM-DD hh:mm:ss'),
      headcount: member?.value,
      job_tag,
      tech_stack_arr: stack.map((item) => item.value),
    };
    const response = await onPostAPI(form);
    if (response.id) {
      alert('게시글이 작성되었습니다.');
      router.push(`/posts/${response.id}`);
    } else {
      alert('게시글 작성에 실패했습니다.');
    }
  };

  return (
    <WriteWrapper>
      <Section>
        <SectionTitle>
          <span>1</span>
          <h1>프로젝트 기본 정보를 입력해주세요.</h1>
        </SectionTitle>
        <SectionContent>
          <InputWrapper>
            <label htmlFor="name">프로젝트 이름</label>
            <input
              id="name"
              type="text"
              value={projectName}
              onChange={handleProjectName}
              placeholder="프로젝트 이름을 입력하세요."
            />
          </InputWrapper>
          <InputWrapper>
            <label>모집 인원</label>
            <Select
              options={MemberOptions}
              value={member}
              onChange={(o) => setMember(o)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>기술 스택</label>
            <Select
              multiple
              options={StackOptions}
              value={stack}
              onChange={(o) => setStack(o)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>모집 분야</label>
            <Select
              multiple
              options={PartOptions}
              value={part}
              onChange={(o) => setPart(o)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>모집 마감일</label>
            <CalendarInput deadline={deadline} setDeadline={setDeadline} />
          </InputWrapper>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          <span>2</span>
          <h1>프로젝트에 대해 소개해주세요.</h1>
        </SectionTitle>
        <SectionContent2>
          <InputWrapper style={{ width: '100%', marginBottom: '1.6rem' }}>
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitle}
              placeholder="글 제목을 입력해주세요."
            />
          </InputWrapper>
          <div>
            <StyledQuill
              forwardedRef={QuillRef}
              onChange={onChange}
              modules={modules}
              placeholder="프로젝트에 대해 소개해주세요."
            />
          </div>
          <ButtonWrapper>
            <button onClick={onSubmit}>글 등록</button>
          </ButtonWrapper>
        </SectionContent2>
      </Section>
    </WriteWrapper>
  );
}

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6rem 3rem;
  color: ${(props) => props.theme.text_color};
`;

const Section = styled.section`
  margin-bottom: 10rem;
`;

const SectionTitle = styled.div`
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

const InputWrapper = styled.div`
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

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  margin-top: 5rem;
  row-gap: 2.5rem;
`;

const StyledQuill = styled(QuillNoSSRWrapper)`
  display: flex;
  flex-direction: column;
  font-family: 'NanumSquareAcR';
  width: 100%;
  min-height: 40rem;
  & > div:first-child {
    top: 70px;
  }
`;

const SectionContent2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  & > div {
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled.div`
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
