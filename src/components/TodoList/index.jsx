import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../recoil/todo.atoms';
import TodoCard from '../TodoCard';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const TodoList = () => {
  // Getter for state value (if we don't need to change data) - read-only
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <List>
      {todoList.map(({ title, description, status, id }) => (
        <Item key={id}>
          <TodoCard title={title} description={description} status={status} id={id} />
        </Item>
      ))}
    </List>
  );
};

export default TodoList;
