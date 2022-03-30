import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { STATUS } from '../../utils/statuses';
import { FILTERS } from '../../utils/filters';

const testData = [
  { title: 'Card 1', description: 'Some description', status: 'Not started', id: 0 },
  { title: 'Card 2', description: 'Some other description', status: 'In progress', id: 1 },
];

// List of all todos
export const todoListState = atom({
  key: 'Todo/List',
  default: testData,
});

// fontVariantAlternates:
export const todoListFilterState = atom({
  key: 'Todo.Filter',
  default: FILTERS.ALL,
});

// Get stats selector
export const todoListStatsState = selector({
  key: 'Todo/Stats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const notStarted = todoList.filter(({ status }) => status === STATUS.NOT_STARTED).length;
    const inProgress = todoList.filter(({ status }) => status === STATUS.IN_PROGRESS).length;
    const completed = todoList.filter(({ status }) => status === STATUS.COMPLETED).length;
    const cancelled = todoList.filter(({ status }) => status === STATUS.CANCELLED).length;

    return {
      total,
      notStarted,
      inProgress,
      completed,
      cancelled,
    };
  },
});

// Get filtered list selector
export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTERS.IN_PROGRESS:
        return list.filter(({ status }) => status === STATUS.IN_PROGRESS);
      case FILTERS.COMPLETED:
        return list.filter(({ status }) => status === STATUS.COMPLETED);
      case FILTERS.CANCELLED:
        return list.filter(({ status }) => status === STATUS.CANCELLED);
      default:
        return list;
    }
  },
});

// Actions (We are getting oldState by recoil)
export const addTodo =
  (title, description = 'Add description') =>
  (oldTodoList) => {
    const newTodo = {
      id: uuidv4(),
      title,
      description,
      status: STATUS.NOT_STARTED,
    };

    return [...oldTodoList, newTodo];
  };

export const changeStatus = (newStatus, todoId) => (oldTodoList) => {
  const idxToChange = oldTodoList.findIndex(({ id }) => id === todoId);
  const newList = [...oldTodoList];

  if (idxToChange !== -1) {
    const newElement = { ...oldTodoList[idxToChange], status: newStatus };

    newList[idxToChange] = newElement;
  }

  return newList;
};

export const changeDescription = (newDescription, todoId) => (oldTodoList) => {
  const idxToChange = oldTodoList.findIndex(({ id }) => id === todoId);
  const newList = [...oldTodoList];

  if (idxToChange !== -1) {
    const newElement = { ...oldTodoList[idxToChange], description: newDescription };

    newList[idxToChange] = newElement;
  }

  return newList;
};
