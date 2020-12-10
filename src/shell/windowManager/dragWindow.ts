import { WindowType } from '../../window/types';

const dragWindow = (
  initialEvent: MouseEvent,
  window: WindowType,
  updateWindow: (window: WindowType) => void
): void => {
  initialEvent.preventDefault();

  let endDragEventListener: (e: MouseEvent) => void | null = null;
  let dragEventListener: (e: MouseEvent) => void | null = null;
  let prevClientX: number | null = null;
  let prevClientY: number | null = null;
  let xOffset = 0;
  let yOffset = 0;

  /* eslint-disable no-param-reassign */
  const drag = (event: MouseEvent) => {
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

        window.positionX -= xOffset;
        window.positionY -= yOffset;

        updateWindow(window);
      }
    }
  };
  /* eslint-enable no-param-reassign */

  const endDrag = () => {
    document.removeEventListener('mousemove', dragEventListener);
    document.removeEventListener('mouseup', endDragEventListener);
  };

  dragEventListener = (e) => drag(e);
  endDragEventListener = () => endDrag();

  document.addEventListener('mousemove', dragEventListener);
  document.addEventListener('mouseup', endDragEventListener);
};

export default dragWindow;
