import { useRecoilValue } from 'recoil';
import { goalsState } from './goals.atoms';
import GoalItem from './Goalitem';
import AddGoal from './AddGoal';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const GoalsList = () => {
  const goalsList = useRecoilValue(goalsState);

  return (
    <div>
      <AddGoal />
      <List>
        {goalsList.map((goalId) => (
          <Item key={goalId}>
            <GoalItem goalId={goalId} />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default GoalsList;
