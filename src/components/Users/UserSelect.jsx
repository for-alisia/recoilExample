import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allUsersSelector, currentUserAtom } from './users.atoms';
import { Select } from 'antd';

const { Option } = Select;

const UserSelect = () => {
  const users = useRecoilValue(allUsersSelector);
  const setCurrentUser = useSetRecoilState(currentUserAtom);

  const onChange = (value) => {
    console.log({ value });
    setCurrentUser(value);
  };
  return (
    <Select placeholder="Select a user" size="large" style={{ width: 300 }} onChange={onChange}>
      {users.map((user) => (
        <Option key={user.id} value={user.id}>
          {user.name}
        </Option>
      ))}
    </Select>
  );
};

export default UserSelect;
