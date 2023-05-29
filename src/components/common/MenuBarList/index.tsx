import styled from '@emotion/styled';
import React, { useState } from 'react';
import MenuBarItem from '../MenuBarItem';

type MenuBarListProps = {
  position: string;
  list: MenuItem[];
  onChangePosition: (position: string) => void;
  clearLanguage: () => void;
};

function MenuBarList({
  list,
  onChangePosition,
  position,
  clearLanguage,
}: MenuBarListProps) {
  return (
    <MenuBarUl>
      {list.map((item: MenuItem) => (
        <MenuBarItem
          clearLanguage={clearLanguage}
          key={item.type}
          item={item}
          selected={item.type === position}
          onChangePosition={onChangePosition}
        />
      ))}
    </MenuBarUl>
  );
}

const MenuBarUl = styled.ul`
  display: flex;
`;

export default MenuBarList;
