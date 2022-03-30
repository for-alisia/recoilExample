import { atom } from 'recoil';
import { FILTERS } from '../utils/filters';

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: FILTERS.ALL,
});
