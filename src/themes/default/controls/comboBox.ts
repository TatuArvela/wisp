import { css } from 'styled-components';

import { ComboBoxOptionsProps } from '../../../controls/ComboBox';

export const ComboBoxElement = css`
  display: flex;
  height: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ComboBoxLabel = css`
  margin: 0;
`;

export const ComboBoxControl = css`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ComboBoxInput = css`
  border-bottom-left-radius: 1px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: none;
  border-top-left-radius: 1px;
  border-top: 1px solid black;
  box-sizing: border-box;
  font-size: 12px;
  height: 100%;
  margin: 0;
  outline: none;
  position: relative;
  width: 100%;
`;

export const ComboBoxButton = css`
  background: white;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: none;
  border-radius: 0;
  width: 24px;
  padding: 0;
  height: 100%;
  position: relative;

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 8px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ComboBoxOptions = css<ComboBoxOptionsProps>`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${(props) => `${props.open ? 'block' : 'none'}`};
  left: ${(props) => `${props.left}`}px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${(props) => `${props.top - 1}`}px;
  width: ${(props) => `${props.width}`}px;
`;

export const ComboBoxOption = css`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(19, 71, 214);
    color: white;
  }
`;
