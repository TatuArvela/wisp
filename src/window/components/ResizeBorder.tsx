import React from 'react';
import styled from 'styled-components';

import { Direction } from '../../windowManager/types';

interface ResizeBorderProps {
  resize: (event: React.MouseEvent, direction: Direction) => void;
}

const NResize = styled.div`
  ${(props) => props.theme.window.NResize}
`;

const NEResize = styled.div`
  ${(props) => props.theme.window.NEResize}
`;

const EResize = styled.div`
  ${(props) => props.theme.window.EResize}
`;

const SEResize = styled.div`
  ${(props) => props.theme.window.SEResize}
`;

const SResize = styled.div`
  ${(props) => props.theme.window.SResize}
`;

const SWResize = styled.div`
  ${(props) => props.theme.window.SWResize}
`;

const WResize = styled.div`
  ${(props) => props.theme.window.WResize}
`;

const NWResize = styled.div`
  ${(props) => props.theme.window.NWResize}
`;

const ResizeBorder = ({ resize }: ResizeBorderProps) => (
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
