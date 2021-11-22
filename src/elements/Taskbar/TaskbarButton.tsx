import React from 'react';
import styled from 'styled-components';

export type TaskbarButtonProps = {
  active: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const TaskbarButton = styled.button<TaskbarButtonProps>`
  ${(props) => props.theme.elements.TaskbarButton}
`;

TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
