import React from 'react';
import styled from 'styled-components';

import { ShellConfig } from '../types';

type WindowAreaProps = {
  config: ShellConfig;
  ref: React.Ref<HTMLDivElement>;
};

const WindowArea = styled.div<WindowAreaProps>`
  bottom: ${(props) =>
    props.config.isTaskbarEnabled ? `${props.config.taskbarHeight}px` : '0'};
  box-sizing: border-box;
  font-family: sans-serif;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;

export default WindowArea;
