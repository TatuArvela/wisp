import { css } from 'styled-components';

import {
  AddressBarElementProps,
  AddressBarInputContainerProps,
  AddressBarInputProps,
  AddressBarLabelProps,
} from '../../../controls';

export const AddressBarElement = css<AddressBarElementProps>`
  align-items: center;
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  font-family: sans-serif;
  gap: 4px;
  height: 28px;
  flex-shrink: 0;
  padding: 2px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const AddressBarLabel = css<AddressBarLabelProps>`
  ${(props) => props.theme.controls.Label}
`;

export const AddressBarInputContainer = css<AddressBarInputContainerProps>`
  align-items: center;
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

export const AddressBarIcon = css<AddressBarInputProps>`
  height: 16px;
  margin: 0 4px;
  width: 16px;
`;

export const AddressBarInput = css<AddressBarInputProps>`
  border: none;
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  cursor: text;
  font-size: 12px;
  height: 22px;
  outline: none;
  width: 100%;
`;
