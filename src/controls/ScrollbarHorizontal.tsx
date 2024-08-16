import React, { useRef } from 'react';
import styled from 'styled-components';

import { ScrollPositions } from './types';

export const ScrollbarHorizontalThemeProperties = [
  'ScrollbarHorizontalWrapper',
  'ScrollbarHorizontalTrack',
  'ScrollbarHorizontalThumb',
  'ScrollLeftButton',
  'ScrollRightButton',
] as const;

const ScrollLeftButton = styled.button`
  ${(props) => props.theme.controls.ScrollLeftButton}
`;

const ScrollRightButton = styled.button`
  ${(props) => props.theme.controls.ScrollRightButton}
`;

const ScrollbarHorizontalTrack = styled.div`
  ${(props) => props.theme.controls.ScrollbarHorizontalTrack}
`;

const ScrollbarHorizontalThumb = styled.div`
  ${(props) => props.theme.controls.ScrollbarHorizontalThumb}
`;

const ScrollbarHorizontalWrapper = styled.div`
  ${(props) => props.theme.controls.ScrollbarHorizontalWrapper}
`;

export interface ScrollbarHorizontalProps {
  width: number;
  scrollPositions: ScrollPositions;
  moveScrollbar: (movement: number, smooth?: boolean) => void;
}
const ScrollbarHorizontal = ({
  width,
  scrollPositions,
  moveScrollbar,
}: ScrollbarHorizontalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const onThumbMouseDown = (e) => {
    e.preventDefault();

    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      if (event.button === 0) {
        const ratio = width / thumbRef.current.getBoundingClientRect().width;
        moveScrollbar(event.movementX * ratio);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onButtonMouseDown = (amount: number) => () => {
    moveScrollbar(amount, true);
    const interval = setInterval(() => moveScrollbar(amount, true), 250);

    const onMouseUp = () => {
      clearInterval(interval);
    };

    document.addEventListener('mouseup', onMouseUp);
  };

  const getThumbStyle = () => {
    const thumbWidth = `calc(100% * (${width} / ${scrollPositions.scrollWidth}))`;
    const leftPosition = `calc(${
      scrollPositions.scrollLeft / scrollPositions.scrollLeftMax
    } * (100% - ${thumbWidth}))`;
    return {
      '--width': thumbWidth,
      '--left': leftPosition,
    } as React.CSSProperties;
  };

  return (
    <ScrollbarHorizontalWrapper
      style={{ '--width': width + 'px' } as React.CSSProperties}
      ref={wrapperRef}
    >
      <ScrollLeftButton tabIndex={-1} onMouseDown={onButtonMouseDown(-50)} />
      <ScrollbarHorizontalTrack>
        <ScrollbarHorizontalThumb
          ref={thumbRef}
          style={getThumbStyle()}
          onMouseDown={onThumbMouseDown}
        />
      </ScrollbarHorizontalTrack>
      <ScrollRightButton tabIndex={-1} onMouseDown={onButtonMouseDown(50)} />
    </ScrollbarHorizontalWrapper>
  );
};

export default ScrollbarHorizontal;
