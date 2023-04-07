import { Combobox as HeadlessComboBox } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components';

import { useWindow } from '../window/WindowContext';

const ComboBoxLabel = styled.label`
  ${(props) => props.theme.controls.ComboBoxLabel}
`;

const ComboBoxElement = styled.div`
  ${(props) => props.theme.controls.ComboBoxElement}
`;

const ComboBoxControl = styled.div`
  ${(props) => props.theme.controls.ComboBoxControl}
`;

const ComboBoxButton = styled(HeadlessComboBox.Button)`
  ${(props) => props.theme.controls.ComboBoxButton}
`;

const ComboBoxInput = styled(HeadlessComboBox.Input)`
  ${(props) => props.theme.controls.ComboBoxInput}
`;

export interface ComboBoxOptionsProps {
  open: boolean;
  width: number;
  left: number;
  top: number;
}
const ComboBoxOptions = styled(HeadlessComboBox.Options)<ComboBoxOptionsProps>`
  ${(props) => props.theme.controls.ComboBoxOptions}
`;

const ComboBoxOption = styled(HeadlessComboBox.Option)`
  ${(props) => props.theme.controls.ComboBoxOption}
`;

interface ComboBoxProps {
  label?: string;
  nullable?: boolean;
  onChange(value?: string): void;
  options: string[];
  value?: string;
}
const ComboBox = ({
  label,
  nullable,
  onChange,
  options,
  value,
}: ComboBoxProps) => {
  const window = useWindow();
  const controlRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState<string>('');
  const [sizes, setSizes] = useState<{
    width: number;
    left: number;
    top: number;
  }>({ width: 0, left: 0, top: 0 });

  useEffect(() => {
    if (window) {
      const rect = controlRef?.current.getBoundingClientRect() ?? {
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

  const onInputClick = () => {
    buttonRef?.current?.click();
  };

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <HeadlessComboBox
      value={value ?? ''}
      onChange={onChange}
      nullable={nullable ? true : undefined}
    >
      {({ open }) => (
        <ComboBoxElement>
          {label && <ComboBoxLabel>{label}</ComboBoxLabel>}
          <ComboBoxControl ref={controlRef}>
            <ComboBoxInput
              onClick={onInputClick}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboBoxButton ref={buttonRef} />
            <Portal>
              <ComboBoxOptions
                as="ul"
                open={filteredOptions.length > 0 && open}
                {...sizes}
              >
                {filteredOptions.map((option) => (
                  <ComboBoxOption key={option} value={option}>
                    {option}
                  </ComboBoxOption>
                ))}
              </ComboBoxOptions>
            </Portal>
          </ComboBoxControl>
        </ComboBoxElement>
      )}
    </HeadlessComboBox>
  );
};

export default ComboBox;
