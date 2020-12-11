import React from 'react';
import styled from 'styled-components';

import { WindowManager } from '../shell/types';
import { WindowType } from './types';

type RenderedWindowProps = WindowType & {
  activateWindow: WindowManager['activateWindow'];
  dragWindow: WindowManager['dragWindow'];
  isActiveWindow: boolean;
};
type WindowComponentProps = Pick<
  RenderedWindowProps,
  'positionX' | 'positionY'
>;
type WindowTitleProps = Pick<RenderedWindowProps, 'isActiveWindow'>;

const WindowComponent = styled.div<WindowComponentProps>`
  background: white;
  border: 3px solid white;
  color: black;
  height: 100px;
  left: ${(props) => props.positionX}px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: ${(props) => props.positionY}px;
  width: 200px;
  box-shadow: 0 0 0 1px gray;
  border-radius: 3px;
`;

const WindowTitle = styled.div<WindowTitleProps>`
  background: ${(props) => (props.isActiveWindow ? 'rgb(19,71,214)' : 'grey')};
  border-radius: 3px;
  color: white;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  padding-left: 4px;
  width: 100%;
  margin: 0;
  user-select: none;
`;

const WindowContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: calc(100% - 18px);
  text-align: center;
  width: 100%;
  user-select: none;
`;

const RenderedWindow = ({
  activateWindow,
  children,
  dragWindow,
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
    <WindowTitle
      isActiveWindow={isActiveWindow}
      onMouseDown={(event) => dragWindow(event, id)}
    >
      {title}
    </WindowTitle>
    <WindowContent>{children}</WindowContent>
  </WindowComponent>
);

export default RenderedWindow;
