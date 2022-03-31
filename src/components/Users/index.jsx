import { Suspense } from 'react';
import UserSelect from './UserSelect';
import Posts from './Posts';
import { Spin } from 'antd';

const Users = () => {
  return (
    <div>
      <h2>USERS POSTS</h2>
      <Suspense fallback={<Spin size="large" />}>
        <UserSelect />
      </Suspense>
      <Suspense fallback={<Spin size="large" />}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Users;
