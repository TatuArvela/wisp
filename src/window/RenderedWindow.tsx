import React from 'react';
import styled from 'styled-components';

import { WindowProps } from './types';

const WindowComponent = styled.div`
  width: 200px;
  height: 100px;
  border: 2px solid black;
  background: white;
  color: black;
`;

const WindowTitle = styled.div`
  width: 100%;
  height: 20px;
  background: blue;
  color: white;
  border: 2px solid white;
`;

const WindowContent = styled.div`
  height: calc(100% - 20px);
  width: 100%;
  text-align: center;
`;

const RenderedWindow = ({ children, title }: WindowProps): JSX.Element => (
  <WindowComponent>
    <WindowTitle>{title}</WindowTitle>
    <WindowContent>{children}</WindowContent>
  </WindowComponent>
);

export default RenderedWindow;
