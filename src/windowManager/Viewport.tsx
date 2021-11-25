import React from 'react';
import styled from 'styled-components';

type Props = {
  ref: React.Ref<HTMLDivElement>;
};

const ViewportElement = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Viewport: React.FC<Props> = React.forwardRef(({ children }, ref) => (
  <ViewportElement ref={ref}>{children}</ViewportElement>
));

export default Viewport;
