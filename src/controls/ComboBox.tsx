import {
  autoUpdate,
  flip,
  FloatingPortal,
  size,
  useFloating,
} from '@floating-ui/react';
import { Combobox as HeadlessComboBox } from '@headlessui/react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

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

export interface ComboBoxInputProps {
  disabled?: boolean;
}
const ComboBoxInput = styled(HeadlessComboBox.Input)<ComboBoxInputProps>`
  ${(props) => props.theme.controls.ComboBoxInput}
`;

export interface ComboBoxButtonProps {
  disabled?: boolean;
}
const ComboBoxButton = styled(HeadlessComboBox.Button)<ComboBoxButtonProps>`
  ${(props) => props.theme.controls.ComboBoxButton}
`;

export interface ComboBoxOptionsProps {
  open: boolean;
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
  return (
    <HeadlessComboBox
      disabled={disabled}
      value={value ?? ''}
      onChange={onChange}
      nullable={nullable ? true : undefined}
    >
      {({ open }) => (
        <FloatingComboBox
          disabled={disabled}
          inlineLabel={inlineLabel}
          label={label}
          open={open}
          options={options}
          value={value}
        />
      )}
    </HeadlessComboBox>
  );
};

type FloatingComboBoxProps = Omit<ComboBoxProps, 'onChange'> & {
  open: boolean;
};
const FloatingComboBox = ({
  disabled,
  inlineLabel,
  label,
  open,
  options,
}: FloatingComboBoxProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState<string>('');

  const { refs, floatingStyles } = useFloating<HTMLElement>({
    placement: 'bottom-start',
    open: open,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ flipAlignment: false }),
      size({
        apply({ availableHeight, availableWidth, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            maxWidth: `${availableWidth}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

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
    <ComboBoxWrapper inlineLabel={inlineLabel}>
      {label && <ComboBoxLabel disabled={disabled}>{label}</ComboBoxLabel>}
      <ComboBoxControl ref={refs.setReference}>
        <ComboBoxInput
          disabled={disabled}
          onClick={onInputClick}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboBoxButton disabled={disabled} ref={buttonRef} />
        {open && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
            >
              <ComboBoxOptions open={filteredOptions.length > 0 && open}>
                {filteredOptions.map((option) => (
                  <ComboBoxOption key={option} value={option}>
                    {option}
                  </ComboBoxOption>
                ))}
              </ComboBoxOptions>
            </div>
          </FloatingPortal>
        )}
      </ComboBoxControl>
    </ComboBoxWrapper>
  );
};

export default ComboBox;
