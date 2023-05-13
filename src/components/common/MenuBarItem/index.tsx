import useLanguage from '@/hook/useLanguage';
import styled from '@emotion/styled';
import React from 'react';

type MenuBarItemProps = {
  item: MenuItem;
  selected: boolean;
  onChangePosition: (position: string) => void;
  clearLanguage: () => void;
};

function MenuBarItem({
  item,
  selected,
  onChangePosition,
  clearLanguage,
}: MenuBarItemProps) {
  return (
    <MenuBarLi
      selected={selected}
      onClick={() => {
        onChangePosition(item.type);
        clearLanguage();
      }}
    >
      {item.name}
    </MenuBarLi>
  );
}

const MenuBarLi = styled.li<{ selected: boolean }>`
  text-align: center;
  width: auto;
  padding: 0 2rem 2rem 2rem;
  color: ${(props) => (props.selected ? 'black' : props.theme.unselected_text)};
  border-bottom: 2px solid;
  border-color: ${(props) =>
    props.selected ? props.theme.sub_yellow : props.theme.unselected_text};
  cursor: pointer;
  font-size: 2.4rem;

  transition: all 0.5s;
`;

export default MenuBarItem;
