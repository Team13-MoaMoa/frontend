import techStackData from '@/constants/techStackData';
import styled from '@emotion/styled';
import React from 'react';
import { TechStackItemType } from '@/types/techStack';
import TechStackItem from '../TechStackItem';

type TechStackListProps = {
  language: string[];
  onChangeLanguage: (language: string) => void;
};

function TechStackList({ onChangeLanguage, language }: TechStackListProps) {
  return (
    <TechStackUl>
      {techStackData.map((item: TechStackItemType) => (
        <TechStackItem
          selected={language.includes(item.name)}
          key={item.id}
          item={item}
          onChangeLanguage={onChangeLanguage}
        />
      ))}
    </TechStackUl>
  );
}

const TechStackUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default TechStackList;
