import { css } from 'styled-components';

import { WindowElementProps } from '../../../window/components/WindowElement';
import { ViewportWindowMargins } from '../../../windowManager/types';

const getHeight = (viewportWindowMargins: ViewportWindowMargins) =>
  `calc(100% - ${viewportWindowMargins.top + viewportWindowMargins.bottom}px)`;

const getWidth = (viewportWindowMargins: ViewportWindowMargins) =>
  `calc(100% - ${viewportWindowMargins.left + viewportWindowMargins.right}px)`;

const maximizedStyles = css<WindowElementProps>`
  height: ${(props) => getHeight(props.viewportWindowMargins)} !important;
  left: ${(props) => props.viewportWindowMargins.left} !important;
  top: ${(props) => props.viewportWindowMargins.top} !important;
  width: ${(props) => getWidth(props.viewportWindowMargins)} !important;
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
