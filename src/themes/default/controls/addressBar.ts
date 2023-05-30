import { css } from 'styled-components';

export const AddressBar = css`
  align-items: center;
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  gap: 4px;
  height: 28px;
  margin-top: -2px;
  margin-bottom: 2px;
  padding: 2px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const AddressBarInput = css<{ disabled?: boolean }>`
  border-radius: 1ps;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  cursor: text;
  font-size: 12px;
  height: 22px;
  outline: none;
  width: 100%;
`;