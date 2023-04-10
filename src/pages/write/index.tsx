import React, { useState } from 'react';
import * as S from './styles';
import Select from '@/components/Select';
import { SelectOption } from '@/types/select';

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

export default function Write() {
  const [member, setMember] = useState<SelectOption | undefined>(
    MemberOptions[0]
  );
  const [stack, setStack] = useState<SelectOption[]>([]);
  return (
    <S.WriteWrapper>
      <S.Section>
        <S.SectionTitle>
          <span>1</span>
          <h1>프로젝트 기본 정보를 입력해주세요.</h1>
        </S.SectionTitle>
        <div>
          {/* TODO: 기본정보 폼 받기 */}
          <S.InputWrapper>
            <label htmlFor="name">프로젝트 이름</label>
            <input id="name" type="text" />
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
        </div>
      </S.Section>
      <S.Section>
        <S.SectionTitle>
          <span>2</span>
          <h1>프로젝트에 대해 소개해주세요.</h1>
        </S.SectionTitle>
        <div>
          <div>{/* TODO: 소개 폼 받기 */}</div>
        </div>
      </S.Section>
    </S.WriteWrapper>
  );
}
