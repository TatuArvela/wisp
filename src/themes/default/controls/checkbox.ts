import { css } from 'styled-components';

import { CheckboxWrapperProps } from '../../../controls/Checkbox';

const columnStyle = css`
  flex-direction: column;
  justify-content: center;
`;

const inlineStyle = css`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const CheckboxWrapper = css<CheckboxWrapperProps>`
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  box-sizing: border-box;
  ${({ inlineLabel }) => (inlineLabel ? inlineStyle : columnStyle)}
`;

const checkedStyle = css`
  &:before {
    content: '✔';
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    text-align: center;
    top: 1px;
    width: 100%;
  }
`;

export const Checkbox = css<{ checked: boolean }>`
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  height: 20px;
  position: relative;
  width: 20px;
  margin-bottom: 2px;
  margin-right: 2px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }

  ${(props) => props.checked && checkedStyle}
`;

export const CheckboxLabel = css`
  margin: 0;
`;
