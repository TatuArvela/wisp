import { css } from 'styled-components';

import {
  ControlWrapperProps,
  ListBoxButtonProps,
  ListBoxOptionsProps,
  ListBoxValueProps,
} from '../../../controls';

export const ListBoxWrapper = css<ControlWrapperProps>``;

export const ListBoxLabel = css`
  ${(props) => props.theme.controls.Label}
`;

export const ListBoxControl = css`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  &:focus-within {
    outline: 1px solid blue;
  }
`;

export const ListBoxValue = css<ListBoxValueProps>`
  align-items: center;
  border-bottom-left-radius: 1px;
  border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-left: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-right: none;
  border-top-left-radius: 1px;
  border-top: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  display: flex;
  font-family: sans-serif;
  font-size: 12px;
  height: 24px;
  margin: 0;
  outline: none;
  padding: 2px 4px;
  position: relative;
  user-select: none;
  width: 100%;
`;

export const ListBoxButton = css<ListBoxButtonProps>`
  background: white;
  border-top: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-right: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  border-left: none;
  border-radius: 0;
  box-sizing: border-box;
  width: 24px;
  outline: none;
  padding: 0;
  height: 24px;
  position: relative;

  &:before {
    border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
    content: '';
    left: 8px;
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
  margin: 0;
  padding: 0;
  position: relative;
  top: -1px !important;
  width: 100%;
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
