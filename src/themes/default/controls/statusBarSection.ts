import { css } from 'styled-components';

import { StatusBarSectionProps } from '../../../controls/StatusBarSection';

export const StatusBarSection = css<StatusBarSectionProps>`
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-grow: ${({ width }) => (width !== undefined ? 'unset' : 1)};
  font-family: sans-serif;
  font-size: 12px;
  padding: 2px;
`;
