import React from 'react';
import styled from 'styled-components';

import { WindowManager } from '../shell/types';
import { WindowType } from './types';

type RenderedWindowProps = WindowType & {
  activateWindow: WindowManager['activateWindow'];
  dragWindow: WindowManager['dragWindow'];
  resizeWindow: WindowManager['resizeWindow'];
  isActiveWindow: boolean;
};
type WindowComponentProps = Pick<
  RenderedWindowProps,
  'positionX' | 'positionY' | 'width' | 'height'
>;
type WindowTitleProps = Pick<RenderedWindowProps, 'isActiveWindow'>;

const WindowComponent = styled.div<WindowComponentProps>`
  background: white;
  border: 3px solid white;
  color: black;
  height: ${(props) => props.height}px;
  left: ${(props) => props.positionX}px;
  padding: 0;
  position: absolute;
  top: ${(props) => props.positionY}px;
  width: ${(props) => props.width}px;
  box-shadow: 0 0 0 1px gray;
  border-radius: 3px;
`;

const WindowTitle = styled.div<WindowTitleProps>`
  background: ${(props) =>
    props.isActiveWindow ? 'rgb(19, 71, 214)' : 'grey'};
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
  overflow: hidden;
`;

const ResizeHandle = styled.div`
  position: absolute;
  right: -3px;
  bottom: -3px;
  content: ' ';
  width: 12px;
  height: 12px;
  padding: 0;
  margin: 0;
  cursor: se-resize;
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    left: 1px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`;
const WindowControls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

const WindowButton = styled.button`
  margin: 1px 2px;
  border-radius: 2px;
  border: none;
  background: white;
  position: relative;
  width: 16px;
  height: 16px;
  padding: 0;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    background: lightgray;
  }
`;
WindowButton.defaultProps = {
  type: 'button',
};

const MinimizeButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 3px;
    top: 2px;
    content: '';
    width: 10px;
    height: 10px;
    border-bottom: 1px solid black;
    pointer-events: none;
  }
`;
const MaximizeButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 2px;
    top: 2px;
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid black;
    pointer-events: none;
  }
`;
const CloseButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';
    width: 16px;
    border-bottom: 1px solid black;
    transform: rotate(45deg);
    pointer-events: none;
  }
  &:after {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';
    width: 16px;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    pointer-events: none;
  }
`;

const RenderedWindow = ({
  activateWindow,
  children,
  dragWindow,
  height,
  id,
  isActiveWindow,
  positionX,
  positionY,
  resizeWindow,
  title,
  width,
}: RenderedWindowProps): JSX.Element => (
  <WindowComponent
    positionX={positionX}
    positionY={positionY}
    width={width}
    height={height}
    onClick={() => activateWindow(id)}
  >
    <WindowTitle
      isActiveWindow={isActiveWindow}
      onMouseDown={(event) => dragWindow(event, id)}
    >
      {title}
    </WindowTitle>
    <WindowControls>
      <MinimizeButton />
      <MaximizeButton />
      <CloseButton />
    </WindowControls>
    <WindowContent>{children}</WindowContent>
    <ResizeHandle onMouseDown={(event) => resizeWindow(event, id)} />
  </WindowComponent>
);

export default RenderedWindow;
