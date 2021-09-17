import { WindowType } from '../types';

const mouseDragHandler = (
  initialEvent: MouseEvent,
  window: WindowType,
  callback: (xOffset: number, yOffset: number) => void
): void => {
  initialEvent.preventDefault();

  let mouseMoveEventListener: (e: MouseEvent) => void | null = null;
  let mouseUpEventListener: (e: MouseEvent) => void | null = null;
  let prevClientX: number | null = null;
  let prevClientY: number | null = null;
  let xOffset = 0;
  let yOffset = 0;

  const onMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 0) {
      if (!prevClientX) {
        prevClientX = event.clientX;
        prevClientY = event.clientY;
      } else {
        xOffset = prevClientX - event.clientX;
        yOffset = (prevClientY as number) - event.clientY;
        prevClientX = event.clientX;
        prevClientY = event.clientY;

        callback(xOffset, yOffset);
      }
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', mouseMoveEventListener);
    document.removeEventListener('mouseup', mouseUpEventListener);
  };

  mouseMoveEventListener = (e) => onMouseMove(e);
  mouseUpEventListener = () => onMouseUp();

  document.addEventListener('mousemove', mouseMoveEventListener);
  document.addEventListener('mouseup', mouseUpEventListener);
};

export default mouseDragHandler;
