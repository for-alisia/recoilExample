import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState, changeStatus, changeDescription } from '../../recoil/todo.atoms';
import { STATUS } from '../../utils/statuses';
import { Card, Radio, Button, Input } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Content = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.span`
  margin-right: 1rem;
`;

const DescriptionWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 2rem;
`;

const getIcon = (isEditMode) => (isEditMode ? <CheckOutlined /> : <EditOutlined />);

const TodoCard = ({ title, description, status, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [descValue, setDescValue] = useState(description);
  const setChangeTodo = useSetRecoilState(todoListState);

  const changeInputhandler = ({ target: { value } }) => {
    setDescValue(value);
  };

  const changeStatusHandler = ({ target: { value } }) => {
    setChangeTodo(changeStatus(value, id));
  };

  const modeChangeHandler = () => {
    if (isEditMode === true) {
      setChangeTodo(changeDescription(descValue, id));
    }
    setIsEditMode((prevState) => !prevState);
  };

  return (
    <Card title={title} extra={status}>
      <Content>
        <DescriptionWrapper>
          {isEditMode ? (
            <Input value={descValue} onChange={changeInputhandler} />
          ) : (
            <Description>{description}</Description>
          )}
          <Button shape="circle" icon={getIcon(isEditMode)} onClick={modeChangeHandler} />
        </DescriptionWrapper>
        <Radio.Group onChange={changeStatusHandler} value={status}>
          <Radio.Button value={STATUS.NOT_STARTED}>To do</Radio.Button>
          <Radio.Button value={STATUS.IN_PROGRESS}>Start</Radio.Button>
          <Radio.Button value={STATUS.COMPLETED}>Complete</Radio.Button>
          <Radio.Button value={STATUS.CANCELLED}>Cancel</Radio.Button>
        </Radio.Group>
      </Content>
    </Card>
  );
};

export default TodoCard;
