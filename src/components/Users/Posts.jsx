import { useRecoilValue } from 'recoil';
import { userPostsSelector } from './users.atoms';
import { Card, Empty } from 'antd';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 1rem;
  list-style-type: none;
  justify-content: space-between;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const Posts = () => {
  const userPosts = useRecoilValue(userPostsSelector);

  if (userPosts === null) return <Empty />;

  return (
    <List>
      {userPosts.map((post) => (
        <Item key={post.id}>
          <Card title={post.title} style={{ width: 210 }}>
            <p>{post.body}</p>
          </Card>
        </Item>
      ))}
    </List>
  );
};

export default Posts;
