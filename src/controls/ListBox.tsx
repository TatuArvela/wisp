import { Listbox as HeadlessListBox } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components';

import { useWindow } from '../window/WindowContext';

export interface ListBoxWrapperProps {
  inlineLabel: boolean;
}
const ListBoxWrapper = styled.div<ListBoxWrapperProps>`
  ${(props) => props.theme.controls.ListBoxWrapper}
`;

const ListBoxLabel = styled.label`
  ${(props) => props.theme.controls.ListBoxLabel}
`;

const ListBoxButton = styled(HeadlessListBox.Button)`
  ${(props) => props.theme.controls.ListBoxButton}
`;

export interface ListBoxOptionsProps {
  open: boolean;
  width: number;
  left: number;
  top: number;
}
const ListBoxOptions = styled(HeadlessListBox.Options)<ListBoxOptionsProps>`
  ${(props) => props.theme.controls.ListBoxOptions}
`;

const ListBoxOption = styled(HeadlessListBox.Option)`
  ${(props) => props.theme.controls.ListBoxOption}
`;

interface ListBoxProps {
  inlineLabel?: boolean;
  label?: string;
  onChange(value?: string): void;
  options: string[];
  value?: string;
}
const ListBox = ({
  inlineLabel = false,
  label,
  onChange,
  options,
  value,
}: ListBoxProps) => {
  const window = useWindow();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [sizes, setSizes] = useState<{
    width: number;
    left: number;
    top: number;
  }>({ width: 0, left: 0, top: 0 });

  useEffect(() => {
    if (window) {
      const rect = buttonRef?.current.getBoundingClientRect() ?? {
        width: 0,
        left: 0,
        top: 0,
        height: 0,
      };
      setSizes({
        width: rect.width,
        left: rect.left,
        top: rect.top + rect.height,
      });
    }
  }, [window]);

  return (
    <HeadlessListBox value={value ?? ''} onChange={onChange}>
      {({ open }) => (
        <ListBoxWrapper inlineLabel={inlineLabel}>
          {label && <ListBoxLabel>{label}</ListBoxLabel>}
          <ListBoxButton ref={buttonRef}>{value}</ListBoxButton>
          <Portal>
            <ListBoxOptions open={open} {...sizes}>
              {options.map((option) => (
                <ListBoxOption key={option} value={option}>
                  {option}
                </ListBoxOption>
              ))}
            </ListBoxOptions>
          </Portal>
        </ListBoxWrapper>
      )}
    </HeadlessListBox>
  );
};

export default ListBox;
