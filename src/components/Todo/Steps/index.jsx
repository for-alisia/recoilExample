import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../todo.atoms';
import { Steps } from 'antd';
import { STATUS } from '../../../utils/statuses';
import { BulbOutlined, FireOutlined, CheckOutlined, StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StepsWrapper = styled.section`
  margin-block: 2rem;
`;

const TodoSteps = () => {
  const { notStarted, inProgress, completed, cancelled } = useRecoilValue(todoListStatsState);

  return (
    <StepsWrapper>
      <Steps>
        <Steps.Step
          title={`${STATUS.NOT_STARTED}: ${notStarted}`}
          status="finish"
          icon={<BulbOutlined />}
        />
        <Steps.Step
          title={`${STATUS.IN_PROGRESS}: ${inProgress}`}
          status="finish"
          icon={<FireOutlined />}
        />
        <Steps.Step
          title={`${STATUS.COMPLETED}: ${completed}`}
          status="finish"
          icon={<CheckOutlined />}
        />
        <Steps.Step
          title={`${STATUS.CANCELLED}: ${cancelled}`}
          status="finish"
          icon={<StopOutlined />}
        />
      </Steps>
    </StepsWrapper>
  );
};

export default TodoSteps;
