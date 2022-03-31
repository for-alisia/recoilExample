import { useRecoilValue } from 'recoil';
import { weatherSelector, userStateSelector } from './users.atoms';
import { Card } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 250px;
`;

const WeatherForUser = () => {
  const user = useRecoilValue(userStateSelector);
  const weather = useRecoilValue(weatherSelector);

  if (!weather) return null;

  return (
    <Wrapper>
      <Card title={`In ${user.address.city}`}>
        <p>+ {weather} ℃</p>
      </Card>
    </Wrapper>
  );
};

export default WeatherForUser;
