import { SelectOption } from '@/types/select';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export default function Select({
  multiple,
  value,
  onChange,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };
  const selectOptions = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };
  const isOptionsSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option === value;
  };
  useEffect(() => {
    if (isOpen) setHighlightIndex(0);
  }, [isOpen]);
  return (
    <Container
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      show={isOpen}
    >
      <Value>
        {multiple
          ? value.map((v) => (
              <OptionBadge
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOptions(v);
                }}
              >
                {v.label}
                <RemoveBtn>&times;</RemoveBtn>
              </OptionBadge>
            ))
          : value?.label}
      </Value>
      <ClearBtn
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </ClearBtn>
      <Divider />
      <Caret />
      <Options show={isOpen}>
        {options.map((option, index) => (
          <Option
            key={option.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOptions(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightIndex(index)}
            selected={isOptionsSelected(option)}
            highlighted={index === highlightIndex}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}

const Container = styled.div<{ show: boolean }>`
  position: relative;
  width: 100%;
  min-height: 4.6rem;
  border: ${(props) => (props.show ? '2px' : '1px')} solid
    ${(props) => props.theme.main_brown};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  outline: none;
`;

const Value = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
const ClearBtn = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 2rem;
  &:focus,
  &:hover {
    color: #333;
  }
`;
const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05rem;
`;
const Caret = styled.div`
  translate: 0 25%;
  margin-right: 0.5rem;
  border: 0.5rem solid transparent;
  border-top-color: #777;
`;
const Options = styled.ul<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  max-height: 15rem;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25rem;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25rem);
  background-color: white;
  z-index: 100;
`;
const Option = styled.li<{ highlighted: boolean; selected: boolean }>`
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? 'rgba(149, 127, 106, 0.5);'
      : props.highlighted
      ? 'rgba(149, 127, 106, 0.3);'
      : 'transparent'};
  color: ${(props) => (props.highlighted ? 'white' : props.theme.text_color)};
`;

const RemoveBtn = styled.span``;
const OptionBadge = styled.button`
  display: flex;
  align-items: center;
  border: 0.05rem solid #d7dfe9;
  border-radius: 5px;
  padding: 0.15rem 0.25rem;
  gap: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme.text_color};
  background: #f9fafb;
  outline: none;
  ${(props) => props.theme.mq.mobile} {
    zoom: 0.5;
  }
  &:hover,
  &:focus {
    background-color: hsl(0, 100%, 95%);
  }
`;
