import { css } from 'styled-components';

export const StatusBarSection = css<{ hasSetWidth: boolean }>`
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-grow: ${({ hasSetWidth }) => (hasSetWidth ? 'unset' : 1)};
  font-family: sans-serif;
  font-size: 12px;
  padding: 2px;
`;
