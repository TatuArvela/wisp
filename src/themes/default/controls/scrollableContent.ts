import { css } from 'styled-components';

import { ScrollableContentViewProps } from '../../../controls/ScrollableContent';

export const ScrollableContentWrapper = css`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ScrollableContentView = css<ScrollableContentViewProps>`
  box-sizing: border-box;
  height: calc(100% - ${({ horizontal }) => (horizontal ? 22 : 0)}px);
  width: calc(100% - ${({ vertical }) => (vertical ? 22 : 0)}px);
  overscroll-behavior: none;
  overflow-x: ${({ horizontal }) => (horizontal ? 'scroll' : 'clip')};
  overflow-y: ${({ vertical }) => (vertical ? 'scroll' : 'clip')};
  scrollbar-width: none;
`;
