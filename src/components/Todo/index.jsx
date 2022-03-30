import { Suspense } from 'react';
import { Spin } from 'antd';
import AddTodo from './AddTodo';
import TodoSteps from './Steps';
import Settings from './Settings';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div>
      <h2>TODO LIST</h2>
      <Suspense fallback={<Spin size="large" />}>
        <AddTodo />
        <TodoSteps />
        <Settings />
        <TodoList />
      </Suspense>
    </div>
  );
};

export default Todo;
