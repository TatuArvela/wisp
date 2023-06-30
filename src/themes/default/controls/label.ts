import { css } from 'styled-components';

import { LabelProps } from '../../../controls';

export const Label = css<LabelProps>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 14px;
  font-family: sans-serif;
  margin: 0;
`;
