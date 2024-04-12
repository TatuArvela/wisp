import {
  autoUpdate,
  flip,
  FloatingPortal,
  size,
  useFloating,
} from '@floating-ui/react';
import { Listbox as HeadlessListBox } from '@headlessui/react';
import React, { useRef } from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const ListBoxThemeProperties = [
  'ListBoxButton',
  'ListBoxControl',
  'ListBoxValue',
  'ListBoxLabel',
  'ListBoxOption',
  'ListBoxOptions',
  'ListBoxWrapper',
] as const;

const ListBoxWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.ListBoxWrapper}
`;

export interface ListBoxLabelProps {
  disabled?: boolean;
}
const ListBoxLabel = styled.label<ListBoxLabelProps>`
  ${(props) => props.theme.controls.ListBoxLabel}
`;

const ListBoxControl = styled.div`
  ${(props) => props.theme.controls.ListBoxControl}
`;

export interface ListBoxValueProps {
  disabled?: boolean;
}
const ListBoxValue = styled.div<ListBoxValueProps>`
  ${(props) => props.theme.controls.ListBoxValue}
`;

export interface ListBoxButtonProps {
  disabled?: boolean;
}
const ListBoxButton = styled(HeadlessListBox.Button)<ListBoxButtonProps>`
  ${(props) => props.theme.controls.ListBoxButton}
`;

export interface ListBoxOptionsProps {
  open: boolean;
}
const ListBoxOptions = styled(HeadlessListBox.Options)<ListBoxOptionsProps>`
  ${(props) => props.theme.controls.ListBoxOptions}
`;

const ListBoxOption = styled(HeadlessListBox.Option)`
  ${(props) => props.theme.controls.ListBoxOption}
`;

export interface ListBoxProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  onChange(value?: string): void;
  options: string[];
  value?: string;
}
export const ListBox = ({
  disabled,
  inlineLabel,
  label,
  onChange,
  options,
  value,
}: ListBoxProps) => (
  <HeadlessListBox disabled={disabled} value={value ?? ''} onChange={onChange}>
    {({ open }) => (
      <FloatingListBox
        disabled={disabled}
        inlineLabel={inlineLabel}
        label={label}
        open={open}
        options={options}
        value={value}
      />
    )}
  </HeadlessListBox>
);

type FloatingListBoxProps = Omit<ListBoxProps, 'onChange'> & { open: boolean };
const FloatingListBox = ({
  disabled,
  inlineLabel,
  label,
  open,
  options,
  value,
}: FloatingListBoxProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
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

  const onValueClick = () => {
    open
      ? buttonRef?.current?.parentElement.click()
      : buttonRef?.current?.click();
  };

  return (
    <ListBoxWrapper inlineLabel={inlineLabel}>
      {label && <ListBoxLabel disabled={disabled}>{label}</ListBoxLabel>}
      <ListBoxControl ref={refs.setReference}>
        <ListBoxValue disabled={disabled} onClick={onValueClick}>
          {value}
        </ListBoxValue>
        <ListBoxButton disabled={disabled} ref={buttonRef} />
        {open && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
            >
              <ListBoxOptions open={open}>
                {options.map((option, i) => (
                  <ListBoxOption key={option} value={option}>
                    {option}
                  </ListBoxOption>
                ))}
              </ListBoxOptions>
            </div>
          </FloatingPortal>
        )}
      </ListBoxControl>
    </ListBoxWrapper>
  );
};

export default ListBox;
