import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';

const columnStyle = css`
  flex-direction: column;
  justify-content: center;
`;

const inlineStyle = css`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const ControlWrapper = css<ControlWrapperProps>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  box-sizing: border-box;
  ${({ inlineLabel }) => (inlineLabel ? inlineStyle : columnStyle)}
`;
