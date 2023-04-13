import { css } from 'styled-components';

import { DividerProps } from '../../../controls/Divider';

const verticalStyle = css`
  background: black;
  height: 100%;
  width: 1px;
  margin: 0 4px;
`;

const horizontalStyle = css`
  background: black;
  height: 1px;
  width: 100%;
  margin: 4px 0;
`;

export const Divider = css<DividerProps>`
  ${({ vertical }) => (vertical ? verticalStyle : horizontalStyle)}
`;
