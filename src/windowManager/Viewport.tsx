import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ViewportElement = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Viewport = React.forwardRef<HTMLDivElement, Props>(
  ({ children }: Props, ref) => (
    <ViewportElement ref={ref}>{children}</ViewportElement>
  )
);

export default Viewport;
