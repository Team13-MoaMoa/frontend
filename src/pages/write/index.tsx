import React, { useMemo, useRef, useState } from 'react';
import * as S from './styles';
import Select from '@/components/Select';
import { SelectOption } from '@/types/select';
import CalendarInput from '@/components/Calendar';
import dynamic from 'next/dynamic';
// import { uploadFile } from '@/services/uploadS3';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const MemberOptions: SelectOption[] = [
  { label: '인원 미정', value: '1' },
  { label: '2명', value: '2' },
  { label: '3명', value: '3' },
  { label: '4명', value: '4' },
  { label: '5명', value: '5' },
  { label: '6명 이상', value: 'over 6' },
];
const StackOptions: SelectOption[] = [
  { label: 'React', value: 'React' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'Vue', value: 'Vue' },
  { label: 'SpringBoot', value: 'SpringBoot' },
  { label: 'Angular', value: 'Angular' },
  { label: 'Svelte', value: 'Svelt' },
];
const PartOptions: SelectOption[] = [
  { label: '프론트엔드', value: 'FE' },
  { label: '백엔드', value: 'BE' },
  { label: '디자이너', value: 'Designer' },
  { label: '기획', value: 'planner' },
  { label: '마케팅', value: 'Marketing' },
  { label: 'AI', value: 'AI' },
];

export default function Write() {
  const [contents, setContents] = useState('');
  const [member, setMember] = useState<SelectOption | undefined>(
    MemberOptions[0]
  );
  const [stack, setStack] = useState<SelectOption[]>([]);
  const [part, setPart] = useState<SelectOption[]>([]);

  const onChange = (content: string) => {
    setContents(content);
  };

  const QuillRef = useRef<typeof ReactQuill>(null);

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (input.files !== null) {
        console.log(input.files[0]);
      }
      if (input.files !== null) {
        const file = input.files[0];
        // try {
        //   const res = await uploadFile(file);
        //   const url = res?.location || '';
        //   const range = QuillRef.current?.getEditor().getSelection()?.index;
        //   if (range !== null && range !== undefined) {
        //     let quill = QuillRef.current?.getEditor();

        //     quill?.setSelection(range, 1);

        //     quill?.clipboard.dangerouslyPasteHTML(
        //       range,
        //       `<img src=${url} alt="이미지" />`
        //     );
        //   }

        //   return { ...res, success: true };
        // } catch (error) {
        //   const err = error as AxiosError;
        //   return { ...err.response, success: false };
        // }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
                'custom-color',
              ],
            },
          ],
          ['image'],
          ['clean'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );
  return (
    <S.WriteWrapper>
      <S.Section>
        <S.SectionTitle>
          <span>1</span>
          <h1>프로젝트 기본 정보를 입력해주세요.</h1>
        </S.SectionTitle>
        <S.SectionContent>
          <S.InputWrapper>
            <label htmlFor="name">프로젝트 이름</label>
            <input
              id="name"
              type="text"
              placeholder="프로젝트 이름을 입력하세요."
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <label>모집 인원</label>
            <Select
              options={MemberOptions}
              value={member}
              onChange={(o) => setMember(o)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <label>기술 스택</label>
            <Select
              multiple
              options={StackOptions}
              value={stack}
              onChange={(o) => setStack(o)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <label>모집 분야</label>
            <Select
              multiple
              options={PartOptions}
              value={part}
              onChange={(o) => setPart(o)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <label>모집 마감일</label>
            <CalendarInput />
          </S.InputWrapper>
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>
          <span>2</span>
          <h1>프로젝트에 대해 소개해주세요.</h1>
        </S.SectionTitle>
        <S.SectionContent2>
          <S.InputWrapper style={{ width: '100%', marginBottom: '1.6rem' }}>
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="글 제목을 입력해주세요."
            />
          </S.InputWrapper>
          <div>
            <S.StyledQuill
              onChange={onChange}
              modules={modules}
              placeholder="프로젝트에 대해 소개해주세요."
            />
          </div>
          <S.ButtonWrapper>
            <button>글 등록</button>
          </S.ButtonWrapper>
        </S.SectionContent2>
      </S.Section>
    </S.WriteWrapper>
  );
}
