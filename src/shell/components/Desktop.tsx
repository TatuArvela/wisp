import styled from 'styled-components';

import { Config } from '../types';

type WindowAreaProps = {
  config: Config;
};
const Desktop = styled.div<WindowAreaProps>`
  background: ${(props) =>
    props.config.transparentBackground ? 'transparent' : 'rgb(10, 36, 106)'};
  bottom: ${(props) =>
    props.config.disableTaskbar ? '0' : `${props.config.taskbarHeight}px`};
  box-sizing: border-box;
  font-family: sans-serif;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;
export default Desktop;
