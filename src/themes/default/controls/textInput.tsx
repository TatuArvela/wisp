import { css } from 'styled-components';

import { TextInputWrapperProps } from '../../../controls/TextInput';

const columnStyle = css`
  flex-direction: column;
  height: 40px;
  justify-content: center;
  box-sizing: border-box;
`;

const inlineStyle = css`
  flex-direction: row;
  gap: 16px;
  height: 24px;
  align-items: center;
  box-sizing: border-box;
`;

export const TextInputWrapper = css<TextInputWrapperProps>`
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  ${({ inlineLabel }) => (inlineLabel ? inlineStyle : columnStyle)}
`;

export const TextInputLabel = css`
  margin: 0;
`;

export const TextInputElement = css`
  border: 1px solid black;
  border-radius: 1ps;
  box-sizing: border-box;
  height: 24px;
  width: 100%;
  font-size: 12px;
  outline: none;
`;
