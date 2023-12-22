import { css } from 'styled-components';

import { CheckboxProps, ControlWrapperProps } from '../../../controls';

export const CheckboxWrapper = css<ControlWrapperProps>``;

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

const hoverStyle = css`
  &:hover {
    filter: brightness(90%);
  }
`;

const activeStyle = css`
  &:active {
    background: lightgray;
  }
`;

export const Checkbox = css<CheckboxProps>`
  background: white;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-radius: 2px;
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  height: 20px;
  position: relative;
  width: 20px;
  margin-bottom: 2px;
  margin-right: 2px;

  ${(props) => !props.disabled && activeStyle}
  ${(props) => !props.disabled && hoverStyle}
  ${(props) => props.checked && checkedStyle}
`;

export const CheckboxLabel = css`
  ${(props) => props.theme.controls.Label}
`;
