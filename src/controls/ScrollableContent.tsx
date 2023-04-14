import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ScrollbarHorizontal from './ScrollbarHorizontal';
import ScrollbarVertical from './ScrollbarVertical';
import { ScrollPositions } from './types';

export const ScrollableContentThemeProperties = [
  'ScrollableContentView',
  'ScrollableContentWrapper',
] as const;

export interface ScrollableContentViewProps {
  children?: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
}
const ScrollableContentView = styled.div<ScrollableContentViewProps>`
  ${(props) => props.theme.controls.ScrollableContentView}
`;

const ScrollableContentWrapper = styled.div`
  ${(props) => props.theme.controls.ScrollableContentWrapper}
`;

const mapScrollPositions = (target?: ScrollPositions) => ({
  scrollHeight: target?.scrollHeight ?? 0,
  scrollLeft: target?.scrollLeft ?? 0,
  scrollLeftMax: target?.scrollLeftMax ?? 0,
  scrollTop: target?.scrollTop ?? 0,
  scrollTopMax: target?.scrollTopMax ?? 0,
  scrollWidth: target?.scrollWidth ?? 0,
});

export interface ScrollableContentProps {
  children?: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
}
const ScrollableContent = ({
  children,
  horizontal,
  vertical,
}: ScrollableContentProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  const [viewWidth, setViewWidth] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [scrollPositions, setScrollPositions] = useState<ScrollPositions>();
  const [showHorizontal, setShowHorizontal] = useState<boolean>();
  const [showVertical, setShowVertical] = useState<boolean>();

  const updateState = useCallback(() => {
    setViewWidth(viewRef.current.getBoundingClientRect().width);
    setViewHeight(viewRef.current.getBoundingClientRect().height);
    setScrollPositions(
      mapScrollPositions(viewRef.current as unknown as ScrollPositions)
    );
    setShowHorizontal(
      horizontal &&
        viewRef.current.scrollWidth >
          wrapperRef.current.getBoundingClientRect().width
    );
    setShowVertical(
      vertical &&
        viewRef.current.scrollHeight >
          wrapperRef.current.getBoundingClientRect().height
    );
  }, [horizontal, vertical]);

  const resizeObserver = useRef(
    new ResizeObserver((entries) => {
      updateState();
    })
  );

  useEffect(() => {
    const observer = resizeObserver.current;
    const view = viewRef?.current;
    if (view) {
      updateState();
      observer.observe(view);
    }
    return () => observer.unobserve(view);
  }, [updateState]);

  const scrollHandler = (e) => {
    setScrollPositions(
      mapScrollPositions(viewRef.current as unknown as ScrollPositions)
    );
  };

  const moveScrollPosition = (
    movementX: number,
    movementY: number,
    smooth?: boolean
  ) => {
    viewRef.current.scrollTo({
      left: Math.max(
        Math.min(
          viewRef.current.scrollLeft + movementX,
          (viewRef.current as unknown as ScrollPositions).scrollLeftMax
        ),
        0
      ),
      top: Math.max(
        Math.min(
          viewRef.current.scrollTop + movementY,
          (viewRef.current as unknown as ScrollPositions).scrollTopMax
        ),
        0
      ),
      behavior: smooth ? 'smooth' : undefined,
    });
  };

  return (
    <ScrollableContentWrapper ref={wrapperRef}>
      <ScrollableContentView
        ref={viewRef}
        vertical={showVertical}
        horizontal={showHorizontal}
        onScroll={scrollHandler}
      >
        {children}
      </ScrollableContentView>
      {showVertical && (
        <ScrollbarVertical
          height={viewHeight}
          scrollPositions={scrollPositions}
          moveScrollbar={(movementY, smooth) =>
            moveScrollPosition(0, movementY, smooth)
          }
        />
      )}
      {showHorizontal && (
        <ScrollbarHorizontal
          width={viewWidth}
          scrollPositions={scrollPositions}
          moveScrollbar={(movementX, smooth) =>
            moveScrollPosition(movementX, 0, smooth)
          }
        />
      )}
    </ScrollableContentWrapper>
  );
};

export default ScrollableContent;
