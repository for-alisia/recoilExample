import { atom, atomFamily } from 'recoil';

export const goalsState = atom({
  key: 'Goals/List',
  default: [],
});

export const goalItem = atomFamily({
  key: 'Goals/Item',
  default: (param) => {
    console.log(param);
    return {
      title: 'Add your goal here',
      description: 'Add description here',
    };
  },
});
