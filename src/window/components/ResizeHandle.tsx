import React from 'react';
import styled from 'styled-components';

import { Direction } from '../types';

type ResizeHandleProps = {
  resize: (event: React.MouseEvent, direction: Direction) => void;
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
const ResizeHandle = ({ resize }: ResizeHandleProps): JSX.Element => (
  <ResizeHandleElement onMouseDown={(e) => resize(e, Direction.SE)} />
);
export default ResizeHandle;
