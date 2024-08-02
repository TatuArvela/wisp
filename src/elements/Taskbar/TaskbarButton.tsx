import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../../icons';
import { getIconFileForSize } from '../../icons/utils';
import { useThemeManager } from '../../themeManager/hooks';

export const TaskbarButtonThemeProperties = [
  'TaskbarButtonElement',
  'TaskbarButtonTitle',
  'TaskbarButtonIconElement',
] as const;

export interface TaskbarButtonElementProps {
  active: boolean;
}

const TaskbarButtonElement = styled.button<TaskbarButtonElementProps>`
  ${(props) => props.theme.elements.TaskbarButtonElement}
`;

const TaskbarButtonTitle = styled.div`
  ${(props) => props.theme.elements.TaskbarButtonTitle}
`;

const TaskbarButtonIconElement = styled.img`
  ${(props) => props.theme.elements.TaskbarButtonIconElement}
`;

export interface TaskbarButtonIconProps {
  icon: string | Icon;
}

const TaskbarButtonIcon = ({ icon }: TaskbarButtonIconProps) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <TaskbarButtonIconElement src={iconFile} />;
};

export interface TaskbarButtonProps {
  active: boolean;
  icon?: Icon;
  title?: string;
  onClick(): void;
}

export const TaskbarButton = ({
  active,
  icon,
  title,
  onClick,
}: TaskbarButtonProps) => {
  return (
    <TaskbarButtonElement type="button" active={active} onClick={onClick}>
      {icon !== undefined && <TaskbarButtonIcon icon={icon} />}
      <TaskbarButtonTitle>{title}</TaskbarButtonTitle>
    </TaskbarButtonElement>
  );
};

export default TaskbarButton;
