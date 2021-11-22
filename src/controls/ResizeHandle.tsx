import React from 'react';
import styled from 'styled-components';

import { useWindowManager } from '../windowManager/hooks';
import { Direction } from '../windowManager/types';

type ResizeHandleProps = {
  windowId: string;
};

const ResizeHandleElement = styled.div`
  ${(props) => props.theme.controls.ResizeHandle}
`;

const ResizeHandle = ({ windowId }: ResizeHandleProps): JSX.Element => {
  const { resizeWindow } = useWindowManager();
  return (
    <ResizeHandleElement
      onMouseDown={(e) => resizeWindow(e, windowId, Direction.SE)}
    />
  );
};
export default ResizeHandle;
