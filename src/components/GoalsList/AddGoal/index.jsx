import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSetRecoilState } from 'recoil';
import { goalsState } from '../goals.atoms';

const AddGoal = () => {
  const setNewGoal = useSetRecoilState(goalsState);

  const addGoalHandler = () => {
    setNewGoal((oldGoals) => [...oldGoals, oldGoals.length]);
  };

  return (
    <Button type="primary" size="large" icon={<PlusOutlined />} onClick={addGoalHandler}>
      ADD GOAL
    </Button>
  );
};

export default AddGoal;
