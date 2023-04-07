import { css } from 'styled-components';

import { WindowElementProps } from '../../../window/components/WindowElement';
import { ViewportWindowMargins } from '../../../windowManager/types';
import { WindowThemeSection } from '../../types';
import resizeBorder from './resizeBorder';
import titleBar from './titleBar';
import titleBarButtons from './titleBarButtons';

const WindowContent = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  text-align: left;
  user-select: none;
  width: 100%;
`;

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

const WindowElement = css<WindowElementProps>`
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

const window: WindowThemeSection = {
  ...resizeBorder,
  ...titleBar,
  ...titleBarButtons,
  WindowContent,
  WindowElement,
};

export default window;
