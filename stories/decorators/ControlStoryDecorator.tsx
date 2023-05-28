import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Desktop, Window, Wisp } from '../../src/index';
import defaultTheme from '../../src/themes/default/theme';
import { WindowProvider } from '../../src/window/WindowContext';
import { WindowType } from '../../src/windowManager/types';

export const buildControlStoryDecorator =
  ({ width, height }: { width?: number; height?: number }) =>
  (Story, context) => {
    const isInDocs = context.viewMode === 'docs';

    if (isInDocs) {
      return (
        <ThemeProvider theme={defaultTheme}>
          <WindowProvider value={{ height, width } as WindowType}>
            <div
              style={{
                position: 'relative',
                width: width ? `${width}px` : undefined,
                height: height ? `${height}px` : undefined,
              }}
            >
              <Story />
            </div>
          </WindowProvider>
        </ThemeProvider>
      );
    }

    return (
      <Wisp enableVersionInfo={false} enableWindowMinimize={false}>
        <Desktop />
        <Window
          id="1"
          width={width ?? 300}
          height={height ?? 160}
          isClosable={false}
          isMaximizable={false}
        >
          <Story />
        </Window>
      </Wisp>
    );
  };

const ControlStoryDecorator = buildControlStoryDecorator({});

export default ControlStoryDecorator;
