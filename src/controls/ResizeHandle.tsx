import React from 'react';
import styled from 'styled-components';

import { Direction } from '../windowManager/types';
import { useWindowManagerContext } from '../windowManager/WindowManagerContext';

type ResizeHandleProps = {
  windowId: string;
};

const ResizeHandleElement = styled.div`
  ${(props) => props.theme.controls.ResizeHandle}
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
