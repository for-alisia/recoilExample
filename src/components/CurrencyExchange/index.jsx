import CurrencyInputs from './CurrencyInputs';
import ComissionInput from './ComissionInput';
import styled from 'styled-components';

const CurrencyWrapper = styled.section`
  margin-bottom: 2rem;
`;

const CurrencyExchange = () => {
  return (
    <CurrencyWrapper>
      <h2>CONVERT CURRENCY</h2>
      <CurrencyInputs />
      <ComissionInput />
    </CurrencyWrapper>
  );
};

export default CurrencyExchange;
