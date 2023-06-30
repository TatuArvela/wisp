import { css } from 'styled-components';

import {
  ControlWrapperProps,
  TimeInputButtonProps,
  TimeInputFieldProps,
  TimeInputValueProps,
} from '../../../controls';
import { Label } from './label';

export const TimeInputWrapper = css<ControlWrapperProps>``;

export const TimeInputLabel = Label;

export const TimeInputControl = css`
  display: flex;
  height: 24px;
  gap: 2px;
  width: 100%;
`;

export const TimeInputField = css<TimeInputFieldProps>`
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  display: flex;
  width: 100%;
`;

export const TimeInputValue = css<TimeInputValueProps>`
  border: none;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  outline: none;
  width: 18px;

  &::selection {
    color: white;
    background: ${(props) => (props.disabled ? 'gray' : 'rgb(19, 71, 214)')};
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

const activeStyleProperties = css`
  background: rgb(200, 200, 200);
  box-shadow: none;
  left: 1px;
  top: 1px;
`;
const activeStyle = css<TimeInputButtonProps>`
  ${({ active }) => active && activeStyleProperties}
  &:active {
    ${activeStyleProperties}
  }
`;

export const TimeInputIncreaseButton = css<TimeInputButtonProps>`
  background: white;
  border-radius: 0;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  height: 11px;
  position: relative;
  width: 18px;

  ${(props) => !props.disabled && activeStyle}

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

export const TimeInputDecreaseButton = css<TimeInputButtonProps>`
  background: white;
  border-radius: 0;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  height: 11px;
  position: relative;
  width: 18px;

  ${(props) => !props.disabled && activeStyle}

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
