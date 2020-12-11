import React from 'react';
import styled from 'styled-components';

import { Direction } from '../types';

type ResizeBorderProps = {
  resize: (event: React.MouseEvent, direction: Direction) => void;
};

const size = 5;
const offset = -5;

const NResize = styled.div`
  position: absolute;
  top: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: n-resize;
`;

const NEResize = styled.div`
  position: absolute;
  top: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  width: ${size}px;
  cursor: ne-resize;
`;

const EResize = styled.div`
  position: absolute;
  top: ${offset}px;
  bottom: ${offset}px;
  right: ${offset}px;
  width: ${size}px;
  cursor: e-resize;
`;

const SEResize = styled.div`
  position: absolute;
  bottom: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  width: ${size}px;
  cursor: se-resize;
`;

const SResize = styled.div`
  position: absolute;
  bottom: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: s-resize;
`;

const SWResize = styled.div`
  position: absolute;
  bottom: ${offset}px;
  left: ${offset}px;
  height: ${size}px;
  width: ${size}px;
  cursor: sw-resize;
`;

const WResize = styled.div`
  position: absolute;
  top: ${offset}px;
  bottom: ${offset}px;
  left: ${offset}px;
  width: ${size}px;
  cursor: w-resize;
`;

const NWResize = styled.div`
  position: absolute;
  top: ${offset}px;
  left: ${offset}px;
  height: ${size}px;
  width: ${size}px;
  cursor: nw-resize;
`;

const ResizeBorder = ({ resize }: ResizeBorderProps): JSX.Element => (
  <>
    <NResize onMouseDown={(e) => resize(e, Direction.N)} />
    <NEResize onMouseDown={(e) => resize(e, Direction.NE)} />
    <EResize onMouseDown={(e) => resize(e, Direction.E)} />
    <SEResize onMouseDown={(e) => resize(e, Direction.SE)} />
    <SResize onMouseDown={(e) => resize(e, Direction.S)} />
    <SWResize onMouseDown={(e) => resize(e, Direction.SW)} />
    <WResize onMouseDown={(e) => resize(e, Direction.W)} />
    <NWResize onMouseDown={(e) => resize(e, Direction.NW)} />
  </>
);

export default ResizeBorder;
