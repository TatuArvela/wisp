import { css } from 'styled-components';

import { WindowElementProps } from '../../../window/components/WindowElement';
import { WindowMargins } from '../../../windowManager/types';
import { WindowThemeSection } from '../../types';
import resizeBorder from './resizeBorder';
import titleBar from './titleBar';
import titleBarButtons from './titleBarButtons';

const WindowContent = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow: hidden;
  width: 100%;
  user-select: none;
`;

const getHeight = (windowMargins: WindowMargins) =>
  `calc(100% - ${windowMargins.top + windowMargins.bottom}px)`;

const getWidth = (windowMargins: WindowMargins) =>
  `calc(100% - ${windowMargins.left + windowMargins.right}px)`;

const maximizedStyles = css<WindowElementProps>`
  height: ${(props) => getHeight(props.windowMargins)} !important;
  left: ${(props) => props.windowMargins.left} !important;
  top: ${(props) => props.windowMargins.top} !important;
  width: ${(props) => getWidth(props.windowMargins)} !important;
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
