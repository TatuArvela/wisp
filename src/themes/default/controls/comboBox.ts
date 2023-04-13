import { css } from 'styled-components';

import {
  ComboBoxOptionsProps,
  ComboBoxWrapperProps,
} from '../../../controls/ComboBox';
import { Label } from './label';

const columnStyle = css`
  flex-direction: column;
  height: 40px;
  justify-content: center;
`;

const inlineStyle = css`
  flex-direction: row;
  gap: 16px;
  height: 24px;
  align-items: center;
`;

export const ComboBoxWrapper = css<ComboBoxWrapperProps>`
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  box-sizing: border-box;
  ${({ inlineLabel }) => (inlineLabel ? inlineStyle : columnStyle)}
`;

export const ComboBoxLabel = Label;

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
  height: 24px;
  margin: 0;
  outline: none;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

export const ComboBoxButton = css`
  background: white;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: none;
  border-radius: 0;
  box-sizing: border-box;
  width: 24px;
  padding: 0;
  height: 24px;
  position: relative;

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 8px;
    pointer-events: none;
    position: absolute;
    top: 11px;
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
