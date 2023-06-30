import { Combobox as HeadlessComboBox } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components';

import { useWindow } from '../window/WindowContext';
import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const ComboBoxThemeProperties = [
  'ComboBoxButton',
  'ComboBoxControl',
  'ComboBoxInput',
  'ComboBoxLabel',
  'ComboBoxOption',
  'ComboBoxOptions',
  'ComboBoxWrapper',
] as const;

const ComboBoxWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.ComboBoxWrapper}
`;

export interface ComboBoxLabelProps {
  disabled?: boolean;
}
const ComboBoxLabel = styled.label<ComboBoxLabelProps>`
  ${(props) => props.theme.controls.ComboBoxLabel}
`;

const ComboBoxControl = styled.div`
  ${(props) => props.theme.controls.ComboBoxControl}
`;

export interface ComboBoxButtonProps {
  disabled?: boolean;
}
const ComboBoxButton = styled(HeadlessComboBox.Button)<ComboBoxButtonProps>`
  ${(props) => props.theme.controls.ComboBoxButton}
`;

export interface ComboBoxInputProps {
  disabled?: boolean;
}
const ComboBoxInput = styled(HeadlessComboBox.Input)<ComboBoxInputProps>`
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

export interface ComboBoxProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  nullable?: boolean;
  onChange(value?: string): void;
  options: string[];
  value?: string;
}
export const ComboBox = ({
  disabled,
  label,
  nullable,
  onChange,
  options,
  value,
  inlineLabel,
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
      disabled={disabled}
      value={value ?? ''}
      onChange={onChange}
      nullable={nullable ? true : undefined}
    >
      {({ open }) => (
        <ComboBoxWrapper inlineLabel={inlineLabel}>
          {label && <ComboBoxLabel disabled={disabled}>{label}</ComboBoxLabel>}
          <ComboBoxControl ref={controlRef}>
            <ComboBoxInput
              disabled={disabled}
              onClick={onInputClick}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboBoxButton disabled={disabled} ref={buttonRef} />
            <Portal>
              <ComboBoxOptions
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
        </ComboBoxWrapper>
      )}
    </HeadlessComboBox>
  );
};

export default ComboBox;
