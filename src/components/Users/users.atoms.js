import { atom, selector } from 'recoil';
import { getWeather } from '../../utils/fakeWeatherAPI';

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

export const userStateSelector = selector({
  key: 'Users/User',
  get: async ({ get }) => {
    const userId = get(currentUserAtom);
    if (userId) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await res.json();

      return user;
    }

    return null;
  },
});

export const weatherSelector = selector({
  key: 'Users/Weather',
  get: async ({ get }) => {
    const user = get(userStateSelector);

    if (user) {
      const weather = await getWeather(user.address.city);

      return weather;
    }

    return null;
  },
});
