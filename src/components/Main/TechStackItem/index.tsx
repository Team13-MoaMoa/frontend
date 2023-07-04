import { theme } from '@/styles/theme';
import { TechStackItemType } from '@/types/techStack';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

type TechStackItemProps = {
  item: TechStackItemType;
  selected: boolean;
  onChangeLanguage: (language: string) => void;
};

function TechStackItem({
  item,
  selected,
  onChangeLanguage,
}: TechStackItemProps) {
  return (
    <TechStackLi
      selected={selected}
      onClick={() => {
        onChangeLanguage(item.name);
      }}
    >
      <div>
        <Image src={item.img} alt={item.name} fill></Image>
      </div>
      <div>{item.name}</div>
    </TechStackLi>
  );
}

const TechStackLi = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1.2rem 2rem 1.2rem 1.5rem;
  border: 1px solid;
  background-color: ${(props) =>
    props.selected ? props.theme.main_brown : undefined};
  color: ${(props) =>
    props.selected ? props.theme.background_gray : undefined};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  & > div:first-of-type {
    position: relative;
    width: 3.7rem;
    height: 3.7rem;
  }

  & > div:last-child {
    margin-right: 1rem;
  }
`;

export default TechStackItem;
