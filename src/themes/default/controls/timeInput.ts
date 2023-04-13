import { css } from 'styled-components';

import { TimeInputWrapperProps } from '../../../controls/TimeInput';
import { Label } from './label';

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

export const TimeInputWrapper = css<TimeInputWrapperProps>`
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  ${({ inlineLabel }) => (inlineLabel ? inlineStyle : columnStyle)}
`;

export const TimeInputLabel = Label;

export const TimeInputControl = css`
  display: flex;
  height: 24px;
  gap: 2px;
  width: 100%;
`;

export const TimeInputField = css`
  display: flex;
  border: 1px solid black;
  border-radius: 1px;
  width: 100%;
`;

export const TimeInputValue = css`
  width: 18px;
  border: none;
  outline: none;

  &::selection {
    color: white;
    background: rgb(19, 71, 214);
  }
`;

export const TimeInputSeparator = css`
  width: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: ':';
    position: absolute;
  }
`;

export const TimeInputButtons = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const activeStyle = css`
  background: rgb(200, 200, 200);
  box-shadow: none;
  left: 1px;
  top: 1px;
`;

export const TimeInputIncreaseButton = css<{ active?: boolean }>`
  height: 11px;
  width: 18px;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid black;
  position: relative;
  background: white;
  box-shadow: 1px 1px 0 0 gray;

  ${({ active }) => active && activeStyle}
  &:active {
    ${activeStyle}
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 7px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(45deg);
    width: 6px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 6px;
  }
`;

export const TimeInputDecreaseButton = css<{ active?: boolean }>`
  height: 11px;
  width: 18px;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid black;
  position: relative;
  background: white;
  box-shadow: 1px 1px 0 0 gray;

  ${({ active }) => active && activeStyle}
  &:active {
    ${activeStyle}
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 7px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 6px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(45deg);
    width: 6px;
  }
`;
