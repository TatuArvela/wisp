import { WispConfig } from 'core/types';
import styled from 'styled-components';

type WindowAreaProps = {
  config: WispConfig;
};
const Desktop = styled.div<WindowAreaProps>`
  background: ${(props) =>
    props.config.isBackgroundEnabled ? 'rgb(10, 36, 106)' : 'transparent'};
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;
export default Desktop;
