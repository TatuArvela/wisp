import styled, { css } from 'styled-components';

type TaskbarButtonProps = {
  active: boolean;
};

const activeStyle = css`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`;

const TaskbarButton = styled.button<TaskbarButtonProps>`
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
  ${(props) => props.active && activeStyle};
`;

TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
