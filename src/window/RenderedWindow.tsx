import React from 'react';
import styled from 'styled-components';

import { WindowManager } from '../shell/types';
import { WindowType } from './types';

type RenderedWindowProps = WindowType & {
  activateWindow: WindowManager['activateWindow'];
  isActiveWindow: boolean;
};
type WindowComponentProps = Pick<
  RenderedWindowProps,
  'positionX' | 'positionY'
>;
type WindowTitleProps = Pick<RenderedWindowProps, 'isActiveWindow'>;

const WindowComponent = styled.div<WindowComponentProps>`
  background: white;
  border: 2px solid black;
  color: black;
  height: 100px;
  left: ${(props) => props.positionX}px;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.positionY}px;
  width: 200px;
`;

const WindowTitle = styled.div<WindowTitleProps>`
  background: ${(props) => (props.isActiveWindow ? 'blue' : 'grey')};
  border: 2px solid white;
  color: white;
  height: 20px;
  width: 100%;
`;

const WindowContent = styled.div`
  height: calc(100% - 20px);
  text-align: center;
  width: 100%;
`;

const RenderedWindow = ({
  activateWindow,
  children,
  id,
  isActiveWindow,
  positionX,
  positionY,
  title,
}: RenderedWindowProps): JSX.Element => (
  <WindowComponent
    positionX={positionX}
    positionY={positionY}
    onClick={() => activateWindow(id)}
  >
    <WindowTitle isActiveWindow={isActiveWindow}>{title}</WindowTitle>
    <WindowContent>{children}</WindowContent>
  </WindowComponent>
);

export default RenderedWindow;
