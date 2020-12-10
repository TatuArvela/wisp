import RenderedWindow from '../../window/RenderedWindow';
import { WindowType } from '../../window/types';
import { ShellChildren, WindowManager } from '../types';

const mapWindows = (
  windowElements: ShellChildren
): WindowManager['windows'] => {
  const windowMap = new Map<string, WindowType>();

  const windowArray = Array.isArray(windowElements)
    ? windowElements
    : [windowElements];

  windowArray.forEach((windowElement) =>
    windowMap.set(windowElement.props.id, {
      title: windowElement.props.title,
      children: RenderedWindow(windowElement.props),
    })
  );

  return windowMap;
};

// eslint-disable-next-line import/prefer-default-export
export { mapWindows };
