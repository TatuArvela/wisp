import { css } from 'styled-components';

import { WindowElementProps } from '../../../window';
import { ViewportMargins } from '../../../windowManager/types';

const getHeight = (viewportMargins: ViewportMargins) =>
  `calc(100% - ${viewportMargins.top + viewportMargins.bottom}px)`;

const getWidth = (viewportMargins: ViewportMargins) =>
  `calc(100% - ${viewportMargins.left + viewportMargins.right}px)`;

const maximizedStyles = css<WindowElementProps>`
  height: ${(props) => getHeight(props.viewportMargins)} !important;
  left: ${(props) => props.viewportMargins.left} !important;
  top: ${(props) => props.viewportMargins.top} !important;
  width: ${(props) => getWidth(props.viewportMargins)} !important;
  z-index: ${(props) => props.orderNumber} !important;
  border-radius: 0;
`;

const minimizedStyles = css`
  display: none;
`;

export const WindowElement = css<WindowElementProps>`
  background: white;
  border-radius: 3px;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 0 1px gray;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;

  ${(props) => props.isMaximized && maximizedStyles}
  ${(props) => props.isMinimized && minimizedStyles}
`;
