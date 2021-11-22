import { css } from 'styled-components';

import { WindowElementProps } from '../../../window/components/WindowElement';
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

const maximizedStyles = css<WindowElementProps>`
  height: 100% !important;
  left: 0 !important;
  top: 0 !important;
  width: 100% !important;
  z-index: ${(props) => props.orderNumber} !important;
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

  // TODO: Get maximized size and position from windowManager
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
