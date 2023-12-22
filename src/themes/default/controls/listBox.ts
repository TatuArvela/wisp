import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';
import { ListBoxOptionsProps } from '../../../controls/ListBox';

export const ListBoxWrapper = css<ControlWrapperProps>``;

export const ListBoxLabel = css`
  ${(props) => props.theme.controls.Label}
`;

export const ListBoxButton = css<{ disabled?: boolean }>`
  background: white;
  border-radius: 0;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  display: flex;
  height: 24px;
  padding: 3px;
  font-size: 12px;
  position: relative;
  width: 100%;

  &:before {
    border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
    content: '';
    right: 10px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
    content: '';
    right: 4px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ListBoxOptions = css<ListBoxOptionsProps>`
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
  z-index: 100;
`;

export const ListBoxOption = css`
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
