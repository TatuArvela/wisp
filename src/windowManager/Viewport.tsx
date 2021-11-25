import React from 'react';
import styled from 'styled-components';

type Props = {
  ref: React.Ref<HTMLDivElement>;
};

const ViewportElement = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
`;

const Viewport: React.FC<Props> = React.forwardRef(({ children }, ref) => (
  <ViewportElement ref={ref}>{children}</ViewportElement>
));

export default Viewport;
