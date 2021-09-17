import React from 'react';
import styled from 'styled-components';

import { Direction } from '../../windowManager/types';

type ResizeBorderProps = {
  resize: (event: React.MouseEvent, direction: Direction) => void;
};

const size = 5;
const offset = -5;

const Resize = styled.div`
  box-sizing: border-box;
  position: absolute;
`;

const NResize = styled(Resize)`
  top: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: n-resize;
`;

const NEResize = styled(Resize)`
  top: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: ne-resize;
`;

const EResize = styled(Resize)`
  top: ${offset}px;
  bottom: ${offset}px;
  right: ${offset}px;
  width: ${size}px;
  cursor: e-resize;
`;

const SEResize = styled(Resize)`
  bottom: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: se-resize;
`;

const SResize = styled(Resize)`
  bottom: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: s-resize;
`;

const SWResize = styled(Resize)`
  bottom: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: sw-resize;
`;

const WResize = styled(Resize)`
  top: ${offset}px;
  bottom: ${offset}px;
  left: ${offset}px;
  width: ${size}px;
  cursor: w-resize;
`;

const NWResize = styled(Resize)`
  top: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: nw-resize;
`;

const ResizeBorder = ({ resize }: ResizeBorderProps): JSX.Element => (
  <>
    <NResize onMouseDown={(e) => resize(e, Direction.N)} />
    <EResize onMouseDown={(e) => resize(e, Direction.E)} />
    <SResize onMouseDown={(e) => resize(e, Direction.S)} />
    <WResize onMouseDown={(e) => resize(e, Direction.W)} />
    <NEResize onMouseDown={(e) => resize(e, Direction.NE)} />
    <SEResize onMouseDown={(e) => resize(e, Direction.SE)} />
    <SWResize onMouseDown={(e) => resize(e, Direction.SW)} />
    <NWResize onMouseDown={(e) => resize(e, Direction.NW)} />
  </>
);

export default ResizeBorder;
