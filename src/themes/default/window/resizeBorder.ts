import { css } from 'styled-components';

const size = 5;
const offset = -5;

const sharedStyle = css`
  box-sizing: border-box;
  position: absolute;
`;

const NResize = css`
  ${sharedStyle};
  top: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: n-resize;
`;

const NEResize = css`
  ${sharedStyle};
  top: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: ne-resize;
`;

const EResize = css`
  ${sharedStyle};
  top: ${offset}px;
  bottom: ${offset}px;
  right: ${offset}px;
  width: ${size}px;
  cursor: e-resize;
`;

const SEResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: se-resize;
`;

const SResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: s-resize;
`;

const SWResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: sw-resize;
`;

const WResize = css`
  ${sharedStyle};
  top: ${offset}px;
  bottom: ${offset}px;
  left: ${offset}px;
  width: ${size}px;
  cursor: w-resize;
`;

const NWResize = css`
  ${sharedStyle};
  top: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: nw-resize;
`;

export default {
  EResize,
  NEResize,
  NResize,
  NWResize,
  SEResize,
  SResize,
  SWResize,
  WResize,
};
