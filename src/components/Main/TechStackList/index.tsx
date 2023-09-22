import techStackData from '@/constants/techStackData';
import styled from '@emotion/styled';
import React from 'react';
import { TechStackItemType } from '@/types/techStack';
import TechStackItem from '../TechStackItem';

type TechStackListProps = {
  position: string;
  language: string[];
  onChangeLanguage: (language: string) => void;
};

function TechStackList({
  position,
  language,
  onChangeLanguage,
}: TechStackListProps) {
  const filteredTechStack =
    position === ''
      ? techStackData
      : techStackData.filter((data) => position === data.type);

  return (
    <TechStackUl>
      {filteredTechStack.map((item: TechStackItemType) => (
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
