import { css } from 'styled-components';

export const StatusBarSection = css<{ hasSetWidth: boolean }>`
  border: 1px solid black;
  display: flex;
  flex-grow: ${({ hasSetWidth }) => (hasSetWidth ? 'unset' : 1)};
  font-family: sans-serif;
  padding: 2px;
`;
