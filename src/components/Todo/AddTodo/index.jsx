import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState, addTodo } from '../todo.atoms';
import { Input, Button } from 'antd';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState('');
  // Setter for todoList
  const setTodoList = useSetRecoilState(todoListState);

  const inputChangeHandler = ({ target: { value } }) => {
    setTodoValue(value);
  };

  const addTodoHandler = () => {
    if (todoValue) {
      setTodoList(addTodo(todoValue));
    }
  };

  return (
    <Form>
      <Input placeholder="Add a task" value={todoValue} onChange={inputChangeHandler} />
      <Button type="primary" onClick={addTodoHandler}>
        ADD
      </Button>
    </Form>
  );
};

export default AddTodo;
