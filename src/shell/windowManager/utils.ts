import { WindowType } from '../../window/types';
import { ShellChildren, WindowManager } from '../types';

const prepareWindows = (
  windowElements: ShellChildren
): WindowManager['windows'] => {
  const windowMap = new Map<string, WindowType>();

  const windowArray = Array.isArray(windowElements)
    ? windowElements
    : [windowElements];

  const positionOffsetPx = 10;

  windowArray.forEach((windowElement, index) => {
    const props = {
      ...windowElement.props,
      positionX: positionOffsetPx * index,
      positionY: positionOffsetPx * index,
    };
    return windowMap.set(props.id, {
      ...props,
    });
  });

  return windowMap;
};

// eslint-disable-next-line import/prefer-default-export
export { prepareWindows };
