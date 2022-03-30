import { atom, selector } from 'recoil';

export const currentUserAtom = atom({
  key: 'Users/Current',
  default: null,
});

export const allUsersSelector = selector({
  key: 'Users/All',
  get: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    return data.map(({ id, name }) => ({ id, name }));
  },
});

export const userPostsSelector = selector({
  key: 'Users/Posts',
  get: async ({ get }) => {
    const currentUserId = get(currentUserAtom);

    if (currentUserId === null) return null;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}/posts`);
    const posts = await res.json();

    return posts.map(({ id, title, body }) => ({
      id,
      title: title.slice(0, 30),
      body: body.slice(0, 50),
    }));
  },
});
