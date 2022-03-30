import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../todo.atoms';
import { FILTERS } from '../../../utils/filters';
import { Menu } from 'antd';
import {
  UnorderedListOutlined,
  CheckOutlined,
  StopOutlined,
  FireOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const MenuSection = styled.section`
  margin-bottom: 1rem;
`;

const Settings = () => {
  // getter and setter (like useState hook)
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const changeFilterHandler = ({ key }) => {
    setFilter(key);
  };

  return (
    <MenuSection>
      <Menu mode="horizontal" onClick={changeFilterHandler} selectedKeys={[filter]}>
        <Menu.Item icon={<UnorderedListOutlined />} key={FILTERS.ALL}>
          All tasks
        </Menu.Item>
        <Menu.Item icon={<FireOutlined />} key={FILTERS.IN_PROGRESS}>
          Tasks in progress
        </Menu.Item>
        <Menu.Item icon={<CheckOutlined />} key={FILTERS.COMPLETED}>
          Completed tasks
        </Menu.Item>
        <Menu.Item icon={<StopOutlined />} key={FILTERS.CANCELLED}>
          Cancelled tasks
        </Menu.Item>
      </Menu>
    </MenuSection>
  );
};

export default Settings;
