import React from 'react';
import styled from 'styled-components';

export interface TaskbarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
}

const TaskbarButton = styled.button<TaskbarButtonProps>`
  ${(props) => props.theme.elements.TaskbarButton}
`;

TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
