import { css } from 'styled-components';

export const Label = css<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 14px;
  font-family: sans-serif;
  margin: 0;
`;
