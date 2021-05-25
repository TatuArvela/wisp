import React from 'react';
import styled from 'styled-components';

import { useWindowManagerContext } from '../shell/windowManager/WindowManagerContext';
import { Direction } from '../window/types';

type ResizeHandleProps = {
  windowId: string;
};

const ResizeHandleElement = styled.div`
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
const ResizeHandle = ({ windowId }: ResizeHandleProps): JSX.Element => {
  const { resizeWindow } = useWindowManagerContext();
  return (
    <ResizeHandleElement
      onMouseDown={(e) => resizeWindow(e, windowId, Direction.SE)}
    />
  );
};
export default ResizeHandle;
