import AddTodo from './AddTodo';
import TodoSteps from './Steps';
import Settings from './Settings';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <h2>TODO LIST</h2>
      <AddTodo />
      <TodoSteps />
      <Settings />
      <TodoList />
    </div>
  );
};

export default Todo;
