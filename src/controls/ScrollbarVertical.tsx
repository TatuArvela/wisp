import React, { useRef } from 'react';
import styled from 'styled-components';

import { ScrollPositions } from './types';

export const ScrollbarVerticalThemeProperties = [
  'ScrollbarVerticalWrapper',
  'ScrollbarVerticalTrack',
  'ScrollbarVerticalThumb',
  'ScrollDownButton',
  'ScrollUpButton',
] as const;

const ScrollUpButton = styled.button`
  ${(props) => props.theme.controls.ScrollUpButton}
`;

const ScrollDownButton = styled.button`
  ${(props) => props.theme.controls.ScrollDownButton}
`;

const ScrollbarVerticalTrack = styled.div`
  ${(props) => props.theme.controls.ScrollbarVerticalTrack}
`;

const ScrollbarVerticalThumb = styled.div`
  ${(props) => props.theme.controls.ScrollbarVerticalThumb}
`;

const ScrollbarVerticalWrapper = styled.div`
  ${(props) => props.theme.controls.ScrollbarVerticalWrapper}
`;

export interface ScrollbarVerticalProps {
  height: number;
  scrollPositions: ScrollPositions;
  moveScrollbar: (movement: number, smooth?: boolean) => void;
}
const ScrollbarVertical = ({
  height,
  scrollPositions,
  moveScrollbar,
}: ScrollbarVerticalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const onThumbMouseDown = (e) => {
    e.preventDefault();

    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      if (event.button === 0) {
        const ratio = height / thumbRef.current.getBoundingClientRect().height;
        moveScrollbar(event.movementY * ratio);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', this);
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
    const thumbHeight = `calc(100% * (${height} / ${scrollPositions.scrollHeight}))`;
    const topPosition = `calc(${
      scrollPositions.scrollTop / scrollPositions.scrollTopMax
    } * (100% - ${thumbHeight}))`;
    return {
      height: thumbHeight,
      top: topPosition,
    };
  };

  return (
    <ScrollbarVerticalWrapper
      style={{ height: height + 'px' }}
      ref={wrapperRef}
    >
      <ScrollUpButton onMouseDown={onButtonMouseDown(-50)} />
      <ScrollbarVerticalTrack>
        <ScrollbarVerticalThumb
          ref={thumbRef}
          style={getThumbStyle()}
          onMouseDown={onThumbMouseDown}
        />
      </ScrollbarVerticalTrack>
      <ScrollDownButton onMouseDown={onButtonMouseDown(50)} />
    </ScrollbarVerticalWrapper>
  );
};

export default ScrollbarVertical;
